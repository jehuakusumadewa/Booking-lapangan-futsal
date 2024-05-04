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
          <img
            className="mx-8"
            src="https://images.unsplash.com/photo-1529929344488-5e812ddb6e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvY2NlciUyMHRlYW1tYXRlfGVufDB8fDB8fHww"
            alt=""
          />
          <img
            className="mx-8"
            src="https://plus.unsplash.com/premium_photo-1685055940272-62cce291d7d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2NlciUyMHRlYW1tYXRlfGVufDB8fDB8fHww"
            alt=""
          />
          <img
            className="mx-8"
            src="https://images.unsplash.com/photo-1521579971123-1192931a1452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvY2NlciUyMHRlYW1tYXRlfGVufDB8fDB8fHww"
            alt=""
          />
        </div>

        <button className="mt-3 flex w-full justify-center">
          <span className="link">Lihat Selengkapnya ➡️</span>
        </button>
      </div>
    </>
  );
}

export default PesertaContent;
