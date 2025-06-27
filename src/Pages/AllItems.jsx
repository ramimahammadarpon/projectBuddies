import React, { useEffect, useState } from 'react';
import NotEditableTable from '../Components/notEditableTable';

const AllItems = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  useEffect(() => {
    document.title = "ProjectBuddies | All Tasks"
    fetch('http://localhost:3000/tasks').then(res=> res.json()).then(data=> setTasks(data))
  }, []);
  
    return (
        <div className="overflow-x-auto mx-3 md:mx-16 lg:mx-24 mt-3 md:mt-6 lg:mt-10 min-h-[70vh]">
      <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Task Title</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <NotEditableTable
                    key={index}
                    index={index}
                    task={task}
                  ></NotEditableTable>
                ))}
              </tbody>
            </table>
    </div>
    );
};

export default AllItems;