import React, { useState } from "react";
import NavbarText from "./molecular-components/NavbarText";
import { aboutUsPath, contactUsPath, homePath } from "../utils/path-constants";

const Navbar = () => {
  const [currentRoute, setRoute] = useState(homePath);

  return (
    <div
      className={`absolute flex flex-row z-10 items-center justify-between w-full min-h-24 py-4 pl-5 pr-24 bg-transparent  `}
    >
      <div className="flex flex-row items-center gap-4">
        <img src="images/logo.png" alt="logo" className={`max-w-20 max-h-20`} />
        <span className={`text-xl font-medium text-custom-black `}>
          Soilmaster
        </span>
      </div>

      <div className={`flex flex-row items-center gap-20 justify-end`}>
        <NavbarText
          text="Home"
          link={homePath}
          // isCurrent={currentRoute === homePath}
          // onClick={() => setRoute(homePath)}
        />
        <NavbarText
          text="About Us"
          link={aboutUsPath}
          // isCurrent={currentRoute === aboutUsPath}
          // onClick={() => setRoute(aboutUsPath)}
        />
        <NavbarText
          text="Contact Us"
          link={contactUsPath}
          // isCurrent={currentRoute === contactUsPath}
          // onClick={() => setRoute(contactUsPath)}
        />
      </div>
    </div>
  );
};

export default Navbar;
