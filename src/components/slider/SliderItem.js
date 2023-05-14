import Image from "next/image";
import style from "./SliderItem.module.css";
import Spinner from "../UI/Spiner";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// import img from "../../../public/film_miniatures/"

const SliderItem = (props) => {
  const clickHandler = () => {};

  return (
    <Link href={`/${props.type}/${props.title}`}>
      <div className={style.slide} onClick={clickHandler}>
        <Image
          src={"/film_posters/" + props.poster}
          alt="Film"
          layout="fill"
          objectFit="cover"
          className={style.image}
        />
        <div className={style.opacity}></div>
        <div className={style.detailBox}>
          <p className={style.name}>{props.title}</p>
          <p className={style.details}>{props.duration}</p>
          <FontAwesomeIcon icon={faPlay} className={style.icon} />
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
