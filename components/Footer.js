import Link from "next/link";
import style from "../components/Footer.module.css";
import Image from "next/image";
import img1 from "../public/facebook.png";
import img2 from "../public/messenger.png";
import img3 from "../public/instagram.png";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.column}>
        <Link href={"/help"} className={style.link}>
          <p>Pomoc</p>
        </Link>
        <Link href={"/contact"} className={style.link}>
          <p>Kontakt</p>
        </Link>
        <Link href={"/profile"} className={style.link}>
          <p>Konto</p>
        </Link>
      </div>
      <div className={style.column}>
        <Link href={"/privacy policy"} className={style.link}>
          <p>Polityka prywatności</p>
        </Link>
        <Link href={"/terms of use"} className={style.link}>
          <p>Warunki użytkowania</p>
        </Link>
      </div>
      <div className={style.column}>
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
  );
};

export default Footer;
