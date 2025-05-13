import { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";
import useCategories from "../../../Hooks/useCategories";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMedicines from "../../../Hooks/useMedicines";

const ManageMedicines = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [categories] = useCategories();
  const axiosSecure = useAxiosSecure();
  const [medicines, refetchMedicines] = useMedicines();

  const handleAddMedicine = (e) => {
    e.preventDefault();
    //TODO: Handle form submission logic here

    const form = e.target;
    const medicineName = form.medicineName.value;
    const genericName = form.genericName.value;
    const description = form.description.value;
    const medicineImage = form.medicineImage.value;
    const category = form.category.value;
    const companyName = form.companyName.value;
    const massUnit = form.massUnit.value;
    const price = parseInt(parseFloat(form.price.value).toFixed(2));
    const discountPercentage = parseInt(form.discountPercentage.value) || 0;
    const sellerEmail = user?.email;

    const medicineItem = {
      medicineName,
      genericName,
      description,
      medicineImage,
      category,
      companyName,
      massUnit,
      price,
      discountPercentage,
      sellerEmail,
    };

    axiosSecure
      .post("/medicine", medicineItem)
      .then((res) => {
        if (res.data.insertedId) {
          refetchMedicines();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${medicineName} has been added.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        })
      );

    // console.log(medicineItem);
    setShowModal(false);
    form.medicineName.value = "";
    form.genericName.value = "";
    form.description.value = "";
    form.medicineImage.value = "";
    form.category.value = "";
    form.companyName.value = "";
    form.massUnit.value = "";
    form.price.value = "";
    form.discountPercentage.value = "";
  };

  return (
    <section className="w-full px-1">
      <DashboardBanner
        heading="Manage Medicines"
        subHeading="Easily view, add, and manage all your listed medicines. Keep your inventory updated with essential details and control your stock with precision."
      ></DashboardBanner>

      <div className="bg-secondary flex items-center justify-center">
        <button
          className="btn btn-outline text-white hover:text-black flex items-center gap-2 mb-4"
          onClick={() => setShowModal(true)}
        >
          <FaPlus /> Add Medicine
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Generic</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Discount %</th>
              <th>Category</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Replace with dynamic data */}
            {medicines?.map((medicine, index) => (
              <tr key={medicine?._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={medicine?.medicineImage}
                    alt="medicine"
                    className="rounded"
                  />
                </td>
                <td>{medicine?.medicineName}</td>
                <td>{medicine?.genericName}</td>
                <td>500mg</td>
                <td>${medicine?.price}</td>
                <td>{medicine?.discountPercentage}%</td>
                <td>{medicine?.category}</td>
                <td>{medicine?.companyName}</td>
                <td className="flex gap-2">
                  <button className="btn btn-sm btn-warning">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-error">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          {/* // <div className="modal-box fixed inset-0 flex justify-center items-center z-50"> */}
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl border border-secondary">
            <h3 className="text-xl font-semibold mb-4">Add New Medicine</h3>
            <form
              onSubmit={handleAddMedicine}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Medicine Name
                  </span>
                </label>
                <input
                  type="text"
                  name="medicineName"
                  placeholder="Medicine Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Generic Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Generic Name"
                  name="genericName"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text font-semibold">
                    Short Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  name="description"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Image URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Image URL"
                  name="medicineImage"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>
                <select
                  name="category"
                  className="select select-bordered w-full"
                  required
                >
                  <option disabled selected>
                    Choose Category
                  </option>
                  {categories?.map((category) => (
                    <option value={category?.categoryName}>
                      {category?.categoryName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Company</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  name="companyName"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Mass Unit</span>
                </label>
                <select
                  name="massUnit"
                  className="select select-bordered w-full"
                  required
                >
                  <option disabled selected>
                    Mass Unit
                  </option>
                  <option value="Mg">Mg</option>
                  <option value="ML">ML</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">
                    Price per Unit
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Price per Unit"
                  name="price"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Discount (%)</span>
                </label>
                <input
                  type="number"
                  placeholder="Discount (%)"
                  className="input input-bordered w-full"
                  defaultValue="0"
                  name="discountPercentage"
                />
              </div>

              <div className="md:col-span-2 flex justify-end gap-2 mt-4">
                <button className="btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-secondary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageMedicines;
