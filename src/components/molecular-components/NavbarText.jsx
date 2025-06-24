import React from "react";

const NavbarText = ({ text = "", link, isCurrent = false, selectedColor = 'text-custom-black', onClick }) => {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`navbar-text-style ${isCurrent && selectedColor} hover:cursor-pointer hover:underline `}
    >
      {text}
    </a>
  );
};

export default NavbarText;
