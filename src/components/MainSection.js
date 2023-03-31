import style from "../components/MainSection.module.css";
import Image from "next/image";
import Spinner from "./UI/Spiner";
import Slider from "./slider/Slider";
import { motion } from "framer-motion";
import { useState } from "react";

const img1 = require("public/film_miniatures/wakanda_forever.jpg");
const img2 = require("public/film_miniatures/lotr3.jpg");
const img3 = require("public/film_miniatures/irishman.jpg");
const img4 = require("public/film_miniatures/ant_man_2.jpg");
const img5 = require("public/film_miniatures/red_notice.jpg");
const img6 = require("public/film_miniatures/avangers_endgame.jpg");
const img7 = require("public/film_miniatures/batman_vs_superman.jpg");
const img8 = require("public/film_miniatures/maen_in_black_1.jpg");
const img9 = require("public/film_miniatures/intouchables.jpg");
const img10 = require("public/film_miniatures/avatar_2.jpg");

const popularList = [
  {
    img: img2,
    name: "Władca Pierścieni: Powrót Króla",
    details:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    number: 1,
  },
  {
    img: img3,
    name: "Irlandczyk",
    details:
      "Płatny zabójca Frank Sheeran powraca do sekretów, których strzegł jako lojalny członek rodziny przestępczej Bufalino.",
    number: 2,
  },
  {
    img: img1,
    name: "Czarna Pantera: Wakanda w moim sercu",
    details:
      "Po śmierci króla T'Challi królowa Ramonda, Shuri, M'Baku, Okoye i Dora Milaje stają w obronie swojego ludu przed interwencją światowych mocarstw. Otwierając nowy rozdział swojej historii, mieszkańcy Wakandy łączą siły z War Dog Nakią i Everettem Rossem, by wytyczyć nowy kierunek dla swojego królestwa.",
    number: 3,
  },
  {
    img: img4,
    name: "Ant-Man i Osa",
    details:
      "Ant-Man i Osa próbują odkryć tajemnice przeszłości doktora Hanka Pyma i Hope van Dyne.",
    number: 4,
  },
  {
    img: img5,
    name: "Czerwona Nota",
    details:
      "Agent Interpolu namierza najbardziej poszukiwanego złodzieja dzieł sztuki.",
    number: 5,
  },
];

const filmList1 = [
  { img: img1, name: "Czarna Pantera 2", details: "1h 30min" },
  { img: img2, name: "Władca Pierścieni: Powrót Króla", details: "2h 45min" },
  { img: img3, name: "Irlandczyk", details: "1h 15min" },
  { img: img4, name: "Ant-Man i Osa", details: "1h 45min" },
  { img: img5, name: "Czerwona Nota", details: "1h 30min" },
  { img: img6, name: "Avangers: Endgame", details: "2h 5min" },
  { img: img7, name: "Batman Vs Superman", details: "1h 55min" },
  { img: img8, name: "Faceci w czerni", details: "1h 30min" },
  { img: img9, name: "Nietykalni", details: "1h 50min" },
  { img: img10, name: "Avatar: Way Of Water", details: "1h 45min" },
];

const filmList2 = [
  { img: img6, name: "Avangers: Endgame", details: "2h 5min" },
  { img: img7, name: "Batman Vs Superman", details: "1h 55min" },
  { img: img8, name: "Faceci w czerni", details: "1h 30min" },
  { img: img9, name: "Nietykalni", details: "1h 50min" },
  { img: img10, name: "Avatar: Way Of Water", details: "1h 45min" },
  { img: img1, name: "Czarna Pantera 2", details: "1h 30min" },
  { img: img2, name: "Władca Pierścieni: Powrót Króla", details: "2h 45min" },
  { img: img3, name: "Irlandczyk", details: "1h 15min" },
  { img: img4, name: "Ant-Man i Osa", details: "1h 45min" },
  { img: img5, name: "Czerwona Nota", details: "1h 30min" },
];

const filmList3 = [
  { img: img9, name: "Nietykalni", details: "1h 50min" },
  { img: img10, name: "Avatar: Way Of Water", details: "1h 45min" },
  { img: img1, name: "Czarna Pantera 2", details: "1h 30min" },
  { img: img2, name: "Władca Pierścieni: Powrót Króla", details: "2h 45min" },
  { img: img6, name: "Avangers: Endgame", details: "2h 5min" },
  { img: img7, name: "Batman Vs Superman", details: "1h 55min" },
  { img: img8, name: "Faceci w czerni", details: "1h 30min" },
  { img: img8, name: "Faceci w czerni", details: "1h 30min" },
  { img: img9, name: "Nietykalni", details: "1h 50min" },
  { img: img10, name: "Avatar: Way Of Water", details: "1h 45min" },
];

const filmList4 = [
  { img: img1, name: "Czarna Pantera 2", details: "1h 30min" },
  { img: img2, name: "Władca Pierścieni: Powrót Króla", details: "2h 45min" },
  { img: img6, name: "Avangers: Endgame", details: "2h 5min" },
  { img: img7, name: "Batman Vs Superman", details: "1h 55min" },
  { img: img8, name: "Faceci w czerni", details: "1h 30min" },
  { img: img8, name: "Faceci w czerni", details: "1h 30min" },
  { img: img9, name: "Nietykalni", details: "1h 50min" },
  { img: img10, name: "Avatar: Way Of Water", details: "1h 45min" },
  { img: img1, name: "Czarna Pantera 2", details: "1h 30min" },
];

const MainSection = (props) => {
  const [isClicked, setIsClicked] = useState(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
      className={style.container}
    >
      <div className={style.imageWrapper}>
        {popularList.map((item) => (
          <div
            key={item.name}
            className={`${style.imageBox} ${
              isClicked === item.number ? style.selected : ""
            }`}
            onClick={() => setIsClicked(item.number)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: `${isClicked === item.number ? 0.8 : 0}` }}
              className={style.imageOpacity}
            >
              <h1
                style={{
                  display: `${isClicked === item.number ? "block" : "none"}`,
                }}
              >
                {item.name}
              </h1>
              <p
                style={{
                  display: `${isClicked === item.number ? "block" : "none"}`,
                }}
              >
                {item.details}
              </p>
            </motion.div>
            <Image src={item.img} alt="Logo" className={style.image} />
          </div>
        ))}
      </div>
      <div className={style.sliderWrapper}>
        <Slider category="Fantasy" type={props.type} list={filmList1} />
        <Slider category="Sci-Fi" type={props.type} list={filmList2} />
        <Slider category="Komedie" type={props.type} list={filmList3} />
        <Slider category="Akcji" type={props.type} list={filmList4} />
        <Slider category="Horrory" type={props.type} list={filmList1} />
      </div>
    </motion.div>
  );
};

export default MainSection;
