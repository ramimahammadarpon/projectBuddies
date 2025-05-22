import React, { useEffect, useState } from 'react';
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";
import { Link } from 'react-router';

const Table = ({myTasks, setMyTasks, myTask, index}) => {
    const [cardImg, setCardImg] = useState(webDesign);
    useEffect(() => {
        if (myTask.category === "Web Development") {
          setCardImg(webDevelopment);
        } else if (myTask.category === "Web Design") {
          setCardImg(webDesign);
        } else if (myTask.category === "Writing") {
          setCardImg(writing);
        } else if (myTask.category === "Marketing") {
          setCardImg(marketing);
        } else if (myTask.category === "Graphics Design") {
          setCardImg(graphicDesign);
        }
      }, [myTask.category]);

      const handleDeleteTask = () => {
        fetch(`http://localhost:3000/tasks/${myTask._id}`,{
            method: 'DELETE', 
        }).then(res=>res.json()).then(data=>{
            console.log("Deleted Successfully",data);
            const newTasksList = myTasks.filter(t=> t._id !== myTask._id);
            setMyTasks(newTasksList);
        })
      }

    return (
        <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={cardImg}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{myTask.taskTitle}</div>
                    <div className="text-sm opacity-50">{myTask.category}</div>
                  </div>
                </div>
              </td>
              <td>{myTask.deadline}</td>
              <td>{myTask.budget} Taka</td>
              <th>
                <Link to={`/myPostedTasks/update/${myTask._id}`} className="btn btn-ghost btn-xs">Update</Link>
                <button onClick={handleDeleteTask} className="btn btn-ghost btn-xs">Delete</button>
                <button className="btn btn-ghost btn-xs">Bids</button>
              </th>
            </tr>
    );
};

export default Table;