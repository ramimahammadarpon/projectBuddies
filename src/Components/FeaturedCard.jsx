import React, { useEffect, useState } from "react";
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";
import { FaHourglassEnd } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";

const FeaturedCard = ({ task }) => {
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
    <div className="rounded-lg overflow-hidden shadow-lg bg-base-100">
      <div className="relative">
        <img src={cardImg} className="w-full h-60 md:h-64 lg:h-72 object-cover" alt="" />
        <div className="flex justify-between px-6 w-full bottom-3 absolute">
          <span className="bg-secondary px-3 py-1 rounded-sm font-semibold flex items-center gap-2">
            <FaMoneyCheckAlt size={20} />${task.budget}
          </span>
          <span className="bg-secondary px-3 py-1 rounded-sm font-semibold flex items-center gap-2">
            <FaHourglassEnd size={20} />
            {task.deadline}
          </span>
        </div>
      </div>
      <div className="py-3 px-4">
        <h4 className="font-semibold md:text-2xl">{task.taskTitle}</h4>
        <p className="pl-1 text-sm">{task.category}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
