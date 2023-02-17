import Image from "next/image";
import img1 from "public/miniatures/black_adam.jpg";
import img2 from "public/miniatures/czerwonaNota.jpeg";
import style from "./SeriesDetails.module.css";
import "./FilmDetails.module.css";
import video from "public/videos/sample_960x540.mp4";
import VideoPlayer from "react-video-js-player";
import Separator from "./UI/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
  const [currentVid, setCurrentVid] = useState(null);
  let videoNumber;
  let videoTitle;

  const ClickHandler = (number, title, file) => {
    videoNumber = number;
    videoTitle = title;
    setCurrentVid(file);
  };

  return (
    <div className={style.container}>
      <div className={style.descriptionContainer}>
        <Image src={img1} alt="Logo" className={style.image} />
        <div className={style.discriptionBox}>
          <h1>Black Adam</h1>
          <div className={style.detailsDescription}>
            <p className={style.descriptionTitle}>Opis</p>
            <p className={style.descriptionText}>
              Po blisko pięciu tysiącleciach obdarzony boskimi mocami Black Adam
              zostaje uwolniony ze swojego ziemskiego grobowca.
            </p>
          </div>
          <div className={style.detailsDescription}>
            <div className={style.details}>
              <p className={style.title}>Reżyser</p>
              <p className={style.description}>Jaume Collet-Serra</p>
            </div>
            <Separator diraction={true} />
            <div className={style.details}>
              <p className={style.title}>Scenariusz</p>
              <p className={style.description}>Adam Sztykiel, Rory Haines</p>
            </div>
            <Separator diraction={false} />
            <div className={style.details}>
              <p className={style.title}>Gatunek</p>
              <p className={style.description}>Akcja, Sci-Fi</p>
            </div>
            <Separator diraction={true} />
            <div className={style.details}>
              <p className={style.title}>Produkcja</p>
              <p className={style.description}>USA</p>
            </div>
            <Separator diraction={false} />
            <div className={style.details}>
              <p className={style.title}>Premiera</p>
              <p className={style.description}>21 października 2022</p>
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
                  key={epizode.number}
                  onClick={() => {
                    ClickHandler(epizode.number, epizode.name, epizode.file);
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
      {currentVid !== null && <Player />}
    </div>
  );
};

export default SeriesDetails;
