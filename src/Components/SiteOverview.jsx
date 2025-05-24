import React from "react";
import CountUp from "react-countup";
import { GiRunningShoe } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";

const SiteOverview = () => {
  return (
    <div className="mt-5 md:mt-6 lg:mt-10 mx-3 md:mx-16 lg:mx-24">
      <h1 className="text-xl md:text-xl lg:text-3xl text-primary font-bold text-left md:text-center">
        WebSite Overview
      </h1>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-3 gap-7">
        <div className="p-5 md:p-5 lg:p-7 bg-base-200 rounded-2xl shadow-xl text-center overflow-hidden">
          <h1 className="hidden md:flex items-center md:my-3 lg:my-5 justify-center animate-bounce">
            <GiRunningShoe color="orange" size={170} />
          </h1>
          <h1 className="flex items-center md:hidden lg:hidden my-3 justify-center animate-bounce">
            <GiRunningShoe color="orange" size={100} />
          </h1>
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 text-primary">
            Total Visits (Per Day)
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-secondary">
            <CountUp end={300} duration={5} enableScrollSpy={true}></CountUp>
          </h1>
        </div>
        <div className="p-5 md:p-5 lg:p-7 bg-base-200 rounded-2xl shadow-xl text-center overflow-hidden">
          <h1 className="hidden md:flex items-center md:my-3 lg:my-5  justify-center animate-bounce">
            <AiOutlineFileDone color="orange" size={170} />
          </h1>
          <h1 className="flex items-center md:hidden lg:hidden my-3 justify-center animate-bounce">
            <AiOutlineFileDone color="orange" size={100} />
          </h1>
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 text-primary">
            Works Done (Per Day)
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-secondary">
            <CountUp end={400} duration={5} enableScrollSpy={true}></CountUp>
          </h1>
        </div>
        <div className="p-5 md:p-5 lg:p-7 bg-base-200 rounded-2xl shadow-xl text-center overflow-hidden">
          <h1 className="hidden md:flex items-center md:my-3 lg:my-5  justify-center animate-bounce">
            <FaUsers color="orange" size={170} />
          </h1>
          <h1 className="flex items-center md:hidden lg:hidden my-3 justify-center animate-bounce">
            <FaUsers color="orange" size={100} />
          </h1>
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-primary">
            Total Users
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-secondary">
            <CountUp end={5000} duration={5} enableScrollSpy={true}></CountUp>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SiteOverview;
