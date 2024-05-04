import React, { useState, useRef, useContext } from "react";

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
              src="https://images.unsplash.com/photo-1528287851237-12b0b5eafbff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheWluZyUyMHNvY2NlciUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D"
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
