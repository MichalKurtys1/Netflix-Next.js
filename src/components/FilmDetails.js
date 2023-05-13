import Image from "next/image";
import style from "./FilmDetails.module.css";
import Separator from "./UI/Separator";
import Player from "./Player";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import Spinner from "../components/UI/Spiner";
import { useRouter } from "next/router";
import Footer from "./Footer";

const GETFILM = gql`
  mutation Mutation($title: String!) {
    getFilm(title: $title) {
      id
      title
      description
      director
      scenario
      genre
      production
      premiere
      miniature
      content
      duration
      like
      dislike
    }
  }
`;

const FilmDetails = () => {
  const router = useRouter();

  const [getFilm, { data, loading, error }] = useMutation(GETFILM);

  useEffect(() => {
    const path = router.query;
    if (path.title !== undefined) {
      getFilm({
        variables: { title: path.title },
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [router.query]);

  const clickHandler = () => {
    window.scroll({ top: window.outerWidth * 0.78, behavior: "smooth" });
  };

  //To rozwiązanie problemu z hydration
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);
  //---------

  return (
    <div className={style.container}>
      {data !== undefined && (
        <div className={style.imageWrapper}>
          <Image
            src={"/film_miniatures/" + data.getFilm.miniature}
            layout="fill"
            objectFit="cover"
            alt="Logo"
            className={style.imageMain}
          />

          <div className={style.opacity}></div>
          <div className={style.imageBox}>
            <h1>{data.getFilm.title}</h1>
            <motion.button className={style.tpBtn} onClick={clickHandler}>
              Przejdź od oglądania
            </motion.button>
          </div>
          <div className={style.descriptionWrapper}>
            <div
              className={style.image}
              style={{
                backgroundImage: `url("/film_miniatures/${data.getFilm.miniature}")`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className={style.descriptionBox}>
              <p className={style.description}>{data.getFilm.description}</p>
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
                  <p>{data.getFilm.director}</p>
                  <p>{data.getFilm.scenario}</p>
                  <p>{data.getFilm.genre}</p>
                  <p>{data.getFilm.production}</p>
                  <p>{data.getFilm.premiere}</p>
                </div>
              </div>
              <div className={style.separator}>
                <Separator diraction={true} />
              </div>
            </div>
          </div>
        </div>
      )}
      {data !== undefined && isRendered && (
        <Player
          title={data.getFilm.title}
          like={data.getFilm.like}
          dislike={data.getFilm.dislike}
          miniature={data.getFilm.miniature}
          film={data.getFilm.content}
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

export default FilmDetails;
