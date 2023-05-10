import style from "./Slider.module.css";
import Image from "next/image";
import SliderItem from "./SliderItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
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
          props.list.map((item) => (
            <SliderItem
              type={props.type}
              key={item.id}
              id={item.id}
              title={item.title}
              duration={item.duration}
              miniature={item.miniature}
            />
          ))}
        {props.type === "series" &&
          props.list.map((item) => (
            <SliderItem type={props.type} key={item.id} details={item} />
          ))}
      </Carousel>
    </div>
  );
};

export default Slider;
