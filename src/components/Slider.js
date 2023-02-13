import style from "./Slider.module.css";
import Image from "next/image";
import SliderItem from "../components/SliderItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "public/miniatures/akademia.jpg";
import img2 from "public/miniatures/black_adam.jpg";
import img3 from "public/miniatures/jurasic.jpg";
import img4 from "public/miniatures/morbius.jpg";

const filmList = [
  { img: img1, name: "Akademia Dobra i Zła" },
  { img: img2, name: "Black Adam" },
  { img: img3, name: "Jurasic World: Domination" },
  { img: img4, name: "Morbius" },
  { img: img1, name: "Akademia Dobra i Zła" },
  { img: img2, name: "Black Adam" },
  { img: img3, name: "Jurasic World: Domination" },
  { img: img4, name: "Morbius" },
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
        {filmList.map((item) => (
          <SliderItem key={item.name} img={item.img} name={item.name} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
