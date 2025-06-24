import React from "react";
import ParentContainer from "../../../components/molecular-components/ParentContainer";
import { homeDescription, tagLine } from "../../../utils/text-constants";

const HomeOne = () => {
  return (
    <div className={`flex flex-row h-full w-[100%] `}>
      <ParentContainer
        height={"h-screen w-[50%]"}
        styles={""}
        child={
          <div
            className="relative w-full h-full bg-cover bg-center rounded-3xl"
            style={{
              backgroundImage: "url('/images/leaves_shadow.jpg')",
            }}
          >
            <div
              className={`absolute top-[30%] flex flex-col gap-5 items-start justify-start h-fit w-full px-14`}
            >
              {/* Tagline */}
              <p className={`text-6xl text-custom-black font-extrabold `}>
                {tagLine}
              </p>

              {/* Description */}
              <p className={`font-normal text-[1rem] `}>{homeDescription}</p>

              {/* Download Button */}
              <div
                className={`group h-12 w-[15.5rem] border-[0.06rem] border-custom-black rounded-3xl flex flex-row items-center justify-between px-4 cursor-pointer hover:bg-custom-black`}
                onClick={() => {
                  //TODO: redirect to download app
                  console.log("Download App Clicked");
                }}
              >
                <span
                  className={`uppercase font-normal group-hover:text-white`}
                >
                  {"download the app"}
                </span>

                <div className="rounded-full bg-custom-black group-hover:bg-white p-2">
                  <img
                    src="/vectors/diagonal_arrow.svg"
                    alt="arrow"
                    className="group-hover:invert"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
      <ParentContainer
        height={"h-screen w-[50%]"}
        styles={`bg-[#037C1EB2]`}
        child={
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-[20%] h-fit w-full flex justify-center">
              <img
                src="/images/leaf-bg.png"
                alt="leaf"
                className="z-[1] absolute top-[30%] max-h-[80%] max-w-[80%]"
              />
              <img
                src="/images/app_screenshot.png"
                alt="app"
                className="z-[2] relative max-h-[45%] max-w-[45%]"
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default HomeOne;
