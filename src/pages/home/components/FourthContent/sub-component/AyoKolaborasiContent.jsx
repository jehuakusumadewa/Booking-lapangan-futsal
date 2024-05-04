import profilePic from "../../../../../assets/Stadium.jpg";
// AYO KOLABORASI
function AyoKolaborasiContent() {
  return (
    <>
      <div className="flex justify-center items-center" id="container">
        <div className="flex items-center" id="containerContent">
          <section className="flex flex-col  " id="textContent">
            <div id="buttonContainer" className="flex ">
              <div
              // ref={inputRef1}
              >
                <p className="font-bold text-red-700 text-lg">AYO KOLABORASI</p>
                <h2 className="text-3xl  justify-start">
                  Kenapa AYO Indonesia
                </h2>
                <p id="textDesc">
                  Bersama AYO, brand Anda dapat terhubung dengan ribuan
                  komunitas sepak bola dan futsal amatir di Indonesia dalam satu
                  kolaborasi.
                </p>
                {/* CheckList Description */}
                <div className="mt-5 leading-loose">
                  <div className="mb-5">
                    <p className="font-bold text-lg">Introduce</p>
                    <p>
                      Meningkatkan brand awareness kepada komunitas AYO
                      Indonesia
                    </p>
                  </div>
                  <div className="mb-5">
                    <p className="font-bold text-lg">Interact</p>
                    <p className="mb-5">
                      Melibatkan komunitas amatir dalam kampanye brand di media
                      sosial dan event AYO Indonesia
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Amplify</p>
                    <p>
                      Memperluas jangkauan brand kepada komunitas AYO melalui
                      activation online dan offline yang terintegrasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-3">
              <span className="link">Lihat Selengkapnya ➡️</span>
            </button>
          </section>
          {/* Image Content */}
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

export default AyoKolaborasiContent;
