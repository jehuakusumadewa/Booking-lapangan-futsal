import React from "react";

export const Items = (props) => {
  const { id, lapanganName, lokasi, lapanganImage } = props.data;
  return (
    <>
      <div className="card">
        <img
          className=" object-cover w-full h-[10rem]"
          src={lapanganImage}
          alt="lapangan"
        />
        <div className="p-5 flex-col gap-3">
          {/* badge */}
          <div className="badge flex items-center">
            <span>Venue</span>
          </div>
          <h2 className="lapangan-title">{lapanganName}</h2>
          <div>
            <span className="flex space-x-2 items-center">
              <img
                className=" w-[16px] h-[20px]"
                src="https://asset.ayo.co.id/assets/img/football.png"
                alt=""
              />
              <h4 className="opaxity-90 text-xs">Futsal</h4>
            </span>

            <span className="text-xl font-bold flex space-x-2">
              RP. 200.000
              <h4 className="opacity-50 "> / per sesi </h4>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
