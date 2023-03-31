import Separator from "../UI/Separator";
import style from "./Contact.module.css";
import Image from "next/image";
import Link from "next/link";
import image from "public/loginPageImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faLockOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index";
import { useRouter } from "next/router";

const Contact = () => {
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
      <div className={style.numberBox}>
        <h1>Skontaktuj się z nami</h1>
        <Separator diraction={false} />
        <div className={style.wrapper}>
          <div className={style.leftBox}>
            <p>Wsparcie</p>
            <p>Kadry</p>
            <p>Marketing</p>
          </div>
          <div className={style.rightBox}>
            <p>677 845 122</p>
            <p>745 331 512</p>
            <p>910 450 223</p>
          </div>
        </div>
      </div>
      <div className={style.inputContainer}>
        <div className={style.inputBox}>
          <div className={style.welcomeBox}>
            <h1>Napisz nam e-mail</h1>
            <p>A my postaramy się odpisać w ciągu jednego dnia.</p>
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
                placeholder="Adres e-mail"
                value={emailInputValue}
                onChange={changeEmailHandler}
              />
              <div className={style.iconBox}>
                <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              </div>
            </div>
            <div className={style.input}>
              <input
                type="text"
                placeholder="Tytuł"
                value={passwordInputValue}
                onChange={changePasswordHandler}
              />
              <div className={style.iconBox}>
                <FontAwesomeIcon icon={faUser} className={style.icon} />
              </div>
            </div>
            <div className={style.input}>
              <textarea placeholder="Treść..." />
            </div>
            <input type="submit" value="Wyślij" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
