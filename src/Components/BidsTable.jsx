import React from "react";

const BidsTable = ({index, bidsData}) => {
  return (
    <tr>
      <th>{index+1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={bidsData.img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{bidsData.name}</div>
          </div>
        </div>
      </td>
      <td>{bidsData.email}</td>
    </tr>
  );
};

export default BidsTable;
