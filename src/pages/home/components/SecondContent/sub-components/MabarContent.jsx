function MabarContent() {
  return (
    <>
      <div
      // ref={inputRef2}
      >
        <p className="font-bold text-red-700 text-md">TEMUKAN KAWAN MABAR</p>
        <h2 className="text-3xl  justify-start">
          Cari lawan sparring hanya dalam ketukan jari.
        </h2>
        <p id="textDesc">
          Kini kamu ga perlu pusing-pusing cari lawan sparring. Dapatkan teman
          dan lawan baru dengan mudah tiap minggunya hanya di Aplikasi AYO!
        </p>

        {/* CheckList Description */}
        <div className="mt-5 leading-loose ">
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
