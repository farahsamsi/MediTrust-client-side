import {
  FaArrowDown,
  FaArrowUp,
  FaUser,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";

const ManageUsers = () => {
  const users = [
    {
      id: 1,
      name: "Amina Rahman",
      email: "amina@example.com",
      role: "user",
    },
    {
      id: 2,
      name: "Tanvir Hossain",
      email: "tanvir@sellmed.com",
      role: "seller",
    },
    {
      id: 3,
      name: "Admin Rafi",
      email: "rafi@admin.com",
      role: "admin",
    },
  ];

  const handleMakeSeller = (id) => {
    console.log("Make seller:", id);
  };

  const handleMakeAdmin = (id) => {
    console.log("Make admin:", id);
  };

  const handleDowngrade = (id) => {
    console.log("Downgrade user:", id);
  };

  return (
    <section className="w-full px-1">
      <DashboardBanner
        heading="User Role Management"
        subHeading="Easily promote users to sellers or admins, and manage roles to keep your platform secure and efficient."
      ></DashboardBanner>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td className="font-medium">{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize flex items-center gap-2">
                  {user.role === "admin" && (
                    <FaUserShield className="text-blue-600" />
                  )}
                  {user.role === "seller" && (
                    <FaUserTie className="text-green-600" />
                  )}
                  {user.role === "user" && <FaUser className="text-gray-500" />}
                  {user.role}
                </td>
                {/* <td></td> */}
                <td className="space-x-1">
                  {user.role === "user" && (
                    <>
                      <button
                        onClick={() => handleMakeSeller(user.id)}
                        className="btn btn-sm btn-outline btn-success"
                      >
                        <FaArrowUp className="mr-1" /> Seller
                      </button>
                      <button
                        onClick={() => handleMakeAdmin(user.id)}
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        <FaArrowUp className="mr-1" /> Admin
                      </button>
                    </>
                  )}
                  {(user.role === "seller" || user.role === "admin") && (
                    <button
                      onClick={() => handleDowngrade(user.id)}
                      className="btn btn-sm btn-outline btn-warning"
                    >
                      <FaArrowDown className="mr-1" /> Downgrade
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageUsers;
