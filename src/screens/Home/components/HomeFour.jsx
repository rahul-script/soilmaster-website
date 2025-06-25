import React from "react";
import ParentContainer from "../../../components/molecular-components/ParentContainer";
import { knowYourSoil } from "../../../utils/text-constants";
import Carousel from "../../../components/Carousel";

const HomeFour = () => {
  return (
    <ParentContainer
      height={"h-full"}
      width={"w-full"}
      child={
        <div
          className={`relative h-full w-full rounded-3xl bg-center bg-cover`}
          style={{ backgroundImage: "url('/images/carousel_bg.jpg')" }}
        >
          <div
            className={`z-[2] absolute top-[5%] inset-0 flex flex-col items-center justify-center px-24 `}
          >
            <span className={`text-custom-white text-4xl`}>{knowYourSoil}</span>
            <Carousel images={images} />
          </div>
        </div>
      }
    />
  );
};

export default HomeFour;

const images = [
  {
    src: "/images/step_one.png",
    step: "Step 1",
    title: "Add Farm",
    desc: "Tell us where your farm is located by entering basic details like name and area.",
  },
  {
    src: "/images/step_two.png",
    step: "Step 2",
    title: "Add Plot",
    desc: "Tell us where your farm is located by entering basic details like name and area.",
  },
  {
    src: "/images/step_three.png",
    step: "Step 3",
    title: "Add Crop",
    desc: "Tell us where your farm is located by entering basic details like name and area.",
  },
  {
    src: "/images/step_four.png",
    step: "Step 4",
    title: "Get Results",
    desc: "Tell us where your farm is located by entering basic details like name and area.",
  },
];
