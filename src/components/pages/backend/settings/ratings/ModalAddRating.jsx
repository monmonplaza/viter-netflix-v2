import React from "react";
import ModalWrapper from "../../partials/modals/ModalWrapper";
import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import SpinnerButton from "../../partials/spinners/SpinnerButton";
import { X } from "lucide-react";

const ModalAddRatings = () => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));

  return (
    <ModalWrapper>
      <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
        <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2 ">
          <span className="text-body">Add Ratings</span>
          <button className="ml-auto" onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className="modal-body p-2 py-4">
          <form action="">
            <div className="input-wrap">
              <label htmlFor="">Ratings</label>
              <input type="text" />
            </div>
          </form>
          <div className="flex justify-end gap-3 mt-5">
            <button className="btn btn-info">
              <SpinnerButton /> Save
            </button>
            <button className="btn btn-cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddRatings;
