import React, { useState, useRef, useContext } from "react";

import profilePic from "../../../../assets/Stadium.jpg";

import SparringContent from "./sub-components/SparringContent";
import MabarContent from "./sub-components/MabarContent";

function SecondContent() {
  const [isDisplayed, setIsDisplayed] = useState(0);

  const showPage = () => {
    setIsDisplayed((prev) => (prev + 1) % 2);
  };

  const renderPage = () => {
    if (isDisplayed == 0) {
      return (
        <>
          <SparringContent></SparringContent>
          <button id="buttonPage" className="" autoFocus onClick={showPage}>
            Selanjutnya
          </button>
        </>
      );
    } else if (isDisplayed == 1) {
      return (
        <>
          <MabarContent></MabarContent>
          <br />
          <div
            id="buttonContainer"
            className="flex w-full h-max "
            onClick={showPage}
          >
            <button id="buttonPage" autoFocus>
              Sebelumnya
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div className="flex justify-center items-center" id="container">
        <div className="flex items-center" id="containerContent">
          <section id="imageContent">
            <img
              className="w-full h-full px-5 py-5"
              src={profilePic}
              alt="stadium"
            />
          </section>
          {/* flex flex-col */}
          <section className={`flex flex-col`} id="textContent">
            {/* First Page */}
            {renderPage()}
            {/* Second Page */}
          </section>
        </div>
      </div>
    </>
  );
}

export default SecondContent;
