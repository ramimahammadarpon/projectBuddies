import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Table from "../Components/Table";

const MyPostedTask = () => {
  const tasks = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  useEffect(() => {
    document.title = "ProjectBuddies | Posted Tasks"
    const newTask = tasks.filter((task) => task.email === user.email);
    setMyTasks(newTask);
  }, [tasks, user.email]);
  console.log(myTasks);

  return (
    <div className="overflow-x-auto mx-3 md:mx-16 lg:mx-24 mt-3 md:mt-6 lg:mt-10 min-h-[70vh]">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Task Title</th>
            <th>Deadline</th>
            <th>Budget</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myTasks.map((myTask, index) => <Table key={index} myTasks={myTasks} setMyTasks={setMyTasks} myTask={myTask} index={index}></Table>)}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedTask;
