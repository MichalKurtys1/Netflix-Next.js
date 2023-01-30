import Image from "next/image";
import img1 from "../public/black_adam.jpg";
import img2 from "../public/czerwonaNota.jpeg";
import style from "./FilmPlayer.module.css";
import "./FilmPlayer.module.css";
import video from "../public/sample_960x540.mp4";
import VideoPlayer from "react-video-js-player";
import Separator from "../components/UI/Separator";
const FilmPlayer = () => {
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
      <VideoPlayer src={video} className={style.video} />
    </div>
  );
};

export default FilmPlayer;
