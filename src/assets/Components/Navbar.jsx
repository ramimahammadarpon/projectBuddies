import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="justify-end" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="justify-end" to="/addTask">
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink className="justify-end" to="/">
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink className="justify-end" to="/">
          My Posted Tasks
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar md:px-12 lg:px-20 bg-base-100 shadow-sm md:flex-row justify-between">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl md:text-2xl flex gap-0">
          <span className="text-accent font-light">Project</span>
          <span className="text-primary">Buddies</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
      </div>
      <div className="flex items-center">
        <img src="dfasf" className="w-8 md:w-10 aspect-square ml-24 md:ml-52 lg:mr-5 lg:ml-10 rounded-full border border-secondary" alt="" />
          <NavLink
            className="hidden text-lg lg:btn lg:flex justify-end lg:mr-3 lg:border lg:border-primary lg:text-primary bg-transparent bg-none hover:text-accent hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-in"
            to="/login"
          >
            Log In
          </NavLink>
          <NavLink
            className="hidden text-lg lg:flex justify-end hover:bg-transparent lg:border text-primary lg:border-primary lg:btn lg:bg-gradient-to-r from-primary to-secondary hover:bg-none hover:text-primary transition-all duration-300 ease-in-out"
            to="/signup"
          >
            Sign Up
          </NavLink>
      </div>
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 right-0 w-32 p-2 shadow"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
