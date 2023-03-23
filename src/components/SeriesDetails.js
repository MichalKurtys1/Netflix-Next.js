import Image from "next/image";
import img1 from "public/film_miniatures/irishman.jpg";
import img2 from "public/film_miniatures/irishman_vertical.jpg";
import style from "./SeriesDetails.module.css";
import "./FilmDetails.module.css";
import Separator from "./UI/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Player from "./Player";

const seasonsList = [
  {
    number: 1,
    episodes: [
      { number: 1, name: "Pilot", file: "xyz1.mp4" },
      { number: 2, name: "Fastest Man Alive", file: "xyz1.mp4" },
      { number: 3, name: "Things You Can't Outrun", file: "xyz1.mp4" },
      { number: 4, name: "Going Rogue", file: "xyz1.mp4" },
      { number: 1, name: "Plastique" },
      { number: 2, name: "The Flash Is Born", file: "xyz1.mp4" },
      { number: 3, name: "Power Outage", file: "xyz1.mp4" },
      { number: 4, name: "Flash vs. Arrow", file: "xyz1.mp4" },
    ],
  },
  {
    number: 2,
    episodes: [
      { number: 1, name: "Pilot", file: "xyz1.mp4" },
      { number: 2, name: "Fastest Man Alive", file: "xyz1.mp4" },
      { number: 3, name: "Things You Can't Outrun", file: "xyz1.mp4" },
      { number: 4, name: "Going Rogue", file: "xyz1.mp4" },
      { number: 1, name: "Plastique" },
      { number: 2, name: "The Flash Is Born", file: "xyz1.mp4" },
      { number: 3, name: "Power Outage", file: "xyz1.mp4" },
      { number: 4, name: "Flash vs. Arrow", file: "xyz1.mp4" },
    ],
  },
];

const SeriesDetails = () => {
  const ref = useRef(null);
  const [currentVid, setCurrentVid] = useState(null);
  let videoNumber;
  let videoTitle;

  const clickHandler = (number, title, file) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    videoNumber = number;
    videoTitle = title;
    setCurrentVid(file);
  };

  const scrollHandler = () => {
    window.scroll({ top: window.outerWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className={style.container}>
      <div className={style.imageWrapper}>
        <Image src={img1} alt="Logo" className={style.imageMain} />
        <div className={style.opacity}></div>
        <div className={style.imageBox}>
          <h1>Irlandczyk</h1>
          <button className={style.tpBtn} onClick={scrollHandler}>
            Przejdź od oglądania
          </button>
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
      <div className={style.seasonsBox}>
        {seasonsList.map((sezon) => (
          <div className={style.seasonBox} key={sezon.number}>
            <p className={style.seasonNumber}>{`Sezon ${sezon.number} `}</p>
            <div className={style.epizodesBox}>
              {sezon.episodes.map((epizode) => (
                <div
                  className={style.epizodeBox}
                  key={epizode.name}
                  onClick={() => {
                    clickHandler(epizode.number, epizode.name, epizode.file);
                  }}
                >
                  <p
                    className={style.epizodeNumber}
                  >{`Odcinek ${epizode.number}`}</p>
                  <p className={style.epizodeName}>{epizode.name}</p>
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className={style.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: 60 }} ref={ref}></div>
      {currentVid !== null && <Player />}
    </div>
  );
};

export default SeriesDetails;
