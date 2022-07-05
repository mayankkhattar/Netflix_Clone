import React from "react";
import logo from "../assets/Netflix-logo.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-8 z-[100] absolute w-full">
      <img className="w-[8rem] cursor-pointer" src={logo} alt="" />
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 px-5 py-1 rounded cursor-pointer text-white ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
