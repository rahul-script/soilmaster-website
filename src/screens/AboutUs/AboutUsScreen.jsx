import React from "react";
import { aboutUsHeader } from "../../utils/text-constants";
import HeaderText from "./components/HeaderText";
import StoryAndTeam from "./components/StoryAndTeam";

const AboutUsScreen = () => {
  return (
    <div className={`flex flex-col h-full mx-1`}>
      {/* title text */}
      <HeaderText />

      {/* image */}
      <img
        src="/images/corn-field.png"
        alt="corn-field"
        loading="lazy"
        className="h-full w-full rounded-3xl"
      />

      {/* story */}
      <StoryAndTeam />
    </div>
  );
};

export default AboutUsScreen;
