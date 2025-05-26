import { useState } from "react";
import { FaToggleOn, FaToggleOff, FaPlusCircle } from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";

const AskForAdvertise = () => {
  const [advertisements, setAdvertisements] = useState([
    {
      id: 1,
      image: "https://i.ibb.co/YVr64R3/Paracetamol-500mg.png",
      name: "Paracetamol 500mg",
      description: "Best-selling pain relief tablet for fever and headache.",
      status: true,
    },
    {
      id: 2,
      image: "https://i.ibb.co/Y4Nk16XR/Napa-Extra.png",
      name: "Napa Extra",
      description: "Powerful tablet for flu and cold symptoms.",
      status: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAd = {
      id: advertisements.length + 1,
      ...formData,
      status: false,
    };
    setAdvertisements([...advertisements, newAd]);
    setFormData({ name: "", image: "", description: "" });
    setShowModal(false);
  };

  return (
    <section className="w-full px-1">
      <DashboardBanner
        heading="Ask For Advertisement"
        subHeading=" Submit your medicines for the advertisement slider and monitor their status."
      ></DashboardBanner>
      <div className="flex justify-center bg-secondary items-center">
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-outline text-white hover:text-black gap-2 mb-4"
        >
          <FaPlusCircle /> Add Advertise
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Medicine Name</th>
              <th>Description</th>
              <th>Slider Status</th>
            </tr>
          </thead>
          <tbody>
            {advertisements.map((ad, index) => (
              <tr key={ad.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={ad.image}
                    alt="medicine"
                    className="w-16 h-16 rounded"
                  />
                </td>
                <td>{ad.name}</td>
                <td>{ad.description}</td>
                <td>
                  {ad.status ? (
                    <span className="badge badge-success gap-2">
                      <FaToggleOn /> Active
                    </span>
                  ) : (
                    <span className="badge badge-error gap-2">
                      <FaToggleOff /> Not Used
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0  bg-base-100/50 flex justify-center items-center z-50">
          <div className="bg-white outline outline-secondary p-6 rounded-lg w-full max-w-lg">
            <h3 className="text-xl font-bold mb-4">
              Submit Advertisement Request
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Medicine Name"
                className="input input-bordered w-full"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full"
                required
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Short Description"
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></textarea>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AskForAdvertise;
