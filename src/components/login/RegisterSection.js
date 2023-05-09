import Image from "next/image";
import Link from "next/link";
import Separator from "../UI/Separator";
import style from "./RegisterSection.module.css";
import image from "public/registerImg.jpg";
import imagePupUp from "public/BlackLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { gql, useMutation } from "@apollo/client";
import Spinner from "../UI/Spiner";

const REGISTER = gql`
  mutation Mutation($email: String!, $password: String!, $nick: String!) {
    createUser(email: $email, password: $password, nick: $nick) {
      nick
    }
  }
`;

const RegisterSection = (props) => {
  const [pupupIsOpen, setPopupIsOpen] = useState(false);

  const [isValidNick, setIsValidNick] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidPassRepeat, setIsValidPassRepeat] = useState(true);

  const [nickInputValue, setNickInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [passwordRepeatInputValue, setPasswordRepeatInputValue] = useState("");

  const [register, { data, loading, error }] = useMutation(REGISTER);

  const changeNickHandler = (event) => {
    setNickInputValue(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmailInputValue(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPasswordInputValue(event.target.value);
  };

  const changePasswordRepeatHandler = (event) => {
    setPasswordRepeatInputValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nickInputValue.length < 6) {
      setIsValidNick("za krotki");
      setNickInputValue("");
      return;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInputValue)
    ) {
      setIsValidEmail("not email");
      setIsValidNick(true);
      setEmailInputValue("");
      return;
    } else if (passwordInputValue.length < 8) {
      setIsValidPass(false);
      setIsValidEmail(true);
      setPasswordInputValue("");
      return;
    } else if (passwordInputValue !== passwordRepeatInputValue) {
      setIsValidPassRepeat(false);
      setIsValidPass(true);
      setPasswordRepeatInputValue("");
      return;
    }

    register({
      variables: {
        email: emailInputValue,
        password: passwordInputValue,
        nick: nickInputValue,
      },
    })
      .then((data) => {
        setIsValidNick(true);
        setIsValidEmail(true);
        setIsValidPass(true);
        setIsValidPassRepeat(true);

        setNickInputValue("");
        setEmailInputValue("");
        setPasswordInputValue("");
        setPasswordRepeatInputValue("");

        setPopupIsOpen(true);
        setTimeout(() => {
          setPopupIsOpen(false);
          props.loginHandler();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        setIsValidEmail(false);
        setIsValidNick(false);
        setIsValidPass(true);
        setIsValidPassRepeat(true);
        setNickInputValue("");
        setEmailInputValue("");
      });
  };

  const clickHandler = () => {
    props.loginHandler();
  };

  return (
    <div className={style.container}>
      {pupupIsOpen && (
        <div className={style.popUp}>
          <Image src={imagePupUp} alt="logo" className={style.popUpIcon} />
          <div className={style.iconBox}>
            <FontAwesomeIcon icon={faCheck} className={style.iconCheck} />
          </div>
          <p>Konto stworzone pomyślnie</p>
        </div>
      )}
      <div className={style.infoBox}>
        <Image
          src={image}
          alt="image of film posters"
          className={style.image}
        />
        <div className={style.opacity}></div>
        <div className={style.info}>
          <h1>Funkcje Premium</h1>
          <p>
            Wykup konto premium w promocyjnej cenie, żeby korzystać z wielu
            dodatkowych funkcji jak i odtwarzacza premium
          </p>
        </div>
      </div>
      <div className={style.inputBox}>
        {loading && (
          <div className={style.spinnerBox}>
            <div className={style.spinner}>
              <Spinner />
            </div>
          </div>
        )}
        <div className={style.welcomeBox}>
          <h1>Witaj w FilmInc</h1>
          <p>
            Zarejestruj się żeby odblokować dodatkowe funkcje. Hasło powninno
            zawierać przyajmniej 8 znaków.
          </p>
          <Separator diraction={false} />
        </div>
        <form className={style.loginForm} onSubmit={submitHandler}>
          <div className={style.input}>
            <input
              type="text"
              placeholder="Wpisz pseudonim"
              value={nickInputValue}
              onChange={changeNickHandler}
            />
            {isValidNick === "za krotki" && (
              <div className={style.errorBox}>Podany nick jest za krótki.</div>
            )}
            {!isValidNick && (
              <div className={style.errorBox}>
                Podany nick lub email jest już zajęty.
              </div>
            )}
            <div className={style.iconBox}>
              <FontAwesomeIcon icon={faUser} className={style.icon} />
            </div>
          </div>
          <div className={style.input}>
            <input
              type="text"
              placeholder="Wpisz e-mail"
              value={emailInputValue}
              onChange={changeEmailHandler}
            />
            {!isValidEmail && (
              <div className={style.errorBox}>
                Podany nick lub email jest już użyty.
              </div>
            )}
            {isValidEmail === "not email" && (
              <div className={style.errorBox}>
                Nie jest to adres email. Podaj poprawny adres.
              </div>
            )}
            <div className={style.iconBox}>
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
            </div>
          </div>
          <div className={style.input}>
            <input
              type="password"
              placeholder="Wpisz hasło"
              value={passwordInputValue}
              onChange={changePasswordHandler}
            />
            {!isValidPass && (
              <div className={style.errorBox}>
                Podane hasło jest zbyt krótkie. Podaj dłuższe hasło.
              </div>
            )}
            <div className={style.iconBox}>
              <FontAwesomeIcon icon={faLock} className={style.icon} />
            </div>
          </div>
          <div className={style.input}>
            <input
              type="password"
              placeholder="Powtórz hasło"
              value={passwordRepeatInputValue}
              onChange={changePasswordRepeatHandler}
            />
            {!isValidPassRepeat && (
              <div className={style.errorBox}>
                Hasło nie zostało powtórzone poprawnie.
              </div>
            )}
            <div className={style.iconBox}>
              <FontAwesomeIcon icon={faLock} className={style.icon} />
            </div>
          </div>
          <input type="submit" value="Zarejestruj się" />
        </form>
        <div className={style.links}>
          <div className={style.link} onClick={clickHandler}>
            Zaloguj się
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
