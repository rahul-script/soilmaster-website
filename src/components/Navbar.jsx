import React, { useState } from "react";
import NavbarText from "./molecular-components/NavbarText";
import { aboutUsPath, contactUsPath, homePath } from "../utils/path-constants";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [currentRoute, setRoute] = useState(homePath);
  const location = useLocation();

  const isHome = location.pathname === homePath;

  return (
    <div
      className={`${
        isHome && "absolute"
      } flex flex-row z-10 items-center justify-between w-full min-h-24 py-4 pl-5 pr-24 bg-transparent  `}
    >
      <div className="flex flex-row items-center gap-4">
        <img
          src="images/logo.png"
          loading="lazy"
          alt="logo"
          className={`max-w-20 max-h-20`}
        />
        <span className={`text-xl font-medium text-custom-black `}>
          Soilmaster
        </span>
      </div>

      <div className={`flex flex-row items-center gap-20 justify-end`}>
        <NavbarText
          text="Home"
          link={homePath}
          isCurrent={location.pathname === homePath}
          textColor={`${
            isHome ? "text-custom-white/60" : "text-custom-black/60"
          } `}
          selectedColor={`${
            isHome ? "text-custom-white" : "text-custom-black"
          } `}
        />
        <NavbarText
          text="About Us"
          link={aboutUsPath}
          isCurrent={location.pathname === aboutUsPath}
          textColor={`${
            isHome ? "text-custom-white/60" : "text-custom-black/60"
          } `}
          selectedColor={`${
            isHome ? "text-custom-white" : "text-custom-black"
          } `}
        />
        <NavbarText
          text="Contact Us"
          link={contactUsPath}
          isCurrent={location.pathname === contactUsPath}
          textColor={`${
            isHome ? "text-custom-white/60" : "text-custom-black/60"
          } `}
          selectedColor={`${
            isHome ? "text-custom-white" : "text-custom-black"
          } `}
        />
      </div>
    </div>
  );
};

export default Navbar;
