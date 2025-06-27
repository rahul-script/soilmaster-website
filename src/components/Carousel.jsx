import React, { useState } from "react";

const Carousel = ({ images = [] }) => {
  const [currentIndex, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToIndex = (index) => {
    setIndex(index);
  };

  const currentImage = images[currentIndex];

  return (
    <div
      className={`h-full w-full z-[5] relative flex flex-col justify-center items-center gap-5`}
    >
      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto ">
        {/* Previous Button */}
        <button
          onClick={prev}
          className="absolute left-4 z-20 p-3 rounded-full bg-custom-black/40 hover:bg-custom-black transition-colors duration-200 text-white"
          aria-label="Previous image"
        >
          <img src="/vectors/ep_arrow_left.svg" className="w-6 h-6" />
        </button>

        {/* Images Container */}
        <div className="relative flex items-center justify-center space-x-8">
          {/* Previous Image */}
          {images.length > 1 && (
            <div className="hidden md:block transform scale-75 opacity-80 -rotate-12">
              <div className="h-96 bg-transparent rounded-3xl overflow-hidden">
                <img
                  src={
                    images[(currentIndex - 1 + images.length) % images.length]
                      .src
                  }
                  alt={
                    images[(currentIndex - 1 + images.length) % images.length]
                      .alt
                  }
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Current Image */}
          <div className="relative transform scale-100 z-10">
            <div className="h-[28rem] bg-transparent rounded-3xl overflow-hidden">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Next Image */}
          {images.length > 1 && (
            <div className="hidden md:block transform scale-75 opacity-80 rotate-12">
              <div className="h-96 bg-transparent rounded-3xl overflow-hidden">
                <img
                  src={images[(currentIndex + 1) % images.length].src}
                  alt={images[(currentIndex + 1) % images.length].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-4 z-20 p-3 rounded-full bg-black/20 hover:bg-black/40 transition-colors duration-200 text-white"
          aria-label="Next image"
        >
          <img src="/vectors/ep_arrow_right.svg" className="w-6 h-6" />
        </button>
      </div>

      {/* Steps */}
      <div
        className={`flex flex-col w-[60%] gap-2 items-center justify-center text-center `}
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
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
