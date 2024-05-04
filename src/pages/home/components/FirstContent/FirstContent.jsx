import React, { useState, useRef, useContext } from "react";

import PemilikLapanganContent from "./sub-components/PemilikLapanganContent";
import PenyewaContent from "./sub-components/PenyewaContent";

function FirstContent() {
  const [showResults, setShowResults] = useState(1);

  const ToggleDipslay = (pageNumber) => {
    setShowResults(pageNumber);
  };

  return (
    <>
      <div className="flex justify-center items-center" id="container">
        <div className="flex items-center" id="containerContent">
          <section className="flex flex-col  " id="textContent">
            <div id="buttonContainer" className="flex  sm:text-xs lg:text-xl">
              <button
                id="buttonPage"
                autoFocus
                onClick={() => ToggleDipslay(1)}
                className="w-full"
              >
                Pemilik Lapangan
              </button>
              <button
                id="buttonPage"
                onClick={() => ToggleDipslay(2)}
                className="w-full"
              >
                Penyewa
              </button>
            </div>
            {showResults === 1 ? (
              <>
                <PemilikLapanganContent></PemilikLapanganContent>
              </>
            ) : (
              <PenyewaContent></PenyewaContent>
            )}

            <button className="mt-3 sm:text-sm md:text-base">
              <span className="link">Lihat Selengkapnya ➡️</span>
            </button>
          </section>
          <section id="imageContent">
            <img
              className="w-full h-full px-5 py-5"
              src="https://plus.unsplash.com/premium_photo-1664304724418-348799c3d5c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxheWluZyUyMHNvY2NlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="stadium"
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default FirstContent;
