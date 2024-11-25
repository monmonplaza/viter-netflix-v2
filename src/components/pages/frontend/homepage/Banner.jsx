import { imgPath } from "@/components/helpers/functions-general";
import { Bell, Info, Play, Search, Speaker, Volume2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="w-full h-[90vh]">
        <header className="w-full bg-gradient-to-b from-black to-transparent  py-5 px-10 fixed top-0 left-0 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10">
              <img
                src={`${imgPath}/logo-netflix.png`}
                alt=""
                className="w-[120px]"
              />
              <ul className="flex gap-5 text-white">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">TV Shows</Link>
                </li>
                <li>
                  <Link to="/">Movies</Link>
                </li>
                <li>
                  <Link to="/">New & Popular</Link>
                </li>
                <li>
                  <Link to="/">My List</Link>
                </li>
                <li>
                  <Link to="/">Browse By Language</Link>
                </li>
              </ul>
            </div>

            <ul className="flex items-center gap-5  text-white">
              <li>
                <Search />
              </li>
              <li>Kids</li>
              <li>
                <Bell />
              </li>
              <li>
                <div className="size-[30px] rounded-md bg-accent text-white center-all">
                  RP
                </div>
              </li>
            </ul>
          </div>
        </header>

        <div className="banner text-white">
          <img
            src={`${imgPath}/wedding-singer.jpg`}
            alt=""
            className="w-full h-screen object-cover"
          />

          <div className="absolute bottom-[200px] left-10 max-w-[700px]">
            <h1 className="text-light mb-5">Wedding Singer</h1>
            <p className="text-xl mb-10">
              Robbie, a singer, and Julia, a waitress, are both engaged, but to
              the wrong people. Fortune intervenes to help them discover each
              other.
            </p>

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
              13+
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
