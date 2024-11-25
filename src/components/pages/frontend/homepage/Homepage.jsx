import React from "react";
import Banner from "./Banner";
import SliderMovie from "./SliderMovie";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <SliderMovie />
      <div className="h-[50vh]"></div>
    </div>
  );
};

export default Homepage;
