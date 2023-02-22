import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "../UI/Separator";
import style from "./AccountMain.module.css";

const AccountPremium = () => {
  return (
    <div className={style.mainBox}>
      <div className={style.upperBox}>
        <h1>Premium</h1>
      </div>
      <Separator diraction={false} />
      <div className={style.middleBox}>
        <div className={style.leftBox}>
          <p>Premium</p>
          <p>Plan</p>
          <p>Metoda płatności</p>
          <p>Numer karty</p>
        </div>
        <div className={style.rightBox}>
          <p>Tak</p>
          <p>Standard</p>
          <p>Karta</p>
          <p>**** **** **** 2283</p>
        </div>
      </div>
      <Separator diraction={true} />
      <div className={style.bottomBox}>
        <p>Anuluj członkostwo</p>
        <p>Zmień plan</p>
        <p>Zmień metodę płatności</p>
      </div>
    </div>
  );
};

export default AccountPremium;
