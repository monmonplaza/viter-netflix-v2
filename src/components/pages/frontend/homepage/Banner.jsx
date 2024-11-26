import { imgPath } from "@/components/helpers/functions-general";
import { Bell, Info, Play, Search, Speaker, Volume2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { movies } from "../../backend/movies/datamovies";

const Banner = () => {
  const getFeatureMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <>
      <section className="w-full h-[90vh]">
        <Header />
        <div className="banner text-white">
          <img
            src={`${imgPath}/${getFeatureMovie.movie_image}`}
            alt=""
            className="w-full h-screen object-cover"
          />

          <div className="absolute bottom-[200px] left-10 max-w-[700px]">
            <h1 className="text-light mb-5">{getFeatureMovie.movie_title}</h1>
            <p className="text-xl mb-10">{getFeatureMovie.movie_summary}</p>

            <div className="flex gap-5 items-center">
              <button className="rounded-md px-7 py-4 text-xl flex gap-2 items-center bg-white hover:bg-opacity-70 text-black font-semibold">
                <Play fill={"#000"} size={28} /> Play
              </button>

              <button className="rounded-md px-7 py-4 text-xl flex gap-2 items-center bg-[rgba(109,109,110,0.7)] text-white font-semibold hover:bg-[rgba(109,109,110,0.9)]">
                <Info size={28} /> More Info
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-[200px] flex gap-5 items-center">
            <button className="size-[50px] center-all border border-white rounded-full">
              <Volume2 size={28} />
            </button>

            <div className="w-[150px] p-4 py-3 bg-[rgba(109,109,110,0.5)] border-l-[4px] border-white text-xl">
              {getFeatureMovie.movie_rating}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
