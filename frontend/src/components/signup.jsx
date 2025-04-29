import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

   
    if (!user.fullName || !user.username || !user.password || !user.confirmPassword || !user.gender) {
      toast.error("Please fill in all fields");
      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/signup`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/dashboard"); 
      }
    } catch (error) {
      // Display the error from backend API
      console.log(error.response?.data);
      toast.error(error.response?.data?.message || "Signup failed. Please try again.");
    }

    // Reset the form after submission
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
        <form onSubmit={onSubmitHandler} className="flex flex-col">
          <input
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            placeholder="Full Name"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />

          <input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />

          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
          />

          <input
            value={user.confirmPassword}
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
            placeholder="Confirm Password"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
          />

          <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            value={user.gender}
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <p className="text-white mt-4">
            Already have an account? 
            <Link className="text-sm text-blue-500 hover:underline mt-4" to="/login">
              Login
            </Link>
          </p>
          
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
