import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "src/store";
import style from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    if (isClicked) {
      dispatch(filterActions.removeCategory(props.name));
      setIsClicked(false);
    } else {
      dispatch(filterActions.addCategory(props.name));
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
