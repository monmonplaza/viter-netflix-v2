import React from "react";
import Banner from "./Banner";
import SliderMovie from "./SliderMovie";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="py-24 mt-20 bg-dark">
        <SliderMovie title="International" filter="International" />
        <SliderMovie title="KDrama" filter="KDrama" />
        <SliderMovie title="Hot Anime" filter="Anime" />
      </div>
    </div>
  );
};

export default Homepage;
