import React from "react";
import Banner from "./Banner";
import SliderMovie from "./SliderMovie";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <div className="py-24 mt-20 bg-dark">
        <SliderMovie title="Top Picks" />
        <SliderMovie title="International" />
        <SliderMovie title="KDrama" />
        <SliderMovie title="Anime" />
      </div>
    </div>
  );
};

export default Homepage;
