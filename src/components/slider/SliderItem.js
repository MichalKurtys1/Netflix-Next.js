import Image from "next/image";
import style from "./SliderItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import Spinner from "../UI/Spiner";
import Link from "next/link";

const SliderItem = (props) => {
  const clickHandler = () => {};

  return (
    <Link href={`/${props.type}/${props.name}`}>
      <div className={style.slide} onClick={clickHandler}>
        <Image src={props.img} alt="Film" className={style.image} />
        <div className={style.opacity}></div>
        <div className={style.detailBox}>
          <p className={style.name}>{props.name}</p>
          <p className={style.details}>{props.details}</p>
        </div>

        <div className={style.spinner}>
          <Spinner />
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
