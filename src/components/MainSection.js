import style from "../components/MainSection.module.css";
import Image from "next/image";
import Spinner from "./UI/Spiner";
import Slider from "./slider/Slider";
import { motion } from "framer-motion";
import { useState } from "react";

const MainSection = (props) => {
  const [isClicked, setIsClicked] = useState(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
      className={style.container}
    >
      <div className={style.imageWrapper}>
        {props.popular.map((item, index) => (
          <div
            key={item.id}
            className={`${style.imageBox} ${
              isClicked === index ? style.selected : ""
            }`}
            onClick={() => setIsClicked(index)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: `${isClicked === index ? 0.8 : 0}` }}
              className={style.imageOpacity}
            >
              <h1
                style={{
                  display: `${isClicked === index ? "block" : "none"}`,
                }}
              >
                {item.title}
              </h1>
              <p
                style={{
                  display: `${isClicked === index ? "block" : "none"}`,
                }}
              >
                {item.description}
              </p>
            </motion.div>
            {/* <Image src={item.img} alt="Logo" className={style.image} /> */}
            <div
              className={style.image}
              style={{
                backgroundImage: `url("/film_miniatures/${item.miniature}")`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className={style.sliderWrapper}>
        {props.type === "films" &&
          props.films.map((film) => (
            <Slider
              category={film.genre}
              type={props.type}
              list={film.list.slice(0, 10)}
            />
          ))}
        {props.type === "series" &&
          props.series.map((series) => (
            <Slider
              category={series.genre}
              type={props.type}
              list={series.list.slice(0, 10)}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default MainSection;
