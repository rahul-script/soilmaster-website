import React from "react";
import ImageVectorText from "../../../components/ImageVectorText";
import {
  nutrientDesc,
  nutrientTitle,
  waterDesc,
  waterTitle,
} from "../../../utils/text-constants";

const HomeTwo = () => {
  return (
    <div className={`flex h-full w-full items-stretch justify-evenly  `}>
      <div className="max-w-[50%] flex-1">
        <ImageVectorText
          imgPath={"/images/nutrition_management.jpg"}
          vectorPath={"/vectors/nutrition.svg"}
          title={nutrientTitle}
          description={nutrientDesc}
        />
      </div>

      <div className="max-w-[50%] flex-1">
        <ImageVectorText
          imgPath={"/images/water_management.jpg"}
          vectorPath={"/vectors/water_drop.svg"}
          title={waterTitle}
          description={waterDesc}
        />
      </div>
    </div>
  );
};

export default HomeTwo;
