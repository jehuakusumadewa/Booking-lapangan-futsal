import React, { useState, useRef, useContext } from "react";

import profilePic from "../../../../assets/Stadium.jpg";

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
            <div id="buttonContainer" className="flex ">
              <button
                id="buttonPage"
                autoFocus
                onClick={() => ToggleDipslay(1)}
              >
                Pemilik Lapangan
              </button>
              <button id="buttonPage" onClick={() => ToggleDipslay(2)}>
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

            <button className="mt-3">
              <span className="link">Lihat Selengkapnya ➡️</span>
            </button>
          </section>
          <section id="imageContent">
            <img
              className="w-full h-full px-5 py-5"
              src={profilePic}
              alt="stadium"
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default FirstContent;
