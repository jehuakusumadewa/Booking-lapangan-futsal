import styles from "./IklanContent.module.css";

function IklanContent() {
  return (
    <>
      <section className={` flex justify-center items-center  w-[100%] mt-40 `}>
        <div
          className={` ${styles.backgroundAds} w-[85%] flex justify center  py-32 px-[30px] `}
        >
          <div className="flex w-full justify-center items-center text-center">
            <h1 className="sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl w-1/2 text-white font-bold">
              AYO, Temukan Kawan Mainmu Sekarang!
            </h1>
            <p className="sm:text-lg lg:text-2xl xl:text-3xl text-white mt-8 w-1/2 leading-relaxed flex flex-wrap just">
              Puluhan ribu teman baru sudah menantimu di lapangan, yuk download
              Aplikasi AYO sekarang juga!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default IklanContent;
