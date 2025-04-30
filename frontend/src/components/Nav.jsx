import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { signout } from "../utils/Icons";
import axios from "axios";
import toast from "react-hot-toast";
import { useGlobalContext } from "../components/globalContext";

function Nav() {
  const navigate = useNavigate();
  const { user } = useGlobalContext();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/user/logout`);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="w-[80vw] sm:w-[350px] lg:w-[374px] h-full bg-white/80 border-3 border-white backdrop-blur-md rounded-3xl flex flex-col justify-between gap-8 p-6 md:p-8">
      <div className="flex items-center gap-4 h-[100px]">
        <img
          src={user?.profilePhoto || avatar}
          alt="Avatar"
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h2 className="font-semibold text-lg">{user?.fullname || "Guest"}</h2>
          <p className="text-primary/60">Your Money</p>
        </div>
      </div>

      <div className="font-semibold flex flex-col gap-6 mt-6">
        <Link
          to="/dashboard"
          className="hover:text-primary transition-all duration-300"
        >
          Dashboard
        </Link>
        <Link
          to="/Income"
          className="hover:text-primary transition-all duration-300"
        >
          Income
        </Link>
        <Link
          to="/Expenses"
          className="hover:text-primary transition-all duration-300"
        >
          Expenses
        </Link>
      </div>

      <div
        onClick={logoutHandler}
        className="cursor-pointer flex items-center gap-2 text-primary/60 hover:text-primary transition-all duration-300 mt-6"
      >
        {signout} <span>Logout</span>
      </div>
    </nav>
  );
}

export default Nav;
