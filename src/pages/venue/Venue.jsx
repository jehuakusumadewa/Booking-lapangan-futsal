import React, { useState } from "react";
import { LAPANGAN } from "./Venueitem";
import { Items } from "./Items";
import Layout from "../../layouts/Layout";
const Venue = () => {
  const [filter, setFilter] = useState("");

  const serachText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = LAPANGAN.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <Layout>
      <div className="justify-center flex mb-5 space-x-2">
        <h2 className="text-xl">Search</h2>
        <input type="text" value={filter} onChange={serachText.bind(this)} />
      </div>

      <div className="lapangan flex justify-center space-y-5">
        <div className=" bg-gray-100 grid grid-rows-4 grid-cols-3 gap-4">
          {dataSearch.map((lapangan) => (
            <Items data={lapangan} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Venue;

