import React from "react";
import HomeOne from "./components/HomeOne";
import HomeTwo from "./components/HomeTwo";
import HomeThree from "./components/HomeThree";
import HomeFour from "./components/HomeFour";
import HomeFive from "./components/HomeFive";
import HomeSix from "./components/HomeSix";

const HomeScreen = () => {
  return (
    <div className={`flex flex-col h-full w-full gap-2 hide-scrollbar p-1`}>
      <div className="flex h-screen w-full">
        <HomeOne />
      </div>
      <div className="flex h-[70vh] w-full">
        <HomeTwo />
      </div>
      <div className="flex h-screen w-full">
        <HomeThree />
      </div>
      <div className="flex h-[130vh] w-full">
        <HomeFour />
      </div>
      <div className="flex h-screen w-full">
        <HomeFive />
      </div>
      <div className="flex w-full">
        <HomeSix />
      </div>
    </div>
  );
};

export default HomeScreen;
