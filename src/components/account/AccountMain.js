import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import img from "public/miniatures/img_avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "../UI/Separator";
import style from "./AccountMain.module.css";
import Image from "next/image";

const AccountMain = () => {
  return (
    <div className={style.mainBox}>
      <div className={style.infoBox}>
        <Image src={img} alt="Landscape picture" className={style.image} />
        <div className={style.detailsBox}>
          <Separator diraction={false} />
          <div className={style.details}>
            <h1>Szczegóły konta</h1>
            <div className={style.wrapper}>
              <div className={style.leftBox}>
                <p>Nick</p>
                <p>Email</p>
                <p>Hasło</p>
              </div>
              <div className={style.rightBox}>
                <p>Komodor</p>
                <p>admin@admin.pl</p>
                <p>*******</p>
              </div>
            </div>
          </div>
          <Separator diraction={false} />
        </div>
      </div>
      <div className={style.premiumBox}>
        <p className={style.classic}>Premium</p>
        <p className={style.stateBtn}>Aktywne</p>
      </div>
      <div className={style.table}>
        <div className={style.tableTitle}>
          <p>Statystyki</p>
        </div>
        <div className={style.tableRow}>
          <Separator diraction={false} />
          <div className={style.tableData}>
            <p>Ilość ulubionych</p>
            <p>122</p>
          </div>
          <Separator diraction={true} />
        </div>
        <div className={style.tableRow}>
          <Separator diraction={false} />
          <div className={style.tableData}>
            <p>Najczęstsze kategorie</p>
            <p>fantasy, sci-fi</p>
          </div>
          <Separator diraction={true} />
        </div>
        <div className={style.tableRow}>
          <Separator diraction={false} />
          <div className={style.tableData}>
            <p>Ilość komentarzy</p>
            <p>32</p>
          </div>
          <Separator diraction={true} />
        </div>
      </div>
    </div>
  );
};

export default AccountMain;
