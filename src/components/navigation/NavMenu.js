import img from "public/miniatures/img_avatar.png";
import Image from "next/image";
import style from "./NavMenu.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faHeadphonesAlt,
  faHeadphonesSimple,
  faHeadset,
  faSearch,
  faSignIn,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/index";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Separator from "../UI/Separator";

const loginHandler = () => {
  router.push("/sign-in");
};
const NavMenu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged);
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  //To rozwiązanie problemu z hydration
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);
  //---------

  const panelClickHandler = () => {
    if (searchIsOpen) {
      setSearchIsOpen(false);
    }
    if (panelIsOpen == false) {
      setPanelIsOpen(true);
    } else {
      setPanelIsOpen(false);
    }
  };
  const changeHandler = (event) => {
    setSearchInputValue(event.target.value);
  };

  const searchClickHandler = () => {
    if (searchIsOpen == true && searchInputValue !== "") {
      console.log("submit");
      setSearchInputValue("");
    }

    if (searchIsOpen == false) {
      if (panelIsOpen) {
        setPanelIsOpen(false);
      }
      setSearchIsOpen(true);
    } else {
      setSearchIsOpen(false);
    }
  };

  const logoutHandler = () => {
    dispatch(authActions.logOut());
    setIsLoggedIn(false);
    setPanelIsOpen(false);
  };

  return (
    <AnimatePresence>
      <div className={style.container}>
        <FontAwesomeIcon
          icon={faSearch}
          className={style.icon}
          onClick={searchClickHandler}
        />
        {isRendered && isLoggedIn && (
          <Image
            src={img}
            alt="Landscape picture"
            className={style.image}
            onClick={panelClickHandler}
          />
        )}
        {isRendered && !isLoggedIn && (
          <FontAwesomeIcon
            icon={faSignIn}
            className={style.icon}
            onClick={loginHandler}
          />
        )}
        {panelIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={style.panel}
          >
            <Link href={"/account"} className={style.link}>
              <FontAwesomeIcon icon={faUser} className={style.icon} />
              <motion.p
                initial={{ y: 0 }}
                whileHover={{ x: 8 }}
                transition={{ delay: 0.1 }}
              >
                Konto
              </motion.p>
            </Link>
            <Link href={"/favorites"} className={style.link}>
              <FontAwesomeIcon icon={faStar} className={style.icon} />
              <motion.p
                initial={{ y: 0 }}
                whileHover={{ x: 8 }}
                transition={{ delay: 0.1 }}
              >
                Ulubione
              </motion.p>
            </Link>
            <Link href={"/contact"} className={style.link}>
              <FontAwesomeIcon icon={faHeadset} className={style.icon} />
              <motion.p
                initial={{ y: 0 }}
                whileHover={{ x: 8 }}
                transition={{ delay: 0.1 }}
              >
                Wsparcie
              </motion.p>
            </Link>
            <div className={style.separator}>
              <Separator diraction={true} />
            </div>
            <motion.p
              whileHover={{ borderBottom: "2px solid white" }}
              transition={{ delay: 0.1 }}
              className={style.logout}
              onClick={logoutHandler}
            >
              Wyloguj się
            </motion.p>
          </motion.div>
        )}
        {searchIsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className={style.search}
          >
            <input
              type="search"
              placeholder="Wyszukaj..."
              onChange={changeHandler}
              value={searchInputValue}
            />
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default NavMenu;
