import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import { Form, Formik } from "formik";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import * as Yup from "Yup";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
const ModalAddMovie = () => {
  const { dispatch } = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("");
  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const initVal = {
    movie_title: "",
    movie_year: "",
    movie_duration: "",
    movie_category: "",
    movie_genre: "",
    movie_summary: "",
    movie_cast: "",
  };

  const yupSchema = Yup.object({
    movie_title: Yup.string().required("Required"),
    movie_year: Yup.string().required("Required"),
    movie_duration: Yup.string().required("Required"),
    movie_category: Yup.string().required("Required"),
    movie_genre: Yup.string().required("Required"),
    movie_summary: Yup.string().required("Required"),
    movie_cast: Yup.string().required("Required"),
  });

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

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              console.log(values);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
                    <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">
                      <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                        {photo === null ? (
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
                            src={
                              true
                                ? URL.createObjectURL(photo) // preview
                                : imgPath + "/" + itemEdit?.movies_image // check db
                            }
                            alt="employee photo"
                            className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                          />
                        )}
                        <InputPhotoUpload
                          name="photo"
                          type="file"
                          id="photo"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          onDrop={(e) => handleChangePhoto(e)}
                          className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full`}
                        />
                      </div>

                      <div className="input-wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="movie_title"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputText label="Year" type="text" name="movie_year" />
                      </div>
                      <div className="input-wrap">
                        <InputText
                          label="Duration"
                          type="text"
                          name="movie_duration"
                        />
                      </div>

                      <div className="input-wrap">
                        <InputSelect label="Category" name="movie_category">
                          <option value="" hidden>
                            Select Category
                          </option>
                          <option value="kdrama">Korean Drama</option>
                          <option value="western">Western Movie</option>
                          <option value="jdrama">Japan Drama</option>
                          <option value="anime">Anime</option>
                        </InputSelect>
                      </div>

                      <div className="input-wrap">
                        <InputSelect label="Genre" name="movie_genre">
                          <option value="" hidden>
                            Select Genre
                          </option>
                          <option value="scifi">Sci Fi</option>
                          <option value="action">Action</option>
                          <option value="drama">Drama</option>
                          <option value="romance">Romance</option>
                        </InputSelect>
                      </div>

                      <div className="input-wrap">
                        <InputTextArea label="Summary" name="movie_summary" />
                      </div>

                      <div className="input-wrap">
                        <InputTextArea label="Cast" name="movie_cast" />
                      </div>
                    </div>
                    <div className="form-action flex p-4 justify-end gap-3">
                      <button className="btn btn-add" type="submit">
                        <SpinnerButton /> Save
                      </button>
                      <button
                        className="btn btn-cancel"
                        onClick={handleClose}
                        type="reset"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddMovie;
