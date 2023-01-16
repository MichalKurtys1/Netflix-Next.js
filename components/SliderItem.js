import Image from "next/image";
import style from "./SliderItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

const SliderItem = (props) => {
  return (
    <div className={style.slide}>
      <Image src={props.img} alt="Film" className={style.image} />
      <div className={style.opacity}></div>
      <p className={style.name}>{props.name}</p>
      <FontAwesomeIcon icon={faPlayCircle} className={style.icon} />
    </div>
  );
};

export default SliderItem;
