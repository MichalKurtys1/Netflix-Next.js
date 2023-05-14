import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "src/store";
import style from "./PlatformItem.module.css";

const PlatformItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    if (isClicked) {
      props.setPlatforms(props.name, false);
      setIsClicked(false);
    } else {
      props.setPlatforms(props.name, true);
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

export default PlatformItem;
