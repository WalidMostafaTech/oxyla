import { useState } from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import FiltersSideBar from "./FiltersSideBar";

const Filters = () => {
  const [active, setActive] = useState(1);
  const FiltersBtns = ["all", "private", "couples", "accessible"];

  return (
    <section>
      {/* 🔹 Search bar & filter icon */}
      <div className="flex items-center p-2 rounded-full shadow-md">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-0 border-0 p-2"
        />

        {/* 🔹 Drawer toggle */}
        <label htmlFor="filters-drawer" className="text-2xl p-2 cursor-pointer">
          <RxMixerHorizontal />
        </label>
      </div>

      {/* 🔹 Filter buttons */}
      <div className="flex items-center gap-4 flex-wrap mt-4">
        {FiltersBtns.map((btn, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full shadow-md hover:brightness-90 transition cursor-pointer capitalize ${
              active === i ? "bg-myGreen text-white" : "bg-white text-black"
            }`}
            onClick={() => setActive(i)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* 🔹 DaisyUI Drawer (Sidebar) */}
      <FiltersSideBar />
    </section>
  );
};

export default Filters;
