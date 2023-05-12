import Image from "next/image";
import style from "./PopularSection.module.css";

import img1 from "public/miniatures/jurasicWorld.jpg";
import img2 from "public/miniatures/avatar.jpeg";
import img3 from "public/miniatures/dracula.jpg";
import img4 from "public/miniatures/jurasicWorld.jpg";
import img5 from "public/miniatures/jurasicWorld.jpg";
import img6 from "public/miniatures/jurasicWorld.jpg";
import img7 from "public/miniatures/jurasicWorld.jpg";
import img8 from "public/miniatures/jurasicWorld.jpg";
import img9 from "public/miniatures/jurasicWorld.jpg";
import img10 from "public/miniatures/jurasicWorld.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const PopularListWorld = [
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img1,
    place: "1",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Avatar: Way Of Water",
    img: img2,
    place: "2",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Dracula: Untold",
    img: img3,
    place: "3",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img4,
    place: "4",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img5,
    place: "5",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img6,
    place: "6",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img7,
    place: "7",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img8,
    place: "8",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img9,
    place: "9",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img10,
    place: "10",
  },
];
const PopularListPoland = [
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img5,
    place: "1",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Avatar: Way Of Water",
    img: img3,
    place: "2",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Dracula: Untold",
    img: img2,
    place: "3",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img1,
    place: "4",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img5,
    place: "5",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img6,
    place: "6",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img7,
    place: "7",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img8,
    place: "8",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img9,
    place: "9",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img10,
    place: "10",
  },
];
const dumyData = [
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img2,
    place: "1",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Avatar: Way Of Water",
    img: img3,
    place: "2",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Dracula: Untold",
    img: img1,
    place: "3",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img1,
    place: "4",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img5,
    place: "5",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img6,
    place: "6",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img7,
    place: "7",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img8,
    place: "8",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img9,
    place: "9",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img10,
    place: "10",
  },
];

const PopularSection = (props) => {
  const [displayType, setDisplayType] = useState(1);

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
            Wybór publiczności
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
          ))}
        {displayType === 2 &&
          props.both.map((item, i) => (
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
          ))}
        {displayType === 3 &&
          props.series.map((item, i) => (
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
          ))}
      </div>
    </div>
  );
};

export default PopularSection;
