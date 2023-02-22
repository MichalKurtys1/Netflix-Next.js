import style from "../components/MainSection.module.css";
import img2 from "public/miniatures/wallpaperflare.com_wallpaper.jpg";
import Image from "next/image";
import Spinner from "./UI/Spiner";
import Slider from "./slider/Slider";
import { motion } from "framer-motion";

const MainSection = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exist={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
      className={style.container}
    >
      <div className={style.opacity}></div>
      <Image src={img2} alt="Logo" className={style.image} />
      <Slider category="Fantasy" type={props.type} />
      <Slider category="Sci-Fi" type={props.type} />
      <Slider category="Komedie" type={props.type} />
      <Slider category="Akcji" type={props.type} />
    </motion.div>
  );
};

export default MainSection;
