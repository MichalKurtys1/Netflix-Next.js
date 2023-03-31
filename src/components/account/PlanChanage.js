import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import style from "./PlanChange.module.css";
import img1 from "public/speedoLow.png";
import img2 from "public/speedo.jpg";
import img3 from "public/speedoHigh.png";
import Link from "next/link";

const PlanChanage = (props) => {
  return (
    <div className={style.container}>
      <FontAwesomeIcon
        icon={faTimes}
        className={style.cancelIcon}
        onClick={props.cancelPopup}
      />
      <div className={style.planWrapper}>
        <div className={style.planBox}>
          <h1>Podstawowy</h1>
          <Image src={img1} alt="Basic" className={style.image} />
          <div className={style.benefitsBox}>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faCheck} className={style.icon} />
              <p>Rozdzielczość 480p</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faTimes} className={style.iconX} />
              <p>Brak reklam</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faTimes} className={style.iconX} />
              <p>Możliwości pobierania</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faTimes} className={style.iconX} />
              <p>Dodawanie do ulubionych</p>
            </div>
            <Link href={"/account/addPlan?type=Basic"} className={style.link}>
              <button className={style.basic}>Za darmo</button>
            </Link>
          </div>
        </div>
        <div className={style.planBox}>
          <h1>Standardowy</h1>
          <Image src={img2} alt="Standard" className={style.image} />
          <div className={style.benefitsBox}>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faCheck} className={style.icon} />
              <p>Rozdzielczość 480p</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faCheck} className={style.icon} />
              <p>Brak reklam</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faCheck} className={style.icon} />
              <p>Dodawanie do ulubionych</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faTimes} className={style.iconX} />
              <p>Możliwości pobierania</p>
            </div>
          </div>
          <Link href={"/account/addPlan?type=Standard"} className={style.link}>
            <button className={style.standard}>15zł</button>
          </Link>
        </div>
        <div className={style.planBox}>
          <h1>Premium</h1>
          <Image src={img3} alt="Premium" className={style.image} />
          <div className={style.benefitsBox}>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faCheck} className={style.icon} />
              <p>Rozdzielczość 480p</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faCheck} className={style.icon} />
              <p>Brak reklam</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faCheck} className={style.icon} />
              <p>Dodawanie do ulubionych</p>
            </div>
            <div className={style.benefit}>
              <FontAwesomeIcon icon={faCheck} className={style.icon} />
              <p>Możliwości pobierania</p>
            </div>
          </div>
          <Link href={"/account/addPlan?type=Premium"} className={style.link}>
            <button className={style.premium}>30zł</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanChanage;
