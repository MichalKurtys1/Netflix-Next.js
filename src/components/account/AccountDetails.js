import style from "./AccountDetails.module.css";
import Separator from "../UI/Separator";
import AccountMain from "./AccountMain";
import { useEffect, useState } from "react";
import img from "public/static/celebration.jpg";
import logo from "public/BlackLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCancel,
  faCrow,
  faCrown,
  faHeadset,
  faStar,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import EmailChange from "./emailChange";
import PasswordChange from "./PasswordChange";
import FilterResults from "../filter/FilterResults";
import IconChange from "./IconChange";
import Premium from "./Premium";
import { AnimatePresence, motion } from "framer-motion";
import PaymentChange from "./PaymentChange";
import Contact from "./Contact";
import Link from "next/link";
import FAQ from "./FAQ";
import PlanChanage from "./PlanChanage";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";

const AccountDetails = () => {
  const { push, query } = useRouter();
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [planPopupIsOpen, setPlanPopupIsOpen] = useState(false);

  const pageHandler = (pageNumber) => {
    if (pageNumber === 1) {
      push({ query: { ...query, current: "accountDetails" } });
    }
    if (pageNumber === 2) {
      push({ query: { ...query, current: "emailChange" } });
    }
    if (pageNumber === 3) {
      push({ query: { ...query, current: "passwordChange" } });
    }
    if (pageNumber === 4) {
      push({ query: { ...query, current: "iconChange" } });
    }
    if (pageNumber === 5) {
      push({ query: { ...query, current: "favorites" } });
    }
    if (pageNumber === 6) {
      push({ query: { ...query, current: "premium" } });
    }
    if (pageNumber === 7) {
      setPlanPopupIsOpen(true);
    }
    if (pageNumber === 8) {
      push({ query: { ...query, current: "paymentChange" } });
    }
    if (pageNumber === 9) {
      setPopupIsOpen(true);
    }
    if (pageNumber === 10) {
      push({ query: { ...query, current: "contact" } });
    }
    if (pageNumber === 11) {
      push({ query: { ...query, current: "faq" } });
    }
  };

  useEffect(() => {
    if (query.createdPlan !== undefined) {
      setTimeout(() => {
        push({ query: { current: "accountDetails" } });
      }, 1500);
    }
  }, [query.createdPlan]);

  const cancelHandler = () => {
    setPopupIsOpen(false);
  };

  const cancelPopupHandler = () => {
    setPlanPopupIsOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={style.nav}>
        <div className={style.separator}>
          <Separator diraction={false} />
        </div>
        <div className={style.mainOption} onClick={() => pageHandler(1)}>
          <FontAwesomeIcon icon={faUser} className={style.icon} />
          <p>Konto</p>
        </div>
        <div className={style.additionalOption}>
          <div className={style.option} onClick={() => pageHandler(2)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <p>Zmień adres e-mail</p>
          </div>
          <div className={style.option} onClick={() => pageHandler(3)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <p>Zmień hasło</p>
          </div>
          <div className={style.option} onClick={() => pageHandler(4)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <p>Zmień ikonę</p>
          </div>
        </div>
        <div className={style.mainOption} onClick={() => pageHandler(5)}>
          <FontAwesomeIcon icon={faStar} className={style.icon} />
          <p>Ulubione</p>
        </div>
        <div className={style.mainOption} onClick={() => pageHandler(6)}>
          <FontAwesomeIcon icon={faCrown} className={style.icon} />
          <p>Premium</p>
        </div>
        <div className={style.additionalOption}>
          <div className={style.option} onClick={() => pageHandler(7)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <p>Dostępne plany</p>
          </div>
          <div className={style.option} onClick={() => pageHandler(8)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <p>Zmiana metody płatności</p>
          </div>
          <div className={style.option} onClick={() => pageHandler(9)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <p>Anulowanie członkostwa</p>
          </div>
        </div>
        <div className={style.mainOption}>
          <FontAwesomeIcon icon={faHeadset} className={style.icon} />
          <p>Wsparcie</p>
        </div>
        <div className={style.additionalOption}>
          <div className={style.option} onClick={() => pageHandler(10)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <p>Kontakt</p>
          </div>
          <div className={style.option} onClick={() => pageHandler(11)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <p>FAQ</p>
          </div>
          <div className={style.option}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <Link href={"/privacyPolicy"}>
              <p>Polityka prywatności</p>
            </Link>
          </div>
          <div className={style.option}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style.iconAdditional}
            />
            <Link href={"/termsOfUse"}>
              <p>Warunki użytkowania</p>
            </Link>
          </div>
        </div>
      </div>

      {query.current === "accountDetails" && <AccountMain />}
      {query.current === "emailChange" && <EmailChange />}
      {query.current === "passwordChange" && <PasswordChange />}
      {query.current === "iconChange" && <IconChange />}
      {query.current === "favorites" && (
        <div className={style.favoritesBox}>
          <FilterResults isEnabled={true} />
        </div>
      )}
      {query.current === "premium" && <Premium />}
      {query.current === "paymentChange" && <PaymentChange />}
      {query.current === "contact" && <Contact />}
      {query.current === "faq" && <FAQ />}
      <AnimatePresence>
        {planPopupIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className={style.wrapper}></div>
            <PlanChanage cancelPopup={cancelPopupHandler} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {popupIsOpen && (
          <motion.div
            className={style.popup}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
          >
            <h1>Jesteś pewien że chcesz usunąć konto premium?</h1>
            <p>
              Po usunięciu konta premium stracisz dostęp do wszystkich funkcji
              premium takich jak dodawanie do ulubionych.
            </p>
            <button
              className={style.keep}
              onClick={() => setPopupIsOpen(false)}
            >
              Zachowaj
            </button>
            <button className={style.cancel} onClick={cancelHandler}>
              <FontAwesomeIcon icon={faTimes} className={style.iconCancel} />
              <p>Usuń</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {query.createdPlan === "true" && (
        <div className={style.planInfo}>
          <Image src={img} alt="Fireworks" className={style.popupImage} />
          <Image src={logo} alt="Logo" className={style.popupImageLogo} />
          <h1>Dziękujemy za wykupienie konta premium</h1>
        </div>
      )}
    </div>
  );
};

export default AccountDetails;
