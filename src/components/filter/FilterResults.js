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

import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "src/store";
import { motion } from "framer-motion";
import Link from "next/link";

const types = [
  { name: "Wszystko" },
  { name: "W kinach" },
  { name: "Już wkrótce" },
  { name: "Filmy" },
  { name: "Seriale" },
];

const FilterResults = (props) => {
  const [type, setType] = useState();
  const [sort, setSort] = useState(0);
  console.log(props);
  const sortHandler = (type, sortX = sort) => {
    setSort(sortX);
    setType(type);
    props.setSort(sortX, type);
  };

  return (
    <div className={style.container}>
      {props.isEnabled && (
        <div className={style.menu}>
          <div className={style.iconsBox}>
            <div className={style.iconBox}>
              <FontAwesomeIcon
                icon={faSortAlphaAsc}
                className={`${style.icon} ${sort === 1 ? style.active : ""}`}
                onClick={() => sortHandler(type, 1)}
              />
              <FontAwesomeIcon
                icon={faSortAlphaDownAlt}
                className={`${style.icon} ${sort === 2 ? style.active : ""}`}
                onClick={() => sortHandler(type, 2)}
              />
            </div>
            <div className={style.iconBox}>
              <FontAwesomeIcon
                icon={faSortAmountDown}
                className={`${style.icon} ${sort === 3 ? style.active : ""}`}
                onClick={() => sortHandler(type, 3)}
              />
              <FontAwesomeIcon
                icon={faSortAmountDesc}
                className={`${style.icon} ${sort === 4 ? style.active : ""}`}
                onClick={() => sortHandler(type, 4)}
              />
            </div>
          </div>
          <div className={style.dropDownBox}>
            <DropDownList
              title="Wybierz typ"
              categories={types}
              onCategoryChange={sortHandler}
            />
          </div>
        </div>
      )}
      <motion.div
        className={style.listBox}
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 15 }}
        transition={{ delay: 0.25 }}
      >
        {props.isEnabled &&
          props.data.map((item) => (
            <Link
              href={`/${item.__typename === "Films" ? "films" : "series"}/${
                item.title
              }`}
            >
              <div className={style.listItem} key={item.name}>
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
                  <p className={style.place}>
                    {item.commingSoon !== undefined && item.commingSoon}
                    {item.commingSoon === undefined && item.premiere}
                  </p>
                  <p className={style.description}>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
      </motion.div>
    </div>
  );
};

export default FilterResults;
