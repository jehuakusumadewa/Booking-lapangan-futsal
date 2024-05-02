function KompetisiContent({ onclick }) {
  return (
    <>
      <div>
        <h2 className="text-3xl flex justify-center">
          Kelola kompetisi tanpa ribet dan hemat budget sekarang juga!
        </h2>
        <p id="textDesc">
          Tanpa perlu tambahan budget untuk SDM dan platform digital, nikmati
          semua kemudahannya lewat tournament management software AYO Indonesia.
          Gratis!
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
        <div className={`w-screen h-1/2  flex justify-center items-center  `}>
          {/* use padding to adjust the height */}
          <div className="w-3/4 my-5 gap-20 flex  px-5 py-10">
            <div className="px-5 py-5  text-black">
              <p className="font-bold mb-5" id="textDesc">
                Mudah di operasikan
              </p>
              <p id="textDesc">
                Tinggal masukkan data, kompetisi bisa berjalan. Tim AYO juga
                siap membantu kesulitan Anda saat kompetisi berjalan.
              </p>
            </div>

            <div className="px-5 py-5  text-black">
              <p className="font-bold mb-5" id="textDesc">
                All in one platform
              </p>
              <p id="textDesc">
                Nikmati berbagai fitur untuk kompetisi Anda mulai dari klasemen,
                statistik detail, hingga atur jadwal dalam satu klik saja.
              </p>
            </div>

            <div className="px-5 py-5  text-black">
              <p className="font-bold mb-5" id="textDesc">
                Integrasi dengan AYO
              </p>
              <p id="textDesc">
                Berikan benefit tambahan untuk peserta kompetisi Anda karena
                semua statistik tim dan pemain tercatat di sistem AYO Indonesia.
              </p>
            </div>
          </div>
        </div>

        <button className="mt-3 flex w-full justify-center">
          <span className="link">Lihat Selengkapnya ➡️</span>
        </button>
      </div>
    </>
  );
}

export default KompetisiContent;
