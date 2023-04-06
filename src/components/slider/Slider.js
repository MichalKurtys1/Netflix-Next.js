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
              key={item.name}
              img={item.img}
              name={item.name}
              details={item.details}
            />
          ))}
        {props.type === "series" &&
          props.list.map((item) => (
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
