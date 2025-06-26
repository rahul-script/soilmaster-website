import React from "react";

const UnorderedTextList = ({ list = [], elementTextStyling }) => {
  return (
    <ul className={`list-disc pl-5 space-y-4`}>
      {list.map((element, index) => (
        <li key={index} className={`break-words ${elementTextStyling}`}>
          <p>{element}</p>
        </li>
      ))}
    </ul>
  );
};

export default UnorderedTextList;
