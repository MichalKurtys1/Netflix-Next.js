import style from "../components/FilmSection.module.css";
import img2 from "public/miniatures/wallpaperflare.com_wallpaper.jpg";
import Image from "next/image";
import Slider from "../components/Slider";
import Spinner from "./UI/Spiner";
import Footer from "./Footer";

const FilmSection = () => {
  return (
    <div className={style.container}>
      <div className={style.opacity}></div>
      <Image src={img2} alt="Logo" className={style.image} />
      <Slider category="Fantasy" />
      <Slider category="Sci-Fi" />
      <Slider category="Komedie" />
      <Slider category="Akcji" />
      <Footer />
    </div>
  );
};

export default FilmSection;
