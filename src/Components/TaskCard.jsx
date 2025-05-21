import React, { useEffect, useState } from "react";
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { FaHourglassEnd } from "react-icons/fa6";
import { Link } from "react-router";


const TaskCard = ({ task }) => {
  const [cardImg, setCardImg] = useState("");

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
    <div className="card bg-base-100 image-full shadow-sm">
      <figure>
        <img src={cardImg} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="lg:text-2xl lg:font-bold text-secondary">{task.taskTitle}</h2>
        <div className="space-y-2 mt-4">
            <p className="flex flex-row lg:text-lg items-center gap-4 text-lg"><FaMoneyCheckDollar size={20} /> {task.budget}</p>
            <p className="flex flex-row lg:text-lg items-center gap-4 text-lg"><BiSolidCategory size={20} /> {task.category}</p>
            <p className="flex flex-row lg:text-lg items-center gap-4 text-lg"><FaHourglassEnd size={20} /> {task.deadline}</p>
        </div>
        <div className="card-actions">
          <Link to={`/taskDetails/${task._id}`} className="cursor-pointer mt-2 text-lg text-primary">View Details...</Link>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
