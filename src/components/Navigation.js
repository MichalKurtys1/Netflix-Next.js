import style from "../components/Navigation.module.css";
import logo from "public/miniatures/logo.png";
import Image from "next/image";
import Link from "next/link";
import UserIcon from "./UserIcon";

const Navigation = () => {
  return (
    <div className={style.container}>
      <Image src={logo} alt="Logo" className={style.image} />
      <div className={style.links}>
        <Link href={"/films"} className={style.link}>
          Filmy
        </Link>
        <Link href={"/series"} className={style.link}>
          Seriale
        </Link>
        <Link href={"/popular"} className={style.link}>
          Popularne
        </Link>
        <Link href={"/categories"} className={style.link}>
          Kategorie
        </Link>
        <UserIcon />
      </div>
    </div>
  );
};

export default Navigation;
