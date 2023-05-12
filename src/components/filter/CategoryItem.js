import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "src/store";
import style from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    if (isClicked) {
      props.setCategories(props.name, false);
      setIsClicked(false);
    } else {
      props.setCategories(props.name, true);
      setIsClicked(true);
    }
  };

  return (
    <div
      className={style.container}
      onClick={clickHandler}
      style={isClicked ? { backgroundColor: "#007ACC" } : {}}
    >
      <p>{props.name}</p>
    </div>
  );
};

export default CategoryItem;
