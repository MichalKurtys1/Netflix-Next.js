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

import { gql, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";

const ADDCOMMENT = gql`
  mutation Mutation($title: String!, $nick: String!, $content: String!) {
    addComment(title: $title, nick: $nick, content: $content) {
      id
      user {
        nick
      }
      content
      createdAt
      like
      dislike
      responses {
        id
        nick
        content
        createdAt
        commentId
      }
    }
  }
`;

const CommentSection = (props) => {
  const commentInput = useRef();
  const [inputValue, setInputValue] = useState();
  const [addComment, { data, loading, error }] = useMutation(ADDCOMMENT);
  const nick = useSelector((state) => state.auth.nick);
  const [comments, setComments] = useState(props.comments);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (commentInput.current.value.length > 0) {
      addComment({
        variables: {
          title: props.title,
          nick: nick,
          content: inputValue,
        },
      })
        .then((data) => {
          comments.getComments.push(data.data.addComment);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setInputValue("");
  };

  return (
    <div className={style.container}>
      <form className={style.inputBox} onSubmit={submitHandler}>
        <Image
          src={userIcon}
          alt="userIcon"
          className={style.profileIconInput}
        />
        <input
          ref={commentInput}
          type="text"
          placeholder="Dodaj komentarz"
          value={inputValue}
          onChange={changeHandler}
        />
        <button type="submit">
          <AiOutlineSend className={style.sendIcon} />
        </button>
      </form>
      <div className={style.outputBox}>
        {comments !== undefined &&
          comments.getComments.map((comment) => (
            <div key={comment.text}>
              <CommentItem comment={comment} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentSection;
