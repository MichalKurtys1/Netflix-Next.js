import Image from "next/image";
import style from "./SeriesDetails.module.css";
import "./FilmDetails.module.css";
import Separator from "./UI/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Player from "./Player";
import { gql, useMutation } from "@apollo/client";
import Spinner from "../components/UI/Spiner";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Footer from "./Footer";

const GETSERIES = gql`
  mutation Mutation($title: String!) {
    getSerie(title: $title) {
      id
      title
      description
      director
      scenario
      genre
      production
      premiere
      miniature
      duration
      like
      dislike
      seasons {
        title
        epizodes {
          title
          content
        }
      }
    }
  }
`;

const SeriesDetails = () => {
  const ref = useRef(null);
  const router = useRouter();
  const [currentVid, setCurrentVid] = useState(null);
  const [getSeries, { data, loading, error }] = useMutation(GETSERIES);

  let videoNumber;
  let videoTitle;

  useEffect(() => {
    const path = router.query;
    if (path.title !== undefined) {
      getSeries({
        variables: { title: path.title },
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [router.query]);

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
      {data !== undefined && (
        <div className={style.imageWrapper}>
          <Image
            src={"/film_miniatures/" + data.getSerie.miniature}
            layout="fill"
            objectFit="cover"
            alt="Logo"
            className={style.imageMain}
          />

          <div className={style.opacity}></div>
          <div className={style.imageBox}>
            <h1>{data.getSerie.title}</h1>
            <motion.button className={style.tpBtn} onClick={clickHandler}>
              Przejdź od oglądania
            </motion.button>
          </div>
          <div className={style.descriptionWrapper}>
            <div
              className={style.image}
              style={{
                backgroundImage: `url("/film_miniatures/${data.getSerie.miniature}")`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className={style.descriptionBox}>
              <p className={style.description}>{data.getSerie.description}</p>
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
                  <p>{data.getSerie.director}</p>
                  <p>{data.getSerie.scenario}</p>
                  <p>{data.getSerie.genre}</p>
                  <p>{data.getSerie.production}</p>
                  <p>{data.getSerie.premiere}</p>
                </div>
              </div>
              <div className={style.separator}>
                <Separator diraction={true} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={style.seasonsBox}>
        {data !== undefined &&
          data.getSerie.seasons.map((sezon) => (
            <div className={style.seasonBox} key={sezon.title}>
              <p className={style.seasonNumber}>{sezon.title}</p>
              <div className={style.epizodesBox}>
                {sezon.epizodes.map((epizode) => (
                  <div
                    className={style.epizodeBox}
                    key={epizode.title}
                    onClick={() => {
                      clickHandler(
                        epizode.number,
                        epizode.title,
                        epizode.content
                      );
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className={style.icon}
                    />
                    <p className={style.epizodeNumber}>{epizode.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div style={{ height: 60 }} ref={ref}></div>

      {data !== undefined && currentVid !== null && (
        <Player
          title={data.getSerie.title}
          like={data.getSerie.like}
          dislike={data.getSerie.dislike}
          miniature={data.getSerie.miniature}
          film={currentVid}
        />
      )}
      {(data === undefined || loading) && (
        <div className={style.spinner}>
          <Spinner />
        </div>
      )}
      {data !== undefined && <Footer />}
    </div>
  );
};

export default SeriesDetails;
