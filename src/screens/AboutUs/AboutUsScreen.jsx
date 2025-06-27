import HeaderText from "./components/HeaderText";
import StoryAndTeam from "./components/StoryAndTeam";
import Blog from "./components/Blog";

const AboutUsScreen = () => {
  return (
    <div className={`flex flex-col h-full mx-1`}>
      {/* title text */}
      <HeaderText />

      {/* image */}
      <img
        src="/images/corn-field.png"
        alt="corn-field"
        loading="lazy"
        className="h-full w-full rounded-3xl"
      />

      {/* story */}
      <StoryAndTeam />

      {/* blog */}
      <Blog />
    </div>
  );
};

export default AboutUsScreen;
