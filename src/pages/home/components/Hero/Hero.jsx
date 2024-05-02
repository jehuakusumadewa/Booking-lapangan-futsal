function HeroComponent() {
  return (
    <>
      <div className="homePage relative">
        <img
          src="https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp"
          alt="wallpaperhomepage"
          className="w-full  object-cover imgWallpaper"
        />

        {/* Home Page Title and Description */}
        <div className="flex flex-col w-3/4 h-3/4 absolute justify-center items-start top-0 left-40  ">
          <h1 className=" flex justify-center text-8xl text-white font-bold">
            Super Sport Community App
          </h1>
          <p className="text-3xl text-white mt-8 leading-relaxed flex flex-wrap">
            Platform all-in-one untuk sewa lapangan, cari lawan sparring, atau
            cari kawan main bareng. Olahraga makin mudah dan menyenangkan!
          </p>
        </div>

        {/* Home Page Navbar List */}
        <form className="flex flex-row w-full h-max absolute items-center justify-center bottom-0">
          <div className="boxNav flex w-3/4 h-full justify-evenly ">
            <div className="flex flex-col">
              <p className="text-2xl flex justify-center text-white">
                Pilih Aktivitas
              </p>
              <select
                name="aktivitas"
                id="aktivitas"
                className="mt-4 p-2 text-2xl border-4 rounded-lg bg-gray-600 border-white text-white"
              >
                <option value="">Pilih Aktivitas</option>
                <option value="sewalapangan">Sewa Lapangan</option>
                <option value="sparring">Sparring</option>
                <option value="mainbareng">Main Bareng</option>
              </select>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-2xl text-white">Lokasi</p>
              <select
                name="kota"
                id="kota"
                className="mt-4 p-2 text-2xl border-4 rounded-lg bg-gray-600 border-white text-white"
              >
                <option value="">Pilih Kota</option>
                <option value="jakarta">Jakarta</option>
                <option value="bandung">Bandung</option>
                <option value="pontianak">Pontianak</option>
              </select>
            </div>

            <div className=" text-center">
              <p className="text-2xl text-white">Cabang Olahraga</p>
              <select
                name="aktivitas"
                id="aktivitas"
                className="mt-4 p-2 text-2xl border-4 rounded-lg bg-gray-600 border-white text-white"
              >
                <option value="">Pilih Olahraga</option>
                <option value="sepakBola">Sepak bola</option>
                <option value="basket">Basket</option>
                <option value="voli">Voli</option>
              </select>
            </div>

            <div className=" text-center">
              <p className="text-2xl text-white">Hasil Temuan</p>
              <button className="mt-4 w-full p-2 text-2xl border-4 rounded-lg bg-red-800 border-white text-white">
                Cari
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default HeroComponent;
