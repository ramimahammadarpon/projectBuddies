import React, { useContext, useState } from "react";
import userPhoto from "../assets/userPhoto.jpeg";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import { toast } from "react-toastify";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  const [clicked, setClicked] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "light" : "dark"
    );
  };

  const handleLogout = () => {
    logout().then(() => {
      console.log("logout sucessfull");
      toast.success("Successfully Logged Out", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

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
        <NavLink className="justify-end" to="/browseTasks">
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink className="justify-end" to="/myPostedTasks">
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
          <span className="text-primary">
            <Typewriter
              words={["Buddies"]}
              loop={true}
              delaySpeed={1000}
              typeSpeed={30}
              deleteSpeed={30}
            />
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg gap-3">{links}</ul>
      </div>
      <div className="flex items-center">
        <div className="relative group">
          {user ? (
            <img
              src={user.photoURL}
              onClick={() => setClicked(!clicked)}
              className="w-8 object-cover md:w-10 aspect-square ml-24 md:ml-52 lg:mr-5 lg:ml-10 rounded-full border border-secondary cursor-pointer"
              alt=""
            />
          ) : (
            <img
              src={userPhoto}
              onClick={() => setClicked(!clicked)}
              className="w-8 md:w-10 object-cover aspect-square ml-24 md:ml-52 lg:mr-5 lg:ml-10 rounded-full border border-secondary cursor-pointer"
              alt=""
            />
          )}
          <ul
            className={`absolute top-14 lg:top-16 text-accent bg-base-200 w-40 lg:group-hover:opacity-100 lg:invisible lg:group-hover:visible right-0 p-2 rounded-lg transition-all duration-75 flex flex-col ${
              clicked
                ? "visible opacity-100 lg:invisible"
                : "group-hover:opacity-100 invisible group-hover:visible"
            }`}
          >
            {user ? (
              <>
                <p className="text-right text-primary p-1 rounded-sm text-xs">
                  {user.displayName}
                </p>
                <button
                  onClick={handleLogout}
                  className="text-right lg: p-1 rounded-sm text-xs cursor-pointer"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-right p-1 lg:hidden  rounded-sm text-xs"
                >
                  Log In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="text-right p-1 lg:hidden rounded-sm text-xs"
                >
                  Sign Up
                </NavLink>
              </>
            )}
            <button
              onClick={handleTheme}
              className="text-right p-1 rounded-sm text-xs hover:cursor-pointer"
            >
              Theme: {theme ? "Dark" : "Light"}
            </button>
          </ul>
        </div>
        {user ? (
          ""
        ) : (
          <>
            <Link
              className="hidden text-lg py-1.5 w-28 lg:flex justify-center rounded-sm font-medium lg:mr-3 lg:border lg:border-primary lg:text-primary bg-transparent bg-none hover:text-accent hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-in overflow-hidden"
              to="/login"
            >
              Log In
            </Link>
            <Link
              className="hidden text-lg py-1.5 w-32 lg:flex justify-center rounded-sm font-medium lg:border lg:border-primary text-accent bg-gradient-to-r from-primary to-secondary hover:text-primary hover:bg-none transition-all duration-300 ease-in overflow-hidden"
              to="/signup"
            >
              Sign Up
            </Link>
          </>
        )}
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box 1 mt-3 right-0 w-36 p-2 shadow"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
