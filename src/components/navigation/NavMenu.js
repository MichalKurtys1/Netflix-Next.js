import img from "public/miniatures/img_avatar.png";
import Image from "next/image";
import style from "./NavMenu.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/index";
import Link from "next/link";

const NavMenu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged);
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

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

  const loginHandler = () => {
    router.push("/sign-in");
  };

  const logoutHandler = () => {
    dispatch(authActions.logOut());
    setIsLoggedIn(false);
    setPanelIsOpen(false);
  };

  return (
    <div className={style.container}>
      <FontAwesomeIcon
        icon={faSearch}
        className={style.icon}
        onClick={searchClickHandler}
      />
      {isLoggedIn && (
        <Image
          src={img}
          alt="Landscape picture"
          className={style.image}
          onClick={panelClickHandler}
        />
      )}
      {!isLoggedIn && (
        <FontAwesomeIcon
          icon={faSignIn}
          className={style.icon}
          onClick={loginHandler}
        />
      )}

      {panelIsOpen && (
        <div className={style.panel}>
          <p>
            <Link href={"/favorites"} className={style.link}>
              Ulubione
            </Link>
          </p>
          <p></p>
          <p>Konto</p>
          <p>Kontakt</p>
          <p onClick={logoutHandler}>Wyloguj</p>
        </div>
      )}
      {searchIsOpen && (
        <div className={style.search}>
          <input
            type="search"
            placeholder="Wyszukaj..."
            onChange={changeHandler}
            value={searchInputValue}
          />
        </div>
      )}
    </div>
  );
};

export default NavMenu;
