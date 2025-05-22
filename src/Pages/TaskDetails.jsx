import { useLoaderData } from "react-router";
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";
import { useContext, useEffect, useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { FaHourglassEnd } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AuthContext } from "../Auth/AuthContext";

const TaskDetails = () => {
  const task = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(task);
  console.log(user);
  const [cardImg, setCardImg] = useState("");
  // const [bid, setBid] = useState(0);
  const compareMail = user?.email === task.email;

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

  const handleBid = () => {
    const taskId = task._id;
    const taskEmail = task.email;
    const name = user.displayName;
    const email = user.email;
    const img = user.photoURL;
    const newBid = {
      taskId, 
      taskEmail, 
      name, 
      email,
      img
    }
    console.log(newBid);
    fetch("http://localhost:3000/bids", {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBid)
    }).then(res=>res.json()).then(data=>{
      console.log("Data After posting bid", data);
    })
  }

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
          <h3 className="font-semibold text-[#a0f2db] text-center text-2xl lg:mb-6">You Bid For </h3>
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
            <button disabled={compareMail} onClick={handleBid} className={`mx-auto ${!compareMail? 'cursor-pointer hover:text-primary hover:bg-none' : 'cursor-not-allowed'} text-lg py-1.5 w-40 flex justify-center rounded-sm font-medium lg:border lg:border-primary text-accent bg-gradient-to-r from-primary to-secondary  transition-all duration-300 ease-in overflow-hidden`} >Bid On This Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
