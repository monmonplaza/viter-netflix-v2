import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";

const ModalAddMovie = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  return (
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">Add Movie</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>

          <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
            <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">
              <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                {true ? (
                  <div className="w-full border border-line rounded-md flex justify-center items-center flex-col h-full">
                    <ImagePlusIcon
                      size={50}
                      strokeWidth={1}
                      className="opacity-20 group-hover:opacity-50 transition-opacity"
                    />
                    <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                      Upload Photo
                    </small>
                  </div>
                ) : (
                  <img
                    // src={
                    //   photo
                    //     ? URL.createObjectURL(photo) // preview
                    //     : imgPath + "/" + itemEdit?.movies_image // check db
                    // }
                    alt="employee photo"
                    className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                  />
                )}
              </div>

              <div className="input-wrap">
                <label htmlFor="">Title</label>
                <input type="text" />
                <span className="show-error">*Required</span>
              </div>
              <div className="input-wrap">
                <label htmlFor="">Year</label>
                <input type="text" />
              </div>
              <div className="input-wrap">
                <label htmlFor="">Duration</label>
                <input type="text" />
              </div>

              <div className="input-wrap">
                <label htmlFor="">Category</label>
                <select>
                  <option value="" hidden>
                    Select Category
                  </option>
                  <option value="kdrama">Korean Drama</option>
                  <option value="western">Western Movie</option>
                  <option value="jdrama">Japan Drama</option>
                  <option value="anime">Anime</option>
                </select>
              </div>

              <div className="input-wrap">
                <label htmlFor="">Genre</label>
                <select>
                  <option value="" hidden>
                    Select Genre
                  </option>
                  <option value="scifi">Sci Fi</option>
                  <option value="action">Action</option>
                  <option value="drama">Drama</option>
                  <option value="romance">Romance</option>
                </select>
              </div>

              <div className="input-wrap">
                <label htmlFor="">Summary</label>
                <textarea></textarea>
              </div>

              <div className="input-wrap">
                <label htmlFor="">Cast</label>
                <textarea></textarea>
              </div>
            </div>
            <div className="form-action flex p-4 justify-end gap-3">
              <button className="btn btn-add">
                <SpinnerButton /> Save
              </button>
              <button className="btn btn-cancel" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddMovie;
