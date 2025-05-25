import React from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCategories from "../../../Hooks/useCategories";

const ManageCategories = () => {
  const axiosSecure = useAxiosSecure();
  const [categories, refetchCategories] = useCategories();

  const handleAddCategory = (e) => {
    e.preventDefault();
    const form = e.target;
    let categoryName = form.categoryName.value;
    let categoryImage = form.categoryImage.value;
    const categoryItem = { categoryName, categoryImage };

    axiosSecure.post("/category", categoryItem).then((res) => {
      if (res.data.insertedId) {
        document.getElementById("add-category-modal").close();
        refetchCategories();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${categoryName} has been added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    form.categoryName.value = "";
    form.categoryImage.value = "";
  };

  // delete category
  const handleDelete = async (cat) => {
    Swal.fire({
      title: `Are you sure want to Delete ${cat?.categoryName} from category list?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axiosSecure
          .delete(`/category/${cat._id}`)
          .then(async (res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${cat?.categoryName} has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetchCategories();
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${err.message}`,
            });
          });
      }
    });
  };

  return (
    <section className="w-full px-1 py-4">
      <DashboardBanner
        heading="Medicine Category Management"
        subHeading="Add, edit, or remove medicine categories to keep your product catalog organized and up-to-date."
      ></DashboardBanner>
      <div className="flex justify-center bg-secondary items-center mb-4 pb-4 text-white">
        <button
          className="btn btn-outline btn-sm flex items-center gap-2"
          onClick={() =>
            document.getElementById("add-category-modal").showModal()
          }
        >
          <FaPlus /> Add Category
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((cat, index) => (
              <tr key={cat?._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={cat?.categoryImage}
                    alt={cat?.categoryName}
                    className="w-16  rounded"
                  />
                </td>
                <td>{cat.categoryName}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleDelete(cat)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <dialog id="add-category-modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Add New Category</h3>
          <form onSubmit={handleAddCategory} className="space-y-3">
            <input
              type="text"
              name="categoryName"
              placeholder="Category Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="categoryImage"
              placeholder="Category Image URL"
              className="input input-bordered w-full"
              required
            />
            <div className="modal-action">
              <input
                type="submit"
                className="btn btn-secondary"
                value="Add"
              ></input>
              <div>
                <div
                  onClick={() =>
                    document.getElementById("add-category-modal").close()
                  }
                  className="btn"
                >
                  Cancel
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ManageCategories;
