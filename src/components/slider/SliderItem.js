import Image from "next/image";
import style from "./SliderItem.module.css";
import Spinner from "../UI/Spiner";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faPlay} className={style.icon} />
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
