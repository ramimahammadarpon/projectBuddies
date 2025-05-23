import { useLoaderData } from "react-router";
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";
import { use, useContext, useEffect, useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { FaHourglassEnd } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AuthContext } from "../Auth/AuthContext";

const bidsDataPromise = fetch("http://localhost:3000/bids").then(res=>res.json());

const TaskDetails = () => {
  const [disabled, setDisabled] = useState(false)
  const task = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(task);
  console.log(user);
  const bidsData = use(bidsDataPromise);
  const [cardImg, setCardImg] = useState("");
  const [bid, setBid] = useState(0);
  const compareMail = user?.email === task.email;

  useEffect(() => {
    const bidsForThisTask = bidsData.filter(data=> data.taskId === task._id);
    setBid(bidsForThisTask.length);

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
  }, [task.category, task._id, bidsData]);

  console.log(bid);

  const handleBid = () => {
    const taskId = task._id;
    const taskEmail = task.email;
    const name = user.displayName;
    const email = user?.email;
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
    setDisabled(true);
    const bidsForThisTask = bidsData.filter(data=> data.taskId === task._id);
    setBid(bidsForThisTask.length +1);
    document.getElementById("bid").innerText = `You Bid For ${bid + 1} opportunities`;

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
          <h3 id="bid" className="font-semibold text-[#a0f2db] text-center text-2xl lg:mb-6">Current Bid: {bid}</h3>
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
            <button disabled={compareMail||disabled} onClick={handleBid} className={`mx-auto ${compareMail||disabled? "cursor-not-allowed opacity-50" : 'cursor-pointer hover:text-primary hover:bg-none'} text-lg py-1.5 w-40 flex justify-center rounded-sm font-medium lg:border lg:border-primary text-accent bg-gradient-to-r from-primary to-secondary  transition-all duration-300 ease-in overflow-hidden`} >Bid On This Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
