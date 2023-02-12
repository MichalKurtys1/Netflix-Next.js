import FilmSection from "../../components/FilmSection";
import CategoryFilter from "../../components/filters/CategoryFilter";
import Footer from "../../components/Footer";
import YearFilter from "../../components/filters/YearFilter";
import PlatformFilter from "../../components/filters/PlatformFilter";
import SortTypeSecection from "../../components/filters/SortTypeSecection";
import { useSelector } from "react-redux";
import useFilter from "../../hooks/useFilter";
import FilterResults from "../../components/filters/FilterResults";
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
