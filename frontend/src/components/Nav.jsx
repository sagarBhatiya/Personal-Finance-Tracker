import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import { signout } from "../utils/Icons";

function Nav() {
  return (
    <nav className="p-8 w-[374px] h-full bg-white/80 border-3 border-white backdrop-blur-md rounded-3xl flex flex-col justify-between gap-8">
      <div className="flex items-center gap-4 h-[100px]">
        <img
          src={avatar}
          alt="Avatar"
          className="w-20 h-20 rounded-full object-cover bg-white border-2 border-white p-1 shadow-md"
        />
        <div>
          <h2 className="text-primary">Sagar</h2>
          <p className="text-primary/60">Your Money</p>
        </div>
      </div>

      <div className="font-semibold flex flex-col gap-10 mt-8">
        <Link to="/">Dashboard</Link>
        
        <Link to="/Income">Income</Link>
        <Link to="/Expenses">Expenses</Link>
      </div>

      <div className="cursor-pointer flex items-center gap-2 text-primary/60 hover:text-primary transition-all duration-300">
        {signout} <span>Sign Out</span>
      </div>
    </nav>
  );
}

export default Nav;
