import { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";

const ManageMedicines = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddMedicine = (e) => {
    e.preventDefault();
    //TODO: Handle form submission logic here
    setShowModal(false);
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
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://i.ibb.co/YVr64R3/Paracetamol-500mg.png"
                  alt="medicine"
                  className="rounded"
                />
              </td>
              <td>Paracetamol</td>
              <td>Acetaminophen</td>
              <td>500mg</td>
              <td>$1.50</td>
              <td>10%</td>
              <td>Fever</td>
              <td>XYZ Pharma</td>
              <td className="flex gap-2">
                <button className="btn btn-sm btn-warning">
                  <FaEdit />
                </button>
                <button className="btn btn-sm btn-error">
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-secondary/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl border border-secondary">
            <h3 className="text-xl font-semibold mb-4">Add New Medicine</h3>
            <form
              onSubmit={handleAddMedicine}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Item Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                placeholder="Generic Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                placeholder="Short Description"
                className="input input-bordered w-full md:col-span-2"
              />
              <input
                type="url"
                placeholder="Image URL"
                className="input input-bordered w-full"
                required
              />
              <select className="select select-bordered w-full" required>
                <option disabled selected>
                  Category
                </option>
                <option>Fever</option>
                <option>Cold</option>
              </select>
              <select className="select select-bordered w-full" required>
                <option disabled selected>
                  Company
                </option>
                <option>XYZ Pharma</option>
                <option>ABC Labs</option>
              </select>
              <select className="select select-bordered w-full" required>
                <option disabled selected>
                  Mass Unit
                </option>
                <option>Mg</option>
                <option>ML</option>
              </select>
              <input
                type="number"
                placeholder="Price per Unit"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                placeholder="Discount (%)"
                className="input input-bordered w-full"
                defaultValue={0}
              />
              <div className="md:col-span-2 flex justify-end gap-2">
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
