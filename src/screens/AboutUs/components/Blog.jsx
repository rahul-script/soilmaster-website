import React from "react";

const Blog = () => {
  return (
    <div className={`flex flex-col h-fit w-full gap-4 items-center`}>
      <div className={`w-[75%] flex items-start`}>
        <span className={`aboutUs-content-title`}>{"Blog"}</span>
      </div>

      {/* grid of blogs */}
      <div className={`w-[75%] grid grid-cols-3 gap-5`}>
        {blogs.map((element, index) => (
          <div
            key={index}
            className={`flex flex-col items-start justify-between gap-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:border border-custom-black/30 hover:bg-custom-black/10 rounded-xl p-2`}
          >
            <div className="w-full aspect-[16:9] overflow-hidden">
              <img
                src={element.imagePath}
                alt={`blog-${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className={`flex flex-col gap-1`}>
              <p
              className={`text-base font-semibold text-custom-black h-[48px] overflow-hidden text-ellipsis line-clamp-2`}
            >
              {element.title}
            </p>
            <p className={`text-custom-black/80 text-sm font-normal`}>
              {element.subtitle}
            </p>
            <p className={`text-custom-black/80 text-sm font-normal`}>
              {element.year}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

const blogs = [
  {
    imagePath: "/images/blogs/one.svg",
    title: "1000 for 1000 Affordable Housing Design Competition",
    subtitle: "Shelter Afrique",
    year: "2017",
  },
  {
    imagePath: "/images/blogs/two.svg",
    title: "1000 for 1000 Affordable Housing Design Competition",
    subtitle: "Shelter Afrique",
    year: "2017",
  },
  {
    imagePath: "/images/blogs/three.svg",
    title: "1000 for 1000 Affordable Housing Design Competition",
    subtitle: "Shelter Afrique",
    year: "2017",
  },
  {
    imagePath: "/images/blogs/four.svg",
    title: "1000 for 1000 Affordable Housing Design Competition",
    subtitle: "Shelter Afrique",
    year: "2017",
  },
  {
    imagePath: "/images/blogs/five.svg",
    title: "1000 for 1000 Affordable Housing Design Competition",
    subtitle: "Shelter Afrique",
    year: "2017",
  },
];
