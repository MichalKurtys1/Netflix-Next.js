import Image from "next/image";
import style from "./PopularSection.module.css";

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
import { useState } from "react";

const PopularListWorld = [
  { place: "1", name: "Jurasic World: Domination", img: img1 },
  { place: "2", name: "Avatar: Way Of Water", img: img2 },
  { place: "3", name: "Dracula: Untold", img: img3 },
  { place: "4", name: "Jurasic World: Domination", img: img4 },
  { place: "5", name: "Jurasic World: Domination", img: img5 },
  { place: "6", name: "Jurasic World: Domination", img: img6 },
  { place: "7", name: "Jurasic World: Domination", img: img7 },
  { place: "8", name: "Jurasic World: Domination", img: img8 },
  { place: "9", name: "Jurasic World: Domination", img: img9 },
  { place: "10", name: "Jurasic World: Domination", img: img10 },
];

const PopularListPoland = [
  { place: "1", name: "Dracula: Untold", img: img3 },
  { place: "2", name: "Avatar: Way Of Water", img: img2 },
  { place: "3", name: "Jurasic World: Domination", img: img1 },
  { place: "4", name: "Jurasic World: Domination", img: img4 },
  { place: "5", name: "Jurasic World: Domination", img: img5 },
  { place: "6", name: "Jurasic World: Domination", img: img6 },
  { place: "7", name: "Jurasic World: Domination", img: img7 },
  { place: "8", name: "Jurasic World: Domination", img: img8 },
  { place: "9", name: "Jurasic World: Domination", img: img9 },
  { place: "10", name: "Jurasic World: Domination", img: img10 },
];

const PopularSection = (props) => {
  const [isClickedWorld, setIsClickedWorld] = useState(true);
  const [isClickedPoland, setIsClickedPoland] = useState(false);

  const clickHandlerWorld = () => {
    if (isClickedPoland) {
      setIsClickedPoland(false);
      setIsClickedWorld(true);
    }
  };

  const clickHandlerPoland = () => {
    if (isClickedWorld) {
      setIsClickedPoland(true);
      setIsClickedWorld(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.listBox}>
        <ul className={style.menu}>
          <li>
            <button
              className={style.choiseBtn}
              onClick={clickHandlerWorld}
              style={
                isClickedWorld
                  ? { background: "#2d2d30" }
                  : { background: "#141414" }
              }
            >
              Na Świecie
            </button>
          </li>
          <li>
            <button
              className={style.choiseBtn}
              onClick={clickHandlerPoland}
              style={
                isClickedPoland
                  ? { background: "#2d2d30" }
                  : { background: "#141414" }
              }
            >
              W Polsce
            </button>
          </li>
        </ul>
        {isClickedWorld &&
          PopularListWorld.map((item) => (
            <div className={style.listItem} key={item.name}>
              <p>{item.place}</p>
              <h1>{item.name}</h1>
              <Image src={item.img} alt="" className={style.image} />
            </div>
          ))}
        {isClickedPoland &&
          PopularListPoland.map((item) => (
            <div className={style.listItem} key={item.name}>
              <p>{item.place}</p>
              <h1>{item.name}</h1>
              <Image src={item.img} alt="" className={style.image} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularSection;
