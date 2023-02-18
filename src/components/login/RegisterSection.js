import Image from "next/image";
import Link from "next/link";
import Separator from "../UI/Separator";
import style from "./RegisterSection.module.css";
import image from "public/registerImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const loginData = { nick: "admin", email: "admin@admin.pl", password: "admin" };

const RegisterSection = (props) => {
  const [isValidNick, setIsValidNick] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPass, setIsValidPass] = useState(true);
  const [isValidPassRepeat, setIsValidPassRepeat] = useState(true);

  const [nickInputValue, setNickInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [passwordRepeatInputValue, setPasswordRepeatInputValue] = useState("");

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

    if (nickInputValue === loginData.nick) {
      setIsValidNick(false);
      setNickInputValue("");
      return;
    } else if (emailInputValue === loginData.email) {
      setIsValidEmail(false);
      setIsValidNick(true);
      setEmailInputValue("");
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
    setIsValidNick(true);
    setIsValidEmail(true);
    setIsValidPass(true);
    setIsValidPassRepeat(true);

    setNickInputValue("");
    setEmailInputValue("");
    setPasswordInputValue("");
    setPasswordRepeatInputValue("");
  };

  const clickHandler = () => {
    props.loginHandler();
  };

  return (
    <div className={style.container}>
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
            {!isValidNick && (
              <div className={style.errorBox}>
                Podany nick jest już zajęty Proszę spróbuj ponownie.
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
                Podany emial jest już użyty. Podaj inny adres e-mail.
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
          <input type="submit" value="Zaloguj" />
        </form>
        <div className={style.links}>
          <div className={style.link} onClick={clickHandler}>
            Zaloguj się
          </div>
          <Link href={"/forget-password"} className={style.link}>
            Zapomniałeś hasła?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
