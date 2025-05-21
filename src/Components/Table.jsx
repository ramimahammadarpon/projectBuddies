import React, { useEffect, useState } from 'react';
import webDesign from "../assets/webDesign.jpg";
import webDevelopment from "../assets/webDevelopment.jpg";
import writing from "../assets/writing.jpg";
import marketing from "../assets/marketing.jpg";
import graphicDesign from "../assets/graphicDesign.jpeg";

const Table = ({tasks, index}) => {
    const [cardImg, setCardImg] = useState("");
    useEffect(() => {
        if (tasks.category === "Web Development") {
          setCardImg(webDevelopment);
        } else if (tasks.category === "Web Design") {
          setCardImg(webDesign);
        } else if (tasks.category === "Writing") {
          setCardImg(writing);
        } else if (tasks.category === "Marketing") {
          setCardImg(marketing);
        } else if (tasks.category === "Graphics Design") {
          setCardImg(graphicDesign);
        }
      }, [tasks.category]);
    return (
        <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={cardImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{tasks.taskTitle}</div>
                    <div className="text-sm opacity-50">{tasks.category}</div>
                  </div>
                </div>
              </td>
              <td>{tasks.deadline}</td>
              <td>{tasks.budget} Taka</td>
              <th>
                <button className="btn btn-ghost btn-xs">Update</button>
                <button className="btn btn-ghost btn-xs">Delete</button>
                <button className="btn btn-ghost btn-xs">Bids</button>
              </th>
            </tr>
    );
};

export default Table;