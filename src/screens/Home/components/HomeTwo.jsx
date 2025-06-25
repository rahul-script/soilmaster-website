import React from "react";
import ImageVectorText from "../../../components/ImageVectorText";
import { nutrientDesc, nutrientTitle, waterDesc, waterTitle } from "../../../utils/text-constants";

const HomeTwo = () => {
  return (
    <div className={`flex flex-row h-full w-[100%]`}>
      <ImageVectorText
        imgPath={"/images/nutrition_management.jpg"}
        vectorPath={"/vectors/nutrition.svg"}
        title={nutrientTitle}
        description={nutrientDesc}
      />
      <ImageVectorText
        imgPath={"/images/water_management.jpg"}
        vectorPath={"/vectors/water_drop.svg"}
        title={waterTitle}
        description={waterDesc}
      />
    </div>
  );
};

export default HomeTwo;
