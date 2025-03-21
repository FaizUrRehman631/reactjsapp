import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateUser } from "./app/userReducer";

const Update = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allUser = useSelector((state) => state.users) || []; 
  // console.log(allUser,"hello");
  const existingUser = allUser?.users?.find((user) => user.id === Number(id));

  const [uname, setName] = useState(existingUser?.name || "");
  const [uemail, setEmail] = useState(existingUser?.email || "");
  const [upassword, setPassword] = useState(existingUser?.password || "");
  const [urole, setRole] = useState(existingUser?.role || "");
  const [uage, setAge] = useState(existingUser?.age || "");
  const [ugender, setGender] = useState(existingUser?.gender || "");

  useEffect(() => {
    if (existingUser) {
      setName(existingUser.name || "");
      setEmail(existingUser.email || "");
      setPassword(existingUser.password || "");
      setRole(existingUser.role || "");
      setAge(existingUser.age || "");
      setGender(existingUser.gender || "");
    }
  }, [existingUser]);

  if (!existingUser) {
    return <h1 className="text-center text-red-500">User Not Found!</h1>;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateUser({
        id: Number(id),
        name: uname,
        email: uemail,
        password: upassword,
        role: urole,
        age: uage,
        gender: ugender,
      })).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  

  return (
    <div>
      <h1 className="font-bold text-3xl text-center my-5">Update User</h1>
      <form
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleUpdate}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={upassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="role">
            Role
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="role"
            placeholder="Enter your role"
            value={urole}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Choose</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="author">Author</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            id="age"
            placeholder="Enter your age"
            value={uage}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="gender"
            placeholder="Gender"
            value={ugender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Options</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
          </select>
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Update
        </button>
      </form>

      <footer>
      <Link
        to={"/"}
        className="ms-5 px-3 py-1 align-text-bottom bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Back
      </Link>
      </footer>
    </div>
  );
};

export default Update;
