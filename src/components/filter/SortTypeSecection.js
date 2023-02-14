import { useState } from "react";
import DropDownList from "../UI/DropDownList";
import style from "./SortTypeSection.module.css";
import { useDispatch } from "react-redux";
import { filterActions } from "src/store";

const sortTypes = [
  { name: "Najpopularniejsze" },
  { name: "Od najnowszych" },
  { name: "Od najstarszych" },
  { name: "A -> Z" },
  { name: "Z -> A" },
];

const types = [
  { name: "W kinach" },
  { name: "Już wktótce" },
  { name: "filmy" },
  { name: "seriale" },
];

const SortTypeSecection = () => {
  const dispatch = useDispatch();
  const [sortInputValue, setSortInputValue] = useState("");
  const [typeInputValue, setTypeInputValue] = useState("");

  const changeSortHandler = (category) => {
    setSortInputValue(category);
    dispatch(filterActions.changeSort(category));
  };

  const changeTypeHandler = (category) => {
    setTypeInputValue(category);
    dispatch(filterActions.changeType(category));
  };

  return (
    <div className={style.container}>
      <div className={style.ChoiseBox}>
        <p className={style.title}>Sortowanie</p>
        <DropDownList
          title="Wybierz kategorie"
          categories={sortTypes}
          onCategoryChange={changeSortHandler}
        />
      </div>
      <div className={style.ChoiseBox}>
        <p className={style.title}>Typ</p>
        <DropDownList
          title="Wybierz typ"
          categories={types}
          onCategoryChange={changeTypeHandler}
        />
      </div>
    </div>
  );
};

export default SortTypeSecection;
