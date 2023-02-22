import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "../UI/Separator";
import style from "./AccountMain.module.css";

const AccountMain = () => {
  return (
    <div className={style.mainBox}>
      <div className={style.upperBox}>
        <h1>Konto</h1>
        <button className={style.logout}>
          <FontAwesomeIcon icon={faPowerOff} className={style.icon} />
          <p>Wyloguj</p>
        </button>
      </div>
      <Separator diraction={false} />
      <div className={style.middleBox}>
        <div className={style.leftBox}>
          <p>Nick</p>
          <p>E-mail</p>
          <p>Hasło</p>
          <p>Premium</p>
        </div>
        <div className={style.rightBox}>
          <p>Komodor</p>
          <p>admin@admin.pl</p>
          <p>*******</p>
          <p>Tak</p>
        </div>
      </div>
      <Separator diraction={true} />
      <div className={style.bottomBox}>
        <p>Zmień adres e-mail</p>
        <p>Zmień hasło</p>
      </div>
    </div>
  );
};

export default AccountMain;
