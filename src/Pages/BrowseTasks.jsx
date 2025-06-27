import React, { useEffect, useState } from "react";
import TaskCard from "../Components/TaskCard";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [sort, setSort] = useState("cheap");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    document.title = "ProjectBuddies | Browse Tasks";
    fetch(`http://localhost:3000/tasks?sort=${sort}&filter=${filter}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [sort, filter]);
  console.log(tasks);

  return (
    <div className="mx-3 md:mx-16 lg:mx-24 mt-3 md:mt-6 lg:mt-9">
      <h1 className="font-bold text-2xl md:text-3xl text-primary text-center">
        Avaiable Tasks
      </h1>

      <div className="flex justify-between">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="select select-ghost"
        >
          <option value="cheap">Cheap to Expensive</option>
          <option value="expensive">Expensive to Cheap</option>
        </select>

        <select
          onChange={(e) => setFilter(e.target.value)}
          defaultValue="Pick a font"
          className="select select-ghost"
        >
          <option value="">All Categories</option>
          <option value="Web Design">Web Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Marketing">Marketing</option>
          <option value="Writing">Writing</option>
          <option value="Graphics Design">Graphics Design</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
