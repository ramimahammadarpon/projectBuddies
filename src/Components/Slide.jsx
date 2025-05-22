import React, { useEffect, useState } from "react";
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";
import { Link } from "react-router";

const Slide = ({ category }) => {
  console.log(category);

  const [cardImg, setCardImg] = useState(webDesign);

  useEffect(() => {
    if (category.name === "Web Development") {
      setCardImg(webDevelopment);
    } else if (category.name === "Web Design") {
      setCardImg(webDesign);
    } else if (category.name === "Writing") {
      setCardImg(writing);
    } else if (category.name === "Marketing") {
      setCardImg(marketing);
    } else if (category.name === "Graphics Design") {
      setCardImg(graphicDesign);
    }
  }, [category.name]);

  return (
    <div
      className="hero min-h-[50vh] lg:min-h-[80vh]"
      style={{
        backgroundImage:
          `url(${cardImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{category.name}</h1>
          <p className="mb-5">{category.description}</p>
          <Link to="/addTask" className="btn btn-primary">
            Post Your Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
