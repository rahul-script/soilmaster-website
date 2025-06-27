import React from "react";
import { story, team } from "../../../utils/text-constants";

const StoryAndTeam = () => {
  return (
    <div
      className={`flex flex-col space-y-10 items-center justify-between h-fit mx-1 py-20 rounded-3xl `}
    >
      {/* Story */}
      <div className={`aboutUs-content-alignment`}>
        <div className={`aboutUs-content-title `}>
          <span>{"Our Story"}</span>
        </div>

        <div className={`aboutUs-content-box`}>
          {story.map((element, index) => (
            <p key={index}>{element.text}</p>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className={`flex flex-col w-full items-center h-fit gap-4 `}>
        {/* Team Text */}
        <div className={`aboutUs-content-alignment`}>
          <div className={`aboutUs-content-title `}>
            <span>{"Meet Our Team"}</span>
          </div>

          <div className={`aboutUs-content-box`}>
            {team.map((element, index) => (
              <p key={index}>{element.text}</p>
            ))}
          </div>
        </div>

        {/* Team Images */}
        <div className={`h-[20vh] border border-black w-[75%]`}></div>
      </div>
    </div>
  );
};

export default StoryAndTeam;

const imagesList = [
  {label: "person-one", imagePath: "/images/team/person-one.jpeg"},
  {label: "person-one", imagePath: "/images/team/person-one"},
  {label: "person-one", imagePath: "/images/team/person-one"},
  {label: "person-one", imagePath: "/images/team/person-one"},
  {label: "person-one", imagePath: "/images/team/person-one"},
  {label: "person-one", imagePath: "/images/team/person-one"},
];