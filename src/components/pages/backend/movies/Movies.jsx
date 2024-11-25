import { Plus } from "lucide-react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import Searchbar from "../partials/Searchbar";
import SideNavigation from "../partials/SideNavigation";
import MoviesTable from "./MoviesTable";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd } from "@/components/store/storeAction";
import React from "react";
import ModalAddMovie from "./ModalAddMovie";
import ModalValidation from "../partials/modals/ModalValidation";
import ModalError from "../partials/modals/ModalError";
import ToastSuccess from "../partials/ToastSuccess";
import ModalViewMovie from "./ModalViewMovie";

const Movies = () => {
  const { dispatch, store } = React.useContext(StoreContext);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  };

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="movies" />
          <main>
            <Header title="Movies" subtitle="List of available movies" />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar />
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>
              <MoviesTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}

      {store.isView && <ModalViewMovie />}
      {store.isAdd && <ModalAddMovie />}
    </>
  );
};

export default Movies;
