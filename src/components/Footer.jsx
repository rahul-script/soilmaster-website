import React from "react";
import ParentContainer from "./molecular-components/ParentContainer";
import { footerTag, rightsReserved } from "../utils/text-constants";

const Footer = () => {
  return (
    <ParentContainer
      height={"h-fit"}
      styles={"border "}
      child={
        <div className="w-full flex flex-col ">
          <div
            className={`flex w-full flex-row items-end justify-between gap-8 px-10 py-5 rounded-3xl`}
          >
            <div className="w-[40%] flex flex-col gap-4">
              {/* logo */}
              <div className={`h-fit w-full flex flex-row items-center gap-2`}>
                <img src="/images/logo.png" alt="Logo" className="h-16 w-16" />
                <span>Soilmaster</span>
              </div>

              {/* Tag line */}
              <p className="text-xl font-bold">{footerTag}</p>
            </div>

            <div className="w-[50%] max-w-[60%] grid grid-rows-3 grid-flow-col space-y-2 ">
              {footerContents.map((element, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[0.2rem] cursor-pointer"
                >
                  {element.vectorPath && (
                    <img
                      src={element.vectorPath}
                      alt="label"
                      className="h-4 w-4"
                    />
                  )}
                  <p className="text-base">{element.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Green */}
          <div className="h-12 w-full flex items-center justify-between bg-custom-green rounded-b-3xl px-10 text-sm">
            <p>{rightsReserved}</p>
            <div className={`grid grid-cols-3 grid-flow-row space-x-4 w-fit`}>
              {
                impItems.map((element, index) => (
                  <p key={index} className="cursor-pointer">{element.label}</p>
                ))
              }
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Footer;

const footerContents = [
  { label: "Plans & Pricing", link: "", vectorPath: null },
  { label: "Personal AI Manager", link: "", vectorPath: null },
  { label: "AI Business Writer", link: "", vectorPath: null },
  { label: "Blog", link: "", vectorPath: null },
  { label: "Careers", link: "", vectorPath: null },
  { label: "News", link: "", vectorPath: null },
  { label: "Documentation", link: "", vectorPath: null },
  { label: "Papers", link: "", vectorPath: null },
  { label: "Press Conferences", link: "", vectorPath: null },
  { label: "Android", link: "", vectorPath: "/vectors/android.svg" },
  { label: "iOS", link: "", vectorPath: "/vectors/ios.svg" },
];

const impItems = [
  { label: "Terms of Service", link: "" },
  { label: "Privacy Policy", link: "" },
  { label: "Cookies", link: "" },
];
