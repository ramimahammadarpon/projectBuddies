import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import BidsTable from "../Components/BidsTable";

const Bids = () => {
  const { user } = useContext(AuthContext);
  const bids = useLoaderData();
  const { id } = useParams();
  const [myBidsData, setMyBidsData] = useState([]);
  console.log(bids);
  useEffect(() => {
    const filteredBids = bids.filter((bid) => bid.taskEmail === user.email);
    const filterBidsWithName = filteredBids.filter((bid) => bid.taskId === id);
    setMyBidsData(filterBidsWithName);
  }, [user.email, bids, id]);

  console.log(myBidsData);
  return (
    <div className="overflow-x-auto mx-3 md:mx-16 lg:mx-24 mt-3 md:mt-6 lg:mt-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Bidder's Name</th>
            <th>Bidder's Email</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myBidsData.map((bidsData, index) => (
            <BidsTable
              key={index}
              bidsData={bidsData}
              index={index}
            ></BidsTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bids;
