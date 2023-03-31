import style from "./EmailChange.module.css";
import Image from "next/image";
import Link from "next/link";
import Separator from "../UI/Separator";
import image from "public/loginPageImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index";
import { useRouter } from "next/router";
const EmailChange = () => {
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
          <h1>Zmiana adresu e-mail</h1>
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
              placeholder="Wpisz nowy e-mail"
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
          <div className={style.input}>
            <input
              type="password"
              placeholder="Powtórz hasło"
              value={passwordInputValue}
              onChange={changePasswordHandler}
            />
            <div className={style.iconBox}>
              <FontAwesomeIcon icon={faLock} className={style.icon} />
            </div>
          </div>
          <input type="submit" value="Zmień e-mail" />
        </form>
      </div>
    </div>
  );
};

export default EmailChange;
