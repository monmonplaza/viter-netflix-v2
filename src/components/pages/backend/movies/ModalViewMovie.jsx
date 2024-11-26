import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { imgPath } from "@/components/helpers/functions-general";
import { Play, Plus, ThumbsUp, X } from "lucide-react";
import { StoreContext } from "@/components/store/storeContext";
import { setIsView } from "@/components/store/storeAction";
import { movies } from "./datamovies";

const ModalViewMovie = ({ movieInfo }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [randomize, setRandomize] = React.useState([]);
  const handleClose = () => dispatch(setIsView(false));

  React.useEffect(() => {
    setRandomize(
      movies
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
  }, []);

  return (
    <ModalWrapper>
      <div
        className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 max-w-[800px] w-full rounded-md border border-line "
      >
        <div className="modal-banner relative">
          <img
            src={`${imgPath}/${movieInfo.movie_image}`}
            alt=""
            className="h-[350px] w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 z-40">
            <h3 className="mb-3">{movieInfo.movie_title}</h3>
            <ul className="flex gap-2 items-center">
              <li>
                <button className="flex gap-2 bg-dark px-4 py-1.5 rounded-md text-light font-bold">
                  <Play fill="text-light" /> Play
                </button>
              </li>
              <li>
                <button className="size-[40px] center-all rounded-full border-[1px] border-dark bg-light bg-opacity-50">
                  <Plus size={18} strokeWidth={2} />
                </button>
              </li>
              <li>
                <button className="size-[40px] center-all rounded-full border-[1px] border-dark bg-light bg-opacity-50">
                  <ThumbsUp size={18} strokeWidth={2} />
                </button>
              </li>
            </ul>
          </div>

          <div className="tint absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black to-transparent"></div>

          <button
            className="absolute top-3 right-3 size-[35px] center-all text-dark bg-light rounded-full"
            onClick={handleClose}
          >
            <X />
          </button>
        </div>

        <div className="modal-body p-4 ">
          <div className="grid grid-cols-[1fr,_250px] gap-5">
            <div>
              <ul className="flex gap-3 items-center text-xs mb-3">
                <li className="border-[1px] border-dark py-1 px-2.5 text-[12px] leading-none">
                  <span className="translate-y-[1px] block">
                    {movieInfo.movie_rating}
                  </span>
                </li>
                <li>{movieInfo.movie_year}</li>
                <li>{movieInfo.movie_duration}</li>
                <li className="border-[1px] border-dark py-[0.5px] px-1.5 text-[9px]">
                  HD
                </li>
              </ul>
              <p className="text-xs leading-relaxed">
                {movieInfo.movie_summary}
              </p>
            </div>
            <div className="space-y-3 text-xs">
              <p className="text-xs leading-relaxed">
                <span className="opacity-60   ">Cast:</span>{" "}
                {movieInfo.movie_cast}
              </p>
              <p className="text-xs leading-relaxed">
                <span className="opacity-60 ">Genre:</span>{" "}
                {movieInfo.movie_genre}
              </p>
            </div>
          </div>
        </div>

        <div className="modal-more p-4">
          <div className="grid grid-cols-3 gap-5">
            {randomize.slice(0, 3).map((item, key) => (
              <div className="card rounded-md overflow-hidden" key={key}>
                <div className=" relative">
                  <img
                    src={`${imgPath}/${item.movie_image}`}
                    alt=""
                    className="w-full object-cover h-[120px]"
                  />
                  <p className="absolute top-3 right-3 z-40">
                    {item.movie_duration}
                  </p>
                  <div className="tint bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-transparent absolute top-0 left-0 w-full h-full"></div>
                </div>
                <div className="p-4 bg-secondary">
                  <div className="flex justify-between items-center mb-5">
                    <ul className="flex gap-3 items-center text-xs">
                      <li className="border-[1px] border-dark py-1 px-2.5 text-[12px] leading-none">
                        <span className="translate-y-[1px] block">
                          {item.movie_rating}
                        </span>
                      </li>
                      <li>{item.movie_year}</li>
                      <li className="border-[1px] border-dark py-[0.5px] px-1.5 text-[9px]">
                        HD
                      </li>
                    </ul>
                    <button className="size-[50px] rounded-full border-[1px] border-dark center-all">
                      <Plus />
                    </button>
                  </div>
                  <p className="text-xs text-balance leading-relaxed line-clamp-3">
                    {item.movie_summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalViewMovie;
