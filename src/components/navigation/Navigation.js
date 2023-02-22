import style from "./Navigation.module.css";
import logo from "public/miniatures/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <div className={style.container}>
      <Link href={"/films"} className={style.linkLogo}>
        <Image src={logo} alt="Logo" className={style.image} />
      </Link>

      <div className={style.links}>
        <Link href={"/films"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Filmy</motion.p>
        </Link>
        <Link href={"/series"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Seriale</motion.p>
        </Link>
        <Link href={"/popular"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Popularne</motion.p>
        </Link>
        <Link href={"/categories"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Kategorie</motion.p>
        </Link>
        <NavMenu />
      </div>
    </div>
  );
};

export default Navigation;
