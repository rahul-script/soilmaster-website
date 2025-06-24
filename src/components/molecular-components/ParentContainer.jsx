import React from "react";

const ParentContainer = ({ child, height, width, styles = "" }) => {
  return (
    <div
      className={`${height} ${width} flex rounded-3xl m-1 ${styles} `}
    >
      {child}
    </div>
  );
};

export default ParentContainer;
