import React from "react";
import ParentContainer from "../../../components/molecular-components/ParentContainer";
import { censorPoints, censorTitle } from "../../../utils/text-constants";
import UnorderedTextList from "../../../components/UnorderedTextList";

const HomeFive = () => {
  return (
    <ParentContainer
      height={"h-full"}
      width={"w-full"}
      child={
        <div
          className="h-full w-full bg-center bg-cover rounded-3xl p-5 "
          style={{
            backgroundImage: "url('/images/leaves_shadow.jpg')",
          }}
        >
          <div
            className={`flex flex-row h-full w-full items-end justify-between p-4`}
          >
            <div
              className={`h-fit w-[50%] flex flex-col items-start gap-5 px-10  `}
            >
              <span className="text-5xl font-bold bg-gradient-to-r from-custom-green to-custom-blue bg-clip-text text-transparent">
                {censorTitle}
              </span>
              <UnorderedTextList
                list={censorPoints}
                elementTextStyling={`text-xl font-semibold`}
              />
            </div>
            <img
              src="public/images/sensor.jpg"
              alt="Censor"
              loading="lazy"
              className={`h-full rounded-3xl`}
            />
          </div>
        </div>
      }
    />
  );
};

export default HomeFive;
