import { useState } from "react";

import PesertaContent from "./sub-components/PesertaContent";
import KompetisiContent from "./sub-components/KompetisiContent";

function FourthPageComponent() {
  const [showResults, setShowResults] = useState(1);
  // pass the onclick argument first page
  const toggleDisplay = (onclick) => {
    setShowResults(onclick);
    console.log(onclick);
  };

  const renderPage = () => {
    if (showResults === 1) {
      return (
        <>
          {/* access onclick value in the PesertaContent */}
          <PesertaContent onclick={toggleDisplay}></PesertaContent>
        </>
      );
    } else if (showResults === 2) {
      return <KompetisiContent onclick={toggleDisplay}></KompetisiContent>;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-full">
        {renderPage()}
      </div>
      <div className="w-full flex justify-center h-64 my-20">
        <img
          src="https://cdn.asicentral.com/MKTGemails/346-13195/assets/img/hero.jpg"
          alt=""
        />
      </div>
    </>
  );
}

export default FourthPageComponent;
