import React from "react";
import { story, team } from "../../../utils/text-constants";
import ImagesCollage from "../../../components/ImagesCollage";

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
        <div className={`h-fit w-fit`}>
          <ImagesCollage images={imagesList} />
        </div>
      </div>
    </div>
  );
};

export default StoryAndTeam;

const imagesList = [
  { label: "person-one", imagePath: "/images/team/person-one.jpg" },
  { label: "person-two", imagePath: "/images/team/person-two.png" },
  { label: "person-three", imagePath: "/images/team/person-three.png" },
  { label: "person-four", imagePath: "/images/team/person-four.png" },
  { label: "person-five", imagePath: "/images/team/person-five.png" },
  { label: "person-six", imagePath: "/images/team/person-six.png" },
];
