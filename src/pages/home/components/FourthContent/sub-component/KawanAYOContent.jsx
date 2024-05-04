import styles from "./IklanContent.module.css";
import { useState } from "react";

function KawanAYOContent() {
  const [showResults, setShowResults] = useState(1);

  const ToggleDipslay = (pageNumber) => {
    setShowResults(pageNumber);
  };
  return (
    <div className="flex 2xl justify-center w-screen ">
      <div className="flex sm:flex-col 2xl:flex-row justify-center bg-slate-600  w-[85%] ">
        {/* Image Content */}
        <section
          className={`${styles.backgroundComment} 2xl:w-1/2 sm:my-10 flex justify-center items-center text-4xl bg-red-200 rounded-[20px] text-white`}
        >
          <div className=" p-20 w-3/4 flex justify-center">
            <h2>Apa kata kawan AYO </h2>
          </div>
        </section>
        {showResults === 1 ? (
          <section className="flex flex-col justify-center items-center sm:w-full  2xl:w-1/2 ">
            <div className="bg-gray-200 rounded-[20px] px-20 py-4 w-3/4 flex flex-col items-center space-y-3 justify-center">
              <p className="font-bold flex w-full justify-start">Opi Hovidin</p>
              <p className="font-medium flex w-full justify-start">
                Backbone Indonesia
              </p>
              <p>
                “Ayo Indonesia membawa revolusi di kalangan klub-klub amatir.
                Aplikasi nya memudahkan pengelolaan tim, tidak sulit cari
                lapangan, cari tim main, apalagi cari pertandingan sparring,
                semuanya lengkap untuk kita para pemain dan klub amatir.”
              </p>
              <div className="flex justify-start w-full">
                <button
                  onClick={() => ToggleDipslay(2)}
                  className="mt-3 w-1/3 flex justify-start"
                >
                  <span className="link">Selanjutnya ➡️</span>
                </button>
              </div>
            </div>
          </section>
        ) : (
          <section className="flex flex-col justify-center items-center  sm:w-full  2xl:w-1/2 ">
            <div className="bg-gray-200 rounded-[20px] px-20 py-4 w-3/4 flex flex-col items-center space-y-3 justify-center">
              <p className="font-bold flex w-full justify-start">Dita Sujana</p>
              <p className="font-medium flex w-full justify-start">
                Host Mabar AYO
              </p>
              <p>
                “Fitur Aplikasi AYO yang paling menarik buat gue itu fitur Mabar
                karena fitur ini ngebantu gue sebagai admin komunitas fun
                football buat nyari tambahan teman main baru yang sehobi lewat
                aplikasi.”
              </p>
              <div className="flex justify-start w-full">
                <button
                  onClick={() => ToggleDipslay(1)}
                  className="mt-3 w-1/3 flex justify-start"
                >
                  <span className="link">⬅️ Sebelumnya</span>
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default KawanAYOContent;
