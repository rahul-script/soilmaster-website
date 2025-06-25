import React from "react";
import ParentContainer from "../../../components/molecular-components/ParentContainer";
import {
  consult,
  consultDes,
  dataDriven,
  dataDrivenDes,
  realtime,
  realtimeDes,
  smartFarmingDesc,
  smartFarmingTitle,
  smartFarmingTitleGradient,
  wireless,
  wirelessDes,
} from "../../../utils/text-constants";
import InfoCard from "../../../components/InfoCard";

const HomeThree = () => {
  return (
    <ParentContainer
      height={"h=full"}
      width={"w-full"}
      child={
        <div
          className={`relative h-full, w-full rounded-3xl bg-center bg-cover`}
          style={{ backgroundImage: "url('/images/smart_farming.jpg')" }}
        >
          {/* Dark layer */}
          <div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>

          {/* Content */}
          <div
            className={`z-[2] absolute inset-0 flex items-center justify-center px-24 `}
          >
            <div
              className={`flex flex-col items-center justify-center text-center h-fit w-full `}
            >
              <div
                className={`flex flex-col gap-6 items-center justify-center`}
              >
                <span className={` text-white text-6xl font-bold mx-32`}>
                  {smartFarmingTitle}
                  <span
                    className={`bg-gradient-to-r from-custom-green to-custom-blue bg-clip-text text-transparent`}
                  >
                    {smartFarmingTitleGradient}
                  </span>
                </span>
                <p className={`text-white text-sm font-normal `}>
                  {smartFarmingDesc}
                </p>
              </div>

              <div className={`flex flex-row gap-12 mt-10`}>
                <InfoCard
                  vectorpath={"/vectors/time.svg"}
                  title={realtime}
                  desc={realtimeDes}
                />
                <InfoCard
                  vectorpath={"/vectors/db.svg"}
                  title={dataDriven}
                  desc={dataDrivenDes}
                />
                <InfoCard
                  vectorpath={"/vectors/shop.svg"}
                  title={consult}
                  desc={consultDes}
                />
                <InfoCard
                  vectorpath={"/vectors/wifi.svg"}
                  title={wireless}
                  desc={wirelessDes}
                />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default HomeThree;
