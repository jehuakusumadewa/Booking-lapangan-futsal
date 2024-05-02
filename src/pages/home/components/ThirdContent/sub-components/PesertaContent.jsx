import profilePic from "../../../../../assets/Stadium.jpg";
// add onclick paramters
function PesertaContent({ onclick }) {
  return (
    <>
      <div>
        <h2 className="text-3xl flex justify-center">
          Cari Kompetisi Terbaik Untuk Tim Anda
        </h2>
        <p id="textDesc">
          Ikuti berbagai pilihan kompetisi dari AYO Indonesia dan operator
          kompetisi lainnya. Rasakan keseruan silaturahmi di lapangan bersama
          ribuan tim amatir lainnya sekarang juga!
        </p>
        {/* Button Peserta and Operator Kompetisi */}
        <div id="buttonContainer" className="flex justify-center">
          <button
            id="buttonPage"
            // change the onclick value
            onClick={() => onclick(1)}
            style={{ width: "10%" }}
            autoFocus
          >
            Peserta
          </button>
          <button
            id="buttonPage"
            onClick={() => onclick(2)}
            style={{ width: "10%" }}
          >
            Operator Kompetisi
          </button>
        </div>

        {/* Gambar */}
        <div
          className="sm:block  lg:flex lg:w-full justify-center my-10 h-3/4 "
          id="imageList"
        >
          <img className="mx-8" src={profilePic} alt="" />
          <img className="mx-8" src={profilePic} alt="" />
          <img className="mx-8" src={profilePic} alt="" />
        </div>

        <button className="mt-3 flex w-full justify-center">
          <span className="link">Lihat Selengkapnya ➡️</span>
        </button>
      </div>
    </>
  );
}

export default PesertaContent;
