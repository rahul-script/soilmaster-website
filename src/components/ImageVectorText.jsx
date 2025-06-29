import React from "react";
import ParentContainer from "./molecular-components/ParentContainer";

const ImageVectorText = ({ imgPath, vectorPath, title, description }) => {
  return (
    <ParentContainer
      height={`h-full`}
      styles="flex justify-center"
      child={
        <div
          className={`group relative flex items-center bg-center bg-cover rounded-3xl`}
          style={{
            backgroundImage: `url(${imgPath})`,
          }}
        >
          {/* Dark layer */}
          <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 rounded-3xl"></div>

          {/* Content */}
          <div
            className={`flex flex-col gap-5 items-center justify-center text-center px-20 z-[2]`}
          >
            <div className={` p-4 rounded-full bg-white`}>
              <img
                src={vectorPath}
                alt="vector"
                loading="lazy"
                className="h-10 w-10"
              />
            </div>
            <span className="text-white text-lg font-semibold capitalize">
              {title}
            </span>
            <p className="text-white text-sm font-normal capitalize">
              {description}
            </p>
          </div>
        </div>
      }
    />
  );
};

export default ImageVectorText;
