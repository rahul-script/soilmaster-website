import React from "react";
import HomeOne from "./components/HomeOne";
import HomeTwo from "./components/HomeTwo";

const HomeScreen = () => {
  return (
    <div className={`flex flex-col h-full w-full gap-2 hide-scrollbar p-1`}>
      <div className="flex h-screen w-full">
        <HomeOne />
      </div>
      <div className="flex h-screen w-full">
        <HomeTwo />
      </div>
      <div className="flex h-screen w-full">3</div>
      <div className="flex h-screen w-full">4</div>
      <div className="flex h-screen w-full">5</div>
    </div>
  );
};

export default HomeScreen;
