import React from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const ManageCategories = () => {
  const categoryCards = [
    {
      id: 1,
      categoryName: "Pain Relief",
      image: "https://i.ibb.co.com/1fS8xRHW/Pain-Relief.png",
      medicineCount: 24,
    },
    {
      id: 2,
      categoryName: "Digestive Health",
      image: "https://i.ibb.co.com/dw4pwrGY/Digestive-Health.png",
      medicineCount: 18,
    },
    {
      id: 3,
      categoryName: "Vitamins & Supplements",
      image: "https://i.ibb.co.com/KjKmgmxw/Vitamins-Supplements.png",
      medicineCount: 32,
    },
    {
      id: 4,
      categoryName: "Cough & Cold",
      image: "https://i.ibb.co.com/4Zq6rkYk/Cough-Cold.png",
      medicineCount: 15,
    },
    {
      id: 5,
      categoryName: "Skin Care",
      image: "https://i.ibb.co.com/gLNrwgDP/Skin-Care.png",
      medicineCount: 12,
    },
    {
      id: 6,
      categoryName: "Child Care",
      image: "https://i.ibb.co.com/JwQVz5mY/Child-Care.png",
      medicineCount: 20,
    },
  ];
  return (
    <section className="w-full px-1 py-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-center w-full">
          <h2 className="text-center text-3xl font-bold">Manage Categories</h2>
        </div>
        <button
          className="btn btn-secondary btn-sm flex items-center gap-2"
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
            {categoryCards.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={cat.image}
                    alt={cat.categoryName}
                    className="w-16  rounded"
                  />
                </td>
                <td>{cat.categoryName}</td>
                <td className="flex gap-2">
                  <button className="btn btn-sm btn-outline btn-info">
                    <FaEdit />
                  </button>
                  <button
                    // onClick={() => handleDelete(cat.id)}
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
          <form className="space-y-3">
            <input
              type="text"
              name="categoryName"
              placeholder="Category Name"
              className="input input-bordered w-full"
              //   value={newCategory.categoryName}
              //   onChange={handleInputChange}
            />
            <input
              type="text"
              name="categoryImage"
              placeholder="Category Image URL"
              className="input input-bordered w-full"
              //   value={newCategory.categoryImage}
              //   onChange={handleInputChange}
            />
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-success"
                // onClick={handleAddCategory}
              >
                Add
              </button>
              <form method="dialog">
                <button className="btn">Cancel</button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </section>
  );
};

export default ManageCategories;
