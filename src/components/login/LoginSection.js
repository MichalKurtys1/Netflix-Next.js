import Image from "next/image";
import Link from "next/link";
import Separator from "../UI/Separator";
import style from "./LoginSection.module.css";
import image from "public/loginPageImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index";
import { useRouter } from "next/router";

const loginData = { email: "admin@admin.pl", password: "admin" };

const LoginSection = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isValid, setIsValid] = useState(true);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const changeEmailHandler = (event) => {
    setEmailInputValue(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPasswordInputValue(event.target.value);
  };

  const clickHandler = () => {
    props.registerHandler();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (emailInputValue !== loginData.email) {
      setIsValid(false);
      return;
    } else if (passwordInputValue !== loginData.password) {
      setIsValid(false);
      setEmailInputValue("");
      setPasswordInputValue("");
      return;
    } else {
      setIsValid(true);
      dispatch(authActions.logIn("01020304050607"));
      router.push("/films");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.inputBox}>
        <div className={style.welcomeBox}>
          <h1>Witaj z powrotem w FilmInc</h1>
          <p>Proszę zaloguj się żeby odblokować dodatkowe funkcję.</p>
          <Separator diraction={false} />
        </div>
        {!isValid && (
          <div className={style.errorBox}>
            Niepoprawny e-mail lub hasło. Proszę spróbuj ponownie.
          </div>
        )}
        <form className={style.loginForm} onSubmit={submitHandler}>
          <div className={style.input}>
            <input
              type="text"
              placeholder="Wpisz e-mail"
              value={emailInputValue}
              onChange={changeEmailHandler}
            />
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
            <div className={style.iconBox}>
              <FontAwesomeIcon icon={faLock} className={style.icon} />
            </div>
          </div>
          <input type="submit" value="Zaloguj" />
        </form>
        <div className={style.links}>
          <Link href={"/forget-password"} className={style.link}>
            Zapomniałeś hasła?
          </Link>
          <div className={style.link} onClick={clickHandler}>
            Stwórz konto
          </div>
        </div>
      </div>
      <div className={style.infoBox}>
        <Image
          src={image}
          alt="image of film posters"
          className={style.image}
        />
        <div className={style.opacity}></div>
        <div className={style.info}>
          <h1>Więcej niż tylko filmy</h1>
          <p>
            Nasza strona daje dostęp do ogromnej bazy filmów i seriali z całego
            świata. Już teraz możesz oglądać, szukać, oceniać i wiele więcej.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
