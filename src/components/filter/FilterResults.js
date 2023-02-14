import { useEffect } from "react";
import style from "./FilterResults.module.css";

import img1 from "public/miniatures/jurasicWorld.jpg";
import img2 from "public/miniatures/avatar.jpeg";
import img3 from "public/miniatures/dracula.jpg";
import img4 from "public/miniatures/jurasicWorld.jpg";
import img5 from "public/miniatures/jurasicWorld.jpg";
import img6 from "public/miniatures/jurasicWorld.jpg";
import img7 from "public/miniatures/jurasicWorld.jpg";
import img8 from "public/miniatures/jurasicWorld.jpg";
import img9 from "public/miniatures/jurasicWorld.jpg";
import img10 from "public/miniatures/jurasicWorld.jpg";
import Image from "next/image";

const dummyData = [
  { name: "Jurasic World: Domination", img: img1 },
  { name: "Avatar: Way Of Water", img: img2 },
  { name: "Dracula: Untold", img: img3 },
  { name: "Jurasic World: Domination", img: img4 },
  { name: "Jurasic World: Domination", img: img5 },
  { name: "Jurasic World: Domination", img: img6 },
  { name: "Jurasic World: Domination", img: img7 },
  { name: "Jurasic World: Domination", img: img8 },
  { name: "Jurasic World: Domination", img: img9 },
  { name: "Jurasic World: Domination", img: img10 },
];

const FilterResults = (props) => {
  useEffect(() => {
    if (props.isEnabled) {
    }
  }, [props.isEnabled]);

  return (
    <div className={style.container}>
      {props.isEnabled &&
        dummyData.map((item) => (
          <div className={style.listItem} key={item.name}>
            <Image src={item.img} alt="" className={style.image} />
            <h1>{item.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default FilterResults;
