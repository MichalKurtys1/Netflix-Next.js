import style from "./Slider.module.css";
import Image from "next/image";
import SliderItem from "./SliderItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const img1 = require("public/miniatures/akademia.jpg");
const img2 = require("public/miniatures/black_adam.jpg");
const img3 = require("public/miniatures/jurasic.jpg");
const img4 = require("public/miniatures/morbius.jpg");

const filmList = [
  { img: img1, name: "Akademia Dobra i Zła", details: "1h 30min" },
  { img: img2, name: "Black Adam", details: "1h 30min" },
  { img: img3, name: "Jurasic World: Domination", details: "2h 45min" },
  { img: img4, name: "Morbius", details: "2h 15min" },
  { img: img1, name: "Akademia Dobra i Zła", details: "1h 15min" },
  { img: img2, name: "Black Adam", details: "1h 30min" },
  { img: img3, name: "Jurasic World: Domination", details: "2h 15min" },
  { img: img4, name: "Morbius", details: "1h 30min" },
];

const seriesList = [
  { img: img1, name: "Akademia Dobra i Zła", details: "2 Sezony" },
  { img: img2, name: "Black Adam", details: "3 Sezony" },
  { img: img3, name: "Jurasic World: Domination", details: "1 Sezon" },
  { img: img4, name: "Morbius", details: "4 Sezony" },
  { img: img1, name: "Akademia Dobra i Zła", details: "7 Sezonów" },
  { img: img2, name: "Black Adam", details: "2 Sezony" },
  { img: img3, name: "Jurasic World: Domination", details: "5 Sezonów" },
  { img: img4, name: "Morbius", details: "5 Sezonów" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = (props) => {
  return (
    <div className={style.container}>
      <p className={style.category}>{props.category}</p>
      <Carousel
        className={style.slider}
        responsive={responsive}
        draggable={false}
      >
        {props.type === "films" &&
          filmList.map((item) => (
            <SliderItem
              type={props.type}
              key={item.name}
              img={item.img}
              name={item.name}
              details={item.details}
            />
          ))}
        {props.type === "series" &&
          seriesList.map((item) => (
            <SliderItem
              type={props.type}
              key={item.name}
              img={item.img}
              name={item.name}
              details={item.details}
            />
          ))}
      </Carousel>
    </div>
  );
};

export default Slider;
