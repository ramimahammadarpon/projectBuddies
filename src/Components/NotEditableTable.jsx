import React, { useEffect, useState } from "react";
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";
import { Link } from "react-router";

const NotEditableTable = ({ index, task }) => {
    console.log(task);
  const [cardImg, setCardImg] = useState(webDesign);
  useEffect(() => {
    if (task.category === "Web Development") {
      setCardImg(webDevelopment);
    } else if (task.category === "Web Design") {
      setCardImg(webDesign);
    } else if (task.category === "Writing") {
      setCardImg(writing);
    } else if (task.category === "Marketing") {
      setCardImg(marketing);
    } else if (task.category === "Graphics Design") {
      setCardImg(graphicDesign);
    }
  }, [task.category]);
  return (
    <tr>
      <th>
       {index + 1}
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={cardImg}
                alt="Category Card"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{task.taskTitle}</div>
            <div className="text-sm opacity-50">{task.name}</div>
          </div>
        </div>
      </td>
      <td><Link to={`/taskDetails/${task._id}`}>Details</Link></td>
    </tr>
  );
};

export default NotEditableTable;
