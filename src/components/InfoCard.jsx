import React from "react";

const InfoCard = ({ vectorpath, title, desc }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center bg-transparent h-fit `}
    >
      <img
        src={vectorpath}
        alt="vector"
        className={`rounded-full bg-white p-3 h-14 w-14`}
      />
      <span className={`text-white font-semibold text-xl mx-1 mt-5`}>
        {title}
      </span>
      <p className={`text-white font-normal text-sm mt-2`}>{desc}</p>
    </div>
  );
};

export default InfoCard;
