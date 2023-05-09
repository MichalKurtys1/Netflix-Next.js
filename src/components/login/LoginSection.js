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

import { gql, useMutation } from "@apollo/client";
import Spinner from "../UI/Spiner";

const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      expiresIn
    }
  }
`;

const LoginSection = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isValid, setIsValid] = useState(true);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [login, { data, loading, error }] = useMutation(LOGIN);

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

    login({
      variables: { email: emailInputValue, password: passwordInputValue },
    })
      .then((data) => {
        const date = new Date(Date.now()).getTime() + 3600000;
        const now = new Date(Date.now()).getTime();
        const time = date - now;
        setTimeout(() => {
          dispatch(authActions.logOut());
        }, time);

        dispatch(
          authActions.logIn({
            token: data.data.login.token,
            expiresIn: new Date(date).toJSON(),
          })
        );

        setIsValid(true);
        router.push("/films");
      })
      .catch((err) => {
        console.log(err);
        setIsValid(false);
        setEmailInputValue("");
        setPasswordInputValue("");
      });
  };

  return (
    <div className={style.container}>
      <div className={style.inputBox}>
        {loading && (
          <div className={style.spinnerBox}>
            <div className={style.spinner}>
              <Spinner />
            </div>
          </div>
        )}
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
