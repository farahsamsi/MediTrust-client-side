import {
  FaArrowDown,
  FaArrowUp,
  FaUser,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";
import DashboardBanner from "../../Shared/DashboardBanner";
import useAllUsers from "../../../Hooks/useAllUsers";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [allUsers, refetchUsers] = useAllUsers();
  const axiosSecure = useAxiosSecure();

  const handleMakeSeller = async (email) => {
    const role = "seller";
    const updateRole = { role };

    const res = await axiosSecure.patch(`/user/${email}`, updateRole);
    if (res.data.modifiedCount > 0) {
      refetchUsers();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Role has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleMakeAdmin = async (email) => {
    const role = "admin";
    const updateRole = { role };

    const res = await axiosSecure.patch(`/user/${email}`, updateRole);
    if (res.data.modifiedCount > 0) {
      refetchUsers();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Role has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDowngrade = async (email) => {
    const role = "user";
    const updateRole = { role };

    const res = await axiosSecure.patch(`/user/${email}`, updateRole);
    if (res.data.modifiedCount > 0) {
      refetchUsers();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Role has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
            {allUsers?.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td className="font-medium">{user?.name}</td>
                <td>{user?.email}</td>
                <td className="capitalize flex items-center gap-2">
                  {user?.role === "admin" && (
                    <FaUserShield className="text-blue-600" />
                  )}
                  {user?.role === "seller" && (
                    <FaUserTie className="text-green-600" />
                  )}
                  {user?.role === "user" && (
                    <FaUser className="text-gray-500" />
                  )}
                  {user?.role}
                </td>

                <td className="space-x-1">
                  {user.role === "user" && (
                    <>
                      <button
                        onClick={() => handleMakeSeller(user?.email)}
                        className="btn btn-sm btn-outline btn-success"
                      >
                        <FaArrowUp className="mr-1" /> Seller
                      </button>
                      <button
                        onClick={() => handleMakeAdmin(user?.email)}
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        <FaArrowUp className="mr-1" /> Admin
                      </button>
                    </>
                  )}
                  {(user?.role === "seller" || user?.role === "admin") && (
                    <button
                      onClick={() => handleDowngrade(user?.email)}
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
