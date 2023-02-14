import style from "../components/MainSection.module.css";
import img2 from "public/miniatures/wallpaperflare.com_wallpaper.jpg";
import Image from "next/image";
import Spinner from "./UI/Spiner";
import Slider from "./slider/Slider";

const MainSection = (props) => {
  return (
    <div className={style.container}>
      <div className={style.opacity}></div>
      <Image src={img2} alt="Logo" className={style.image} />
      <Slider category="Fantasy" type={props.type} />
      <Slider category="Sci-Fi" type={props.type} />
      <Slider category="Komedie" type={props.type} />
      <Slider category="Akcji" type={props.type} />
    </div>
  );
};

export default MainSection;
