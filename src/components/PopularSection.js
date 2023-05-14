import Image from "next/image";
import style from "./PopularSection.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PopularSection = (props) => {
  const [displayType, setDisplayType] = useState(1);
  console.log(props);
  const displayTypeHandler = (type) => {
    setDisplayType(type);
  };

  return (
    <div className={style.container}>
      <ul className={style.menu}>
        <li>
          <button
            style={{
              backgroundColor: `${
                displayType === 1 ? "#252526" : "transparent"
              }`,
              borderRadius: `${displayType === 1 ? "15px" : ""}`,
            }}
            className={style.choiseBtn}
            onClick={() => displayTypeHandler(1)}
          >
            Filmy
          </button>
        </li>
        <li>
          <button
            style={{
              backgroundColor: `${
                displayType === 2 ? "#252526" : "transparent"
              }`,
              borderRadius: `${displayType === 2 ? "15px" : ""}`,
            }}
            className={style.choiseBtn}
            onClick={() => displayTypeHandler(2)}
          >
            Wszystkie
          </button>
        </li>
        <li>
          <button
            style={{
              backgroundColor: `${
                displayType === 3 ? "#252526" : "transparent"
              }`,
              borderRadius: `${displayType === 3 ? "15px" : ""}`,
            }}
            className={style.choiseBtn}
            onClick={() => displayTypeHandler(3)}
          >
            Seriale
          </button>
        </li>
      </ul>
      <div className={style.listBox}>
        {displayType === 1 &&
          props.films.map((item, i) => (
            <Link
              href={`/${item.__typename === "Films" ? "films" : "series"}/${
                item.title
              }`}
              style={{ width: "100%" }}
            >
              <motion.div
                className={style.listItem}
                key={item.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ delay: 0.25 }}
              >
                <div
                  className={style.image}
                  style={{
                    backgroundImage: `url("/film_miniatures/${item.miniature}")`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className={style.details}>
                  <h1>{item.title}</h1>
                  <p className={style.place}>{i + 1}</p>
                  <p className={style.description}>{item.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        {displayType === 2 &&
          props.both.map((item, i) => (
            <Link
              href={`/${item.__typename === "Films" ? "films" : "series"}/${
                item.title
              }`}
              style={{ width: "100%" }}
            >
              <motion.div
                className={style.listItem}
                key={item.name}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ delay: 0.25 }}
              >
                <div
                  className={style.image}
                  style={{
                    backgroundImage: `url("/film_miniatures/${item.miniature}")`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className={style.details}>
                  <h1>{item.title}</h1>
                  <p className={style.place}>{i + 1}</p>
                  <p className={style.description}>{item.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        {displayType === 3 &&
          props.series.map((item, i) => (
            <Link
              href={`/${item.__typename === "Films" ? "films" : "series"}/${
                item.title
              }`}
              style={{ width: "100%" }}
            >
              <motion.div
                className={style.listItem}
                key={item.name}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ delay: 0.25 }}
              >
                <div
                  className={style.image}
                  style={{
                    backgroundImage: `url("/film_miniatures/${item.miniature}")`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className={style.details}>
                  <h1>{item.title}</h1>
                  <p className={style.place}>{i + 1}</p>
                  <p className={style.description}>{item.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PopularSection;
