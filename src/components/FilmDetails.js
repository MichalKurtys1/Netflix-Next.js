import Image from "next/image";
import img1 from "public/miniatures/black_adam.jpg";
import img2 from "public/miniatures/czerwonaNota.jpeg";
import style from "./FilmDetails.module.css";
import Separator from "./UI/Separator";
import Player from "./Player";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FilmDetails = () => {
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
            <div className={style.separator}>
              <Separator diraction={true} />
            </div>
            <div className={style.details}>
              <p className={style.title}>Scenariusz</p>
              <p className={style.description}>Adam Sztykiel, Rory Haines</p>
            </div>
            <div className={style.separator}>
              <Separator diraction={false} />
            </div>
            <div className={style.details}>
              <p className={style.title}>Gatunek</p>
              <p className={style.description}>Akcja, Sci-Fi</p>
            </div>
            <div className={style.separator}>
              <Separator diraction={true} />
            </div>
            <div className={style.details}>
              <p className={style.title}>Produkcja</p>
              <p className={style.description}>USA</p>
            </div>
            <div className={style.separator}>
              <Separator diraction={false} />
            </div>
            <div className={style.details}>
              <p className={style.title}>Premiera</p>
              <p className={style.description}>21 października 2022</p>
            </div>
          </div>
        </div>
      </div>
      <Player />
    </div>
  );
};

export default FilmDetails;
