function MabarContent() {
  return (
    <>
      <div
      // ref={inputRef2}
      >
        <p className="font-bold text-red-700 text-md">TEMUKAN KAWAN MABAR</p>
        <h2 className="sm:text-lg md:text-xl lg:text-3xl font-medium justify-start">
          Cari lawan sparring hanya dalam ketukan jari.
        </h2>
        <p id="textDesc" className="lg:text-2xl pt-5">
          Kini kamu ga perlu pusing-pusing cari lawan sparring. Dapatkan teman
          dan lawan baru dengan mudah tiap minggunya hanya di Aplikasi AYO!
        </p>

        {/* CheckList Description */}
        <div className="mt-5 leading-loose lg:text-2xl pt-5">
          <p>
            <span>✅</span> Lebih dari 100.000 pemain terdaftar sebagai kawan
            main.
          </p>
          <p>
            <span>✅</span> Mencakup pemain dari seluruh wilayah di Indonesia
          </p>
        </div>
      </div>
    </>
  );
}

export default MabarContent;
