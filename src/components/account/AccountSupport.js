import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Separator from "../UI/Separator";
import style from "./AccountMain.module.css";
import HelpCenter from "./HelpCenter";

const AccountSupport = () => {
  return (
    <>
      <div className={style.mainBox}>
        <div className={style.upperBox}>
          <h1>Wsparcie</h1>
        </div>
        <Separator diraction={false} />
        <div className={style.middleBox}>
          <div className={style.rightBox}>
            <h1>Przydatne Linki</h1>
            <p>Polityka prywatności</p>
            <p>Warunki użytkowania</p>
          </div>
        </div>
        <Separator diraction={true} />
        <div className={style.contactBox}>
          <h1>Kontakt</h1>
          <div className={style.buttons}>
            <button>Zadzwoń do nas</button>
            <button>Napisz e-mail</button>
          </div>
        </div>
        <Separator diraction={false} />
      </div>
      <HelpCenter />
    </>
  );
};

export default AccountSupport;
