import style from "./Navigation.module.css";
import logo from "public/miniatures/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Navigation = () => {
  return (
    <div className={style.container}>
      <Link href={"/films"} className={style.linkLogo}>
        <Image src={logo} alt="Logo" className={style.image} />
      </Link>

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
        <NavMenu />
      </div>
    </div>
  );
};

export default Navigation;
