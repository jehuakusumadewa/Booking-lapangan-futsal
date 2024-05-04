import React from "react";
import { LAPANGAN } from "./Venueitem";
import { Items } from "./Items";
import Layout from "../../layouts/Layout";
const Venue = () => {
  return (
    <Layout>
      <div className="lapangan">
        <div className=" bg-gray-100 flex items-stretch justify-center space-x-4">
          {LAPANGAN.map((lapangan) => (
            <Items data={lapangan} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Venue;
