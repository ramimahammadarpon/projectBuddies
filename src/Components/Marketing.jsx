import React, { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const Marketing = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  useEffect(() => {
    fetch("http://localhost:3000/marketing")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="mt-6 lg:mt-12">
      <h1 className="text-xl md:text-xl lg:text-3xl text-primary font-bold text-left md:text-center">
        Marketing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 lg:mt-6 gap-4">
        {tasks.map((task) => (
          <FeaturedCard key={task._id} task={task}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default Marketing;
