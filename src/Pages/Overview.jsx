import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import NotEditableTable from "../Components/notEditableTable";

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Overview = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [tasks, setTasks] = useState([]);
  const [bids, setBids] = useState([]);
  console.log(tasks);
  const myTasks = tasks.filter((task) => task.email === user.email);
  console.log(myTasks);
  const myBids = bids.filter((bid) => bid.email === user?.email);
  console.log(myBids);
  const bidsData = [
    { name: "Total Bids", value: bids.length },
    { name: "My Bids", value: myBids.length },
  ];
  const taskData = [
    { name: "Total Tasks", value: tasks.length },
    { name: "My Tasks", value: myTasks.length },
  ];
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/bids")
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-9 gap-5">
      <main className="lg:col-span-6">
        <h1 className="font-bold text-2xl mb-4">Welcome Back!</h1>

        <section className="grid lg:grid-cols-2 gap-3">
          <div className="bg-purple-500 p-4 rounded-xl text-white space-y-3">
            <p>Tasks Available</p>
            <p>
              <span className="font-bold text-2xl">{tasks.length}</span> Tasks
            </p>
            <p className="text-sm text-gray-300">
              Feel free to add to your tasks to our site{" "}
            </p>
          </div>
          <div className="bg-orange-500 p-4 rounded-xl text-white space-y-3 w-full">
            <p>Total Bids</p>
            <p>
              <span className="font-bold text-2xl">{bids.length}</span> Bids
            </p>
            <p className="text-sm text-gray-300">
              Bid on task that goes with your skills and interests
            </p>
          </div>
          <div className="bg-sky-500 p-4 rounded-xl text-white space-y-3">
            <p>Your Tasks</p>
            <p>
              <span className="font-bold text-2xl">{myTasks.length}</span> Bids
            </p>
            <p className="text-sm text-gray-300">
              You added {myTasks.length} tasks to our site
            </p>
          </div>
          <div className="bg-pink-500 p-4 rounded-xl text-white space-y-3">
            <p>Yours Bids</p>
            <p>
              <span className="font-bold text-2xl">{myBids.length}</span> Bids
            </p>
            <p className="text-sm text-gray-300">
              You bid on {myBids.length} Tasks so far
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h1 className="text-xl md:text-xl lg:text-2xl text-primary font-bold text-left mb-4">
            Stats
          </h1>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bidsData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar />} />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart height={300} data={taskData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#29d7ac" shape={<TriangleBar />} />
          </BarChart>
          </ResponsiveContainer>
        </section>

        <section className="mt-10">
            <h1 className="text-xl md:text-xl lg:text-2xl text-primary font-bold text-left mb-4">
            Posted Tasks
          </h1>
          <div className="overflow-x-auto">
            <table className="table table-auto w-full">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Task Title</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {myTasks.map((task, index) => (
                  <NotEditableTable
                    key={index}
                    index={index}
                    task={task}
                  ></NotEditableTable>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <aside className="hidden lg:block col-span-1 lg:col-span-3 p-4 sticky top-10 h-fit">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-6/12 rounded-full object-cover object-center border border-primary"
            src={user?.photoURL}
            alt=""
          />
          <h3 className="font-bold text-2xl text-primary mt-3">
            {user?.displayName}
          </h3>
          <p className="font-semibold text-gray-400">{user?.email}</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 text-gray-400">
          <p>My Tasks: {myTasks.length}</p>
          <p>My Bids: {myBids.length}</p>
        </div>
      </aside>
    </div>
  );
};

export default Overview;
