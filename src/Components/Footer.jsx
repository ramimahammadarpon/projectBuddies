import React from "react";
import { Link } from "react-router";
import facebook from "../assets/facebook.png";
import gitHub from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import gmail from "../assets/gmail.png";

const Footer = () => {
  return (
    <div className="flex md:py-16 mt-10 py-10 bg-base-300 flex-col md:items-start md:px-10 lg:px-30">
      <div className="flex flex-col md:flex-row gap-3 md:justify-between w-full md:mt-4 md:text-left text-center">
        <div className="flex flex-col">
          <p className="font-light md:text-3xl text-2xl mb-3 text-white">
            Project<span className="font-bold text-secondary">Buddies</span>
          </p>
          <Link className="text-secondary" to="/">
            Apps
          </Link>
          <Link className="text-secondary" to="/profile">
            My Profile
          </Link>
          <Link className="text-secondary" to="/faqs">
            FAQs
          </Link>
        </div>
        <div className="text-secondary px-5 flex flex-col">
          <a href="#">Terms and Services</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Developer Resources</a>
          <a href="#">Terms and Services</a>
        </div>
        <div className="lg:flex justify-end items-end">
          <div className="">
            <h4 className="font-semibold text-lg text-secondary my-2">
              Contact Us In
            </h4>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=100009160702928"
                target="blank"
              >
                <img className="w-8" src={facebook} alt="" />
              </a>
              <a href="mailto:ramim6708@gmail.com" target="blank">
                <img className="w-8" src={gmail} alt="" />
              </a>
              <a href="https://github.com/ramimahammadarpon" target="blank">
                <img className="w-8" src={gitHub} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramim-ahammad-367431297/"
                target="blank"
              >
                <img className="w-8" src={linkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
