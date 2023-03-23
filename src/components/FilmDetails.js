import Image from "next/image";
import img1 from "public/film_miniatures/irishman.jpg";
import img2 from "public/film_miniatures/irishman_vertical.jpg";
import style from "./FilmDetails.module.css";
import Separator from "./UI/Separator";
import Player from "./Player";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const FilmDetails = () => {
  const clickHandler = () => {
    window.scroll({ top: window.outerWidth * 0.85, behavior: "smooth" });
  };

  //To rozwiązanie problemu z hydration
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);
  //---------

  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <Image src={img1} alt="Logo" className={style.imageMain} />
        <div className={style.opacity}></div>
        <div className={style.imageBox}>
          <h1>Irlandczyk</h1>
          <motion.button className={style.tpBtn} onClick={clickHandler}>
            Przejdź od oglądania
          </motion.button>
        </div>
        <div className={style.descriptionWrapper}>
          <Image src={img2} alt="Logo" className={style.image} />
          <div className={style.descriptionBox}>
            <p className={style.description}>
              Płatny zabójca Frank Sheeran spogląda wstecz na sekrety, które
              skrywał jako lojalny członek rodziny mafijnej Bufalino.
            </p>
            <div className={style.separator}>
              <Separator diraction={false} />
            </div>
            <div className={style.detailsBox}>
              <div className={style.leftBox}>
                <p>Reżyseria</p>
                <p>Scenariusz</p>
                <p>Gatunek</p>
                <p>Produkcja</p>
                <p>Premiera</p>
              </div>
              <div className={style.rightBox}>
                <p>Martin Scorsese</p>
                <p>Steven Zaillian</p>
                <p>Biograficzny, Gangsterski</p>
                <p>USA</p>
                <p>27 września 2019</p>
              </div>
            </div>
            <div className={style.separator}>
              <Separator diraction={true} />
            </div>
          </div>
        </div>
      </div>
      {isRendered && <Player />}
    </div>
  );
};

export default FilmDetails;
