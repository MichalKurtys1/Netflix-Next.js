import Link from "next/link";
import style from "../components/Footer.module.css";
import Image from "next/image";
import img1 from "public/miniatures/facebook.png";
import img2 from "public/miniatures/messenger.png";
import img3 from "public/miniatures/instagram.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.contactBox}>
        <h1>Kontakt</h1>
        <div className={style.buttons}>
          <button className={style.contactBtn} type="button">
            Zadzwoń do nas
          </button>
          <button className={style.contactBtn} type="button">
            Napisz e-mail
          </button>
        </div>
      </div>
      <div className={style.column}>
        <Link href={"/account"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Konto</motion.p>
        </Link>
        <Link href={"/help"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Wsparcie</motion.p>
        </Link>
        <Link href={"/contact"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Premium</motion.p>
        </Link>
      </div>
      <div className={style.column}>
        <Link href={"/privacy policy"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Polityka prywatności</motion.p>
        </Link>
        <Link href={"/terms of use"} className={style.link}>
          <motion.p whileHover={{ scale: 1.1 }}>Warunki użytkowania</motion.p>
        </Link>
        <div className={style.row}>
          <Link href={"/facebook"} className={style.link}>
            <Image src={img1} alt="Logo" className={style.image} />
          </Link>
          <Link href={"/messenger"} className={style.link}>
            <Image src={img2} alt="Logo" className={style.image} />
          </Link>
          <Link href={"/instagram"} className={style.link}>
            <Image src={img3} alt="Logo" className={style.image} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
