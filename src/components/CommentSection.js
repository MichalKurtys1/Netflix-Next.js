import Image from "next/image";
import style from "./CommentSection.module.css";
import userIcon from "public/ProfileIcon.jpg";
import { useState } from "react";
import { useRef } from "react";
import {
  AiFillDislike,
  AiFillLike,
  AiFillMessage,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import CommentItem from "./CommentItem";

const commentList = [
  {
    nick: "ArturXXX",
    text: "Super serial polecam każdemu",
    date: "11.03.2023",
    reply: [
      {
        nick: "Jagódka",
        text: "Film nie był zły, da się obejrzeć, nawet można się pośmiać. Dobrze,że nie sugerowałem się komentarzami poprzedników. Można oglądać 7/10.",
        date: "11.03.2023",
      },
      { nick: "Łukasz", text: "Polecam", date: "11.03.2023" },
    ],
  },
  {
    nick: "Komodor",
    text: "Film nie był zły, da się obejrzeć, nawet można się pośmiać. Dobrze,że nie sugerowałem się komentarzami poprzedników. Można oglądać 7/10",
    date: "21.02.2023",
  },
  {
    nick: "Franek44",
    text: "Wspaniały, chyba najlepszy odcinek dotychczas",
    date: "07.11.2022",
  },
  {
    nick: "NoVqU",
    text: "Lekki i przyjemny. Nie udana kontynuacja wcześniejszej wersji. Można go zaliczyć do kina familijnrgo by go obejrzeć przy obiedzie z rodziną.",
    date: "29.10.2022",
    reply: [
      { nick: "Jagódka", text: "Super serial", date: "11.03.2023" },
      { nick: "Łukasz", text: "Polecam", date: "11.03.2023" },
    ],
  },
];

const CommentSection = () => {
  const commentInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (commentInput.current.value.length > 0) {
      // Wysłać do bazy i odświeżyć
    } else {
      // Wyświetlić error
    }
  };

  return (
    <div className={style.container}>
      <form className={style.inputBox} onSubmit={submitHandler}>
        <Image
          src={userIcon}
          alt="userIcon"
          className={style.profileIconInput}
        />
        <input ref={commentInput} type="text" placeholder="Dodaj komentarz" />
        <button type="submit">
          <AiOutlineSend className={style.sendIcon} />
        </button>
      </form>
      <div className={style.outputBox}>
        {commentList.map((comment) => (
          <div key={comment.text}>
            <CommentItem comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
