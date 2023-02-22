import style from "./AccountDetails.module.css";
import Separator from "../UI/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import AccountMain from "./AccountMain";
import AccountFavorites from "./AccountFavorites";
import AccountPremium from "./AccountPremium";
import { useState } from "react";
import AccountSupport from "./AccountSupport";

const AccountDetails = () => {
  const [currentPage, setCurrentPage] = useState("account");

  const accountHandler = () => {
    setCurrentPage("account");
  };

  const favoritesHandler = () => {
    setCurrentPage("favorites");
  };

  const premiumHandler = () => {
    setCurrentPage("premium");
  };

  const supportHandler = () => {
    setCurrentPage("support");
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div className={style.separator}>
          <div className={style.lineLong}></div>
          <div className={style.arrowUp}></div>
          <div className={style.lineShort}></div>
        </div>
        <div className={style.separator}>
          <div className={style.lineLong}></div>
          <div className={style.arrowUp}></div>
          <div className={style.lineShort}></div>
        </div>
        <div className={style.separator}>
          <div className={style.lineLong}></div>
          <div className={style.arrowUp}></div>
          <div className={style.lineShort}></div>
        </div>
        <div className={style.addotionalLines}>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
          <div className={style.line}></div>
        </div>

        <button
          style={{
            backgroundColor: `${
              currentPage === "account" ? "#007acc" : "#252526"
            }`,
          }}
          className={style.optionBtn}
          onClick={accountHandler}
        >
          Konto
        </button>
        <button
          style={{
            backgroundColor: `${
              currentPage === "favorites" ? "#007acc" : "#252526"
            }`,
          }}
          className={style.optionBtn}
          onClick={favoritesHandler}
        >
          Ulubione
        </button>
        <button
          style={{
            backgroundColor: `${
              currentPage === "premium" ? "#007acc" : "#252526"
            }`,
          }}
          className={style.optionBtn}
          onClick={premiumHandler}
        >
          Premium
        </button>
        <button
          style={{
            backgroundColor: `${
              currentPage === "support" ? "#007acc" : "#252526"
            }`,
          }}
          className={style.optionBtn}
          onClick={supportHandler}
        >
          Wsparcie
        </button>
      </div>
      {currentPage === "account" && <AccountMain />}
      {currentPage === "favorites" && <AccountFavorites />}
      {currentPage === "premium" && <AccountPremium />}
      {currentPage === "support" && <AccountSupport />}
    </div>
  );
};

export default AccountDetails;
