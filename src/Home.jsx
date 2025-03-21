import React, { useEffect, useState } from "react";
import { fetchUsers } from "./app/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "./app/userReducer";
import Swal from "sweetalert2";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.users);
  // console.log("All Users detail:",users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading)
    return (
      <p className="text-center text-2xl font-bold my-4">
        Loading users record...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-2xl font-bold my-4">Error: {error}</p>
    );
  // Delete user function
  const handleDelete = async (id,name) => {
    try {
      // if(!window.confirm(`Are you sure to delete this user!\n ${name} whose id is No.${id}`)) return;
      
      //
      const result = await Swal.fire({
        title: "Are you sure?",
        html: `Are you sure to delete this user?<br> <b>${name}</b> whose ID is No. <b>${id}</b>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });
      if (!result.isConfirmed) return;
      //

      await dispatch(deleteUser(id)).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mx-auto mt-5 ">
      <h2 className="font-bold text-3xl my-2 text-center">
        Practice App Using API
      </h2>
      
      <div className="flex flex-col items-center">
      <Link
    to={'images'}
    className="font-bold text-xl my-4 hover:text-blue-900 transition-transform duration-1000 hover:scale-110 hover:text-2xl "
  >
    Database Images
  </Link>
  <Link
    to={'products'}
    className="font-bold text-xl my-4 hover:text-blue-900 transition-transform duration-1000 hover:scale-110 hover:text-2xl "
  >
    Dummy JSON API Products
  </Link>
  <Link
    to={'posts'}
    className="font-bold text-xl my-4 hover:text-blue-900 transition-transform duration-1000 hover:scale-110 hover:text-2xl "
  >
    Dummy JSON API Posts
  </Link>
  <Link
    to={'carts'}
    className="font-bold text-xl my-4 hover:text-blue-900 transition-transform duration-1000 hover:scale-110 hover:text-2xl "
  >
    Dummy JSON API Carts
  </Link>
</div>

      <Link
        to={"/create"}
        className=" px-3 py-2  bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Create +
      </Link>
      <table className="table-auto w-full mt-5 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Created_at</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user?.id || `user-${index}`} className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{user?.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.role}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.age}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.gender}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user?.created_at}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Link
                    to={`/update/${user?.id}`} 
                    className=" px-4 py-2 mb-2 mx-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600"
                  >
                    Edit
                  </Link>
                  <button
                    className=" px-4 py-2 mx-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-800"
                    onClick={() => handleDelete(user.id,user.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 px-4 py-2 text-center"
              >
                No Users Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
