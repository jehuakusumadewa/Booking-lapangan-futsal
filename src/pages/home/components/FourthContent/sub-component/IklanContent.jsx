import styles from "./IklanContent.module.css";

function IklanContent() {
  return (
    <>
      <section className={` flex justify-center items-center  w-[100%] mt-40 `}>
        <div
          className={` ${styles.backgroundAds} w-[85%] flex justify center  py-32 px-[30px] `}
        >
          <div className="flex w-full justify-center text-center">
            <h1 className="text-7xl text-white font-bold">
              AYO, Temukan Kawan Mainmu Sekarang!
            </h1>
            <p className="text-3xl text-white mt-8 leading-relaxed flex flex-wrap">
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
