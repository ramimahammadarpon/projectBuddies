import { useLoaderData } from "react-router";
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";
import { useEffect, useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { FaHourglassEnd } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const TaskDetails = () => {
  const task = useLoaderData();
  console.log(task);
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
    <div
      className="hero min-h-[90vh]"
      style={{
        backgroundImage: `url(${cardImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content">
        <div className="lg:max-w-2xl">
          <h1 className="mb-10 text-2xl lg:text-5xl text-center font-bold text-secondary">
            {task.taskTitle}
          </h1>
          <div className="flex justify-center lg:gap-10">
            <div className="space-y-6">
              <p className="lg:text-xl font-semibold flex items-center lg:gap-5">
                {<FaMoneyCheckDollar size={20} />}Budget
              </p>
              <p className="lg:text-xl font-semibold flex items-center lg:gap-5">
                {<BiSolidCategory size={20} />}Category
              </p>
              <p className="lg:text-xl font-semibold flex items-center lg:gap-5">
                {<FaHourglassEnd size={20} />}Deadline
              </p>
              <p className="lg:text-xl font-semibold flex items-center gap-5">
                {<MdOutlineDriveFileRenameOutline size={20} />}Task Poster's Name
              </p>
              <p className="lg:text-xl font-semibold flex items-center gap-5">
                {<MdEmail size={20} />}Task Poster's Email
              </p>
            </div>
            <div className="space-y-6 hidden lg:block">
              <p className="lg:text-xl font-semibold">:</p>
              <p className="lg:text-xl font-semibold">:</p>
              <p className="lg:text-xl font-semibold">:</p>
              <p className="lg:text-xl font-semibold">:</p>
              <p className="lg:text-xl font-semibold">:</p>
            </div>
            <div className="space-y-6">
              <p className="lg:text-xl font-semibold text-primary flex items-center gap-5">{task.budget} Taka
              </p>
              <p className="lg:text-xl font-semibold text-primary flex items-center gap-5">
                {task.category}
              </p>
              <p className="lg:text-xl font-semibold text-primary flex items-center gap-5">
                {task.deadline}
              </p>
              <p className="lg:text-xl font-semibold text-primary flex items-center gap-5">
                {task.name}
              </p>
              <p className="lg:text-xl font-semibold text-primary flex items-center gap-5 mt-14 lg:mt-auto">
                {task.email}
              </p>
            </div>
          </div>
          <p className="mt-14 mb-10 text-lg lg:min-w-2xl text-center">
            {task.details}
          </p>
          <div className="text-center">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
