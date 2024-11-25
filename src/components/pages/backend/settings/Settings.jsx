import { StoreContext } from "@/components/store/storeContext";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import Category from "./category/Category";
import Genre from "./genre/Genre";
import Ratings from "./ratings/Ratings";
import React from "react";
import { setMessage } from "@/components/store/storeAction";
const Settings = () => {
  const [tableIndex, setTableIndex] = React.useState(0);

  const tables = [<Category />, <Ratings />, <Genre />];

  const handleChangeIndex = (index) => setTableIndex(index);

  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation />
          <main>
            <Header title="Settings" subtitle="Manage movies options" />
            <div className="p-8">
              <ul className="flex leading-tight gap-10 font-semibold mb-5 border-b border-line">
                <li>
                  <button>General</button>
                </li>
                <li
                  className={`${
                    tableIndex === 0
                      ? "border-b-4 border-accent pb-5 text-accent"
                      : ""
                  } `}
                >
                  <button onClick={() => handleChangeIndex(0)}>Category</button>
                </li>
                <li
                  className={`${
                    tableIndex === 1
                      ? "border-b-4 border-accent pb-5 text-accent"
                      : ""
                  } `}
                >
                  <button onClick={() => handleChangeIndex(1)}>Ratings</button>
                </li>
                <li
                  className={`${
                    tableIndex === 2
                      ? "border-b-4 border-accent pb-5 text-accent"
                      : ""
                  } `}
                >
                  <button onClick={() => handleChangeIndex(2)}>Genre</button>
                </li>
              </ul>
              {tables[tableIndex]}
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Settings;
