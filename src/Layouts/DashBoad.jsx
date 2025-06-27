import React from "react";
import { NavLink, Outlet } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { ImStatsBars } from "react-icons/im";
import { AuthContext } from "../Auth/AuthContext";

const DashBoad = () => {
  
  return (
    <div className="grid col-span-1 lg:grid-cols-12 gap-5 px-5 lg:px-20 py-10 min-h-screen">
      <aside className="col-span-1 lg:col-span-3 lg:sticky top-10 md:h-fit">
        <nav className="">
          <a className="btn btn-ghost text-xl md:text-2xl flex gap-0 mb-7 overflow-hidden">
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
          <div className="flex flex-col gap-3">
            <NavLink className="btn" to="/dashboard" end>
              {" "}
              <ImStatsBars size={18} />
              Overview
            </NavLink>
            <NavLink className="btn" to="/dashboard/allTasks">
              All Tasks
            </NavLink>
            <NavLink className="btn" to="/addTask">
              Add Task
            </NavLink>
            <NavLink className="btn" to="/myPostedTasks">
              My Tasks
            </NavLink>
            <NavLink className="btn" to="/">
              Home
            </NavLink>
          </div>
        </nav>
      </aside>
      <main className="col-span-1 lg:col-span-9">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default DashBoad;
