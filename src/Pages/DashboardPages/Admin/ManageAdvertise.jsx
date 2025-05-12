import { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";

const ManageAdvertise = () => {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg",
      image: "https://i.ibb.co.com/YVr64R3/Paracetamol-500mg.png",
      description: "Fast relief from fever and mild to moderate pain.",
      sellerEmail: "seller1@mediplus.com",
      isInSlider: true,
    },
    {
      id: 2,
      name: "Napa Extra",
      image: "https://i.ibb.co.com/Y4Nk16XR/Napa-Extra.png",
      description: "Extra strength pain reliever for headaches and colds.",
      sellerEmail: "healthmart@bdmed.com",
    },
    {
      id: 3,
      name: "Antacid Suspension",
      image: "https://i.ibb.co.com/0yZ94868/Antacid-Suspension.png",
      description: "Provides instant relief from acidity and heartburn.",
      sellerEmail: "drpharma@medishop.com",
      isInSlider: true,
    },
  ]);

  const handleToggle = (id) => {
    const updated = medicines.map((med) =>
      med.id === id ? { ...med, isInSlider: !med.isInSlider } : med
    );
    setMedicines(updated);
    // TODO: Send update to backend (PATCH /medicines/:id)
  };

  return (
    <section className="p-6">
      <DashboardBanner
        heading="Manage Banner Advertisements"
        subHeading="Control which medicines appear in the homepage slider. Toggle visibility with ease and manage promotional content effectively."
      ></DashboardBanner>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="table w-full table-zebra">
          <thead className="bg-base-200 text-base">
            <tr>
              <th>#</th>
              <th>Medicine</th>
              <th>Description</th>
              <th>Seller Email</th>
              <th>Image</th>
              <th>Slide Toggle</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((med, index) => (
              <tr key={med.id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{med.name}</td>
                <td>{med.description}</td>
                <td>{med.sellerEmail}</td>
                <td>
                  <img
                    src={med.image}
                    alt={med.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                </td>
                <td>
                  <button
                    className="text-xl"
                    onClick={() => handleToggle(med.id)}
                  >
                    {med.isInSlider ? (
                      <FaToggleOn className="text-green-500" />
                    ) : (
                      <FaToggleOff className="text-red-500" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageAdvertise;
