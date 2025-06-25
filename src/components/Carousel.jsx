import React, { useState } from "react";

const Carousel = ({ images = [] }) => {
  const [currentIndex, setIndex] = useState(0);

  return (
    <div
      className={`h-full w-full z-[5] relative flex flex-col justify-center items-center gap-5`}
    >
      <div className={`h-[80vh] border border-white w-full mt-4`}>
        {/* Images div */}
      </div>

      {/* Steps */}
      <div
        className={`flex flex-col w-[60%] gap-2 items-center justify-center text-center mt-4`}
      >
        <span
          className={`text-2xl bg-gradient-to-r from-custom-green to-custom-blue bg-clip-text text-transparent`}
        >
          {images[currentIndex].step}
        </span>
        <span className={`text-custom-white w-[50%] text-lg `}>
          {images[currentIndex].title}
        </span>
        <p className={`text-custom-white w-[60%] text-sm `}>
          {images[currentIndex].desc}
        </p>
      </div>

      {/* index indicator */}
      <div className={`flex items-center gap-3 my-4`}>
        {Array.from({ length: images.length }).map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "w-10 h-3 rounded-full bg-gradient-to-r from-custom-green to-custom-blue"
                : "w-3 h-3 rounded-full bg-white cursor-pointer"
            }`}
            onClick={() => setIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
