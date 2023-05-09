import style from "../UI/Spiner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.loader}></div>
      </div>
    </>
  );
};

export default Spinner;
