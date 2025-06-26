import React from "react";

const NavbarText = ({
  text = "",
  link,
  isCurrent = false,
  textColor = "text-custom-black/60",
  selectedColor = "text-custom-black",
}) => {
  return (
    <a
      href={link}
      className={`navbar-text-style ${
        isCurrent ? selectedColor : textColor
      } hover:cursor-pointer hover:underline hover:${selectedColor}`}
    >
      {text}
    </a>
  );
};

export default NavbarText;
