import { useEffect } from "react";
import style from "./FilterResults.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaAsc,
  faSortAlphaDesc,
  faSortAlphaDownAlt,
  faSortAmountAsc,
  faSortAmountDesc,
  faSortAmountDown,
} from "@fortawesome/free-solid-svg-icons";
import DropDownList from "../UI/DropDownList";

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

import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "src/store";

const dummyData = [
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img5,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Avatar: Way Of Water",
    img: img3,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Dracula: Untold",
    img: img2,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img1,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img5,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img6,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img7,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img8,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img9,
    date: "2010",
  },
  {
    description:
      "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
    name: "Jurasic World: Domination",
    img: img10,
    date: "2010",
  },
];

const types = [
  { name: "W kinach" },
  { name: "Już wktótce" },
  { name: "Filmy" },
  { name: "Seriale" },
];

const FilterResults = (props) => {
  const dispatch = useDispatch();
  const [typeInputValue, setTypeInputValue] = useState("");
  const [sortType, setSortType] = useState(null);

  const changeTypeHandler = (category) => {
    setTypeInputValue(category);
    dispatch(filterActions.changeType(category));
  };

  const sortHandler = (type) => {
    setSortType(type);
  };

  return (
    <div className={style.container}>
      {props.isEnabled && (
        <div className={style.menu}>
          <div className={style.iconsBox}>
            <div className={style.iconBox}>
              <FontAwesomeIcon
                icon={faSortAlphaAsc}
                className={`${style.icon} ${
                  sortType === 1 ? style.active : ""
                }`}
                onClick={() => sortHandler(1)}
              />
              <FontAwesomeIcon
                icon={faSortAlphaDownAlt}
                className={`${style.icon} ${
                  sortType === 2 ? style.active : ""
                }`}
                onClick={() => sortHandler(2)}
              />
            </div>
            <div className={style.iconBox}>
              <FontAwesomeIcon
                icon={faSortAmountDown}
                className={`${style.icon} ${
                  sortType === 3 ? style.active : ""
                }`}
                onClick={() => sortHandler(3)}
              />
              <FontAwesomeIcon
                icon={faSortAmountDesc}
                className={`${style.icon} ${
                  sortType === 4 ? style.active : ""
                }`}
                onClick={() => sortHandler(4)}
              />
            </div>
          </div>
          <div className={style.dropDownBox}>
            <DropDownList
              title="Wybierz typ"
              categories={types}
              onCategoryChange={changeTypeHandler}
            />
          </div>
        </div>
      )}
      <div className={style.listBox}>
        {props.isEnabled &&
          dummyData.map((item) => (
            <div className={style.listItem} key={item.name}>
              <Image src={item.img} alt="" className={style.image} />
              <div className={style.details}>
                <h1>{item.name}</h1>
                <p className={style.place}>{item.date}</p>
                <p className={style.description}>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilterResults;
