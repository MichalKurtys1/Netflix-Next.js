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

  return (
    <div className={style.filters}>
      <CategoryFilter />
      <div className={style.filterBox}>
        <SortTypeSecection />
        <YearFilter />
        <PlatformFilter />
        <button
          className={style.submitFilterBtn}
          onClick={() => setIsEnabled(true)}
        >
          Wyszukaj
        </button>
      </div>
      <FilterResults isEnabled={isEnabled} />
    </div>
  );
};

export default FilterPage;
