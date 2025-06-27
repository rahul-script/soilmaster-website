import React from "react";

const ImagesCollage = ({ images = [] }) => {
  return (
    <div className={`w-full grid grid-rows-2 grid-flow-col `}>
      {images.map((element, index) => (
        <div
          key={index}
          className={`h-[27rem] w-[22rem] p-[2rem] flex ${
            index === 2 || index === 3 ? "items-start mt-4" : "items-center"
          }  `}
        >
          <img
            key={element.label}
            src={element.imagePath}
            alt={element.label}
            className={`h-[25rem] w-[20rem] object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 `}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesCollage;
