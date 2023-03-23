import CategoryFilter from "./CategoryFilter";
import Footer from "../Footer";
import YearFilter from "./YearFilter";
import PlatformFilter from "./PlatformFilter";
import SortTypeSecection from "./SortTypeSecection";
import { useSelector } from "react-redux";
import useFilter from "src/hooks/useFilter";
import FilterResults from "./FilterResults";
import { useState } from "react";
import style from "./FilterPage.module.css";

const FilterPage = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const clickHandler = () => {
    setIsEnabled(true);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.filters}>
      <div className={style.filterBox}>
        <CategoryFilter />
        <YearFilter />
        <PlatformFilter />
        <button className={style.submitFilterBtn} onClick={clickHandler}>
          Wyszukaj
        </button>
      </div>

      <FilterResults isEnabled={isEnabled} />
    </div>
  );
};

export default FilterPage;
