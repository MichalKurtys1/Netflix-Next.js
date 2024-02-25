import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import style from "./CommentItem.module.css";
import userIcon from "public/ProfileIcon.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gql, useMutation } from "@apollo/client";
import { useSelector } from "react-redux";

const SETRESPONSE = gql`
  mutation Mutation($addResponseId: Int!, $nick: String!, $content: String!) {
    addResponse(id: $addResponseId, nick: $nick, content: $content) {
      id
      nick
      content
      createdAt
      commentId
    }
  }
`;

const CommentItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [replyIsClicked, setReplyIsClicked] = useState(false);
  const [replyInputOpen, setReplyInputOpen] = useState(false);
  const [relpyAmount, setReplyAmount] = useState();
  const [inputValue, setInputValue] = useState();
  const nick = useSelector((state) => state.auth.nick);
  const [setResponse, { data, loading, error }] = useMutation(SETRESPONSE);
  const [responses, setResponses] = useState(props.comment.responses);

  useEffect(() => {
    if (!props.comment.responses) {
      setReplyAmount(0);
      setResponses([]);
      return;
    }
    if (props.comment.responses !== null) {
      setReplyAmount(props.comment.responses.length);
    }
  }, [props.comment.responses]);

  const replyInputHandler = () => {
    if (replyInputOpen) {
      setReplyInputOpen(false);
    } else {
      setReplyInputOpen(true);
      setReplyIsClicked(true);
    }
  };

  const replyHandler = () => {
    if (replyIsClicked) {
      setReplyIsClicked(false);
    } else {
      setReplyIsClicked(true);
    }
  };

  const likeHandler = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      //Temporary
      likesList.like++;

      setIsLiked(true);
      setIsDisliked(false);
    }
  };

  const dislikeHandler = () => {
    if (isDisliked) {
      setIsDisliked(false);
    } else {
      //Temporary
      likesList.dislike++;

      setIsDisliked(true);
      setIsLiked(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setReplyInputOpen(false);
    setResponse({
      variables: {
        addResponseId: +props.comment.id,
        nick: nick,
        content: inputValue,
      },
    })
      .then((data) => {
        responses.push(data.data.addResponse);
        setReplyAmount(relpyAmount + 1);
      })
      .catch((err) => {
        console.log(err);
      });
    setInputValue("");
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className={style.commentContainer} key={props.comment.createdAt}>
        <Image src={userIcon} alt="userIcon" className={style.profileIcon} />
        <div className={style.upperBox}>
          <p className={style.nick}>{props.comment.user.nick}</p>
          <p className={style.date}>{props.comment.createdAt.split(" ")[0]}</p>
        </div>
        <p className={style.commentText}>{props.comment.content}</p>
        <div className={style.optionPanel}>
          <div className={style.leftBox} onClick={replyInputHandler}>
            <p>Odpowiedz</p>
            <FontAwesomeIcon icon={faShare} className={style.shareIcon} />
          </div>
          <div className={style.rightBox}>
            <div className={style.thumbPanel}>
              <div className={style.thumbBox}>
                {isLiked && (
                  <AiFillLike onClick={likeHandler} className={style.icon} />
                )}
                {!isLiked && (
                  <AiOutlineLike onClick={likeHandler} className={style.icon} />
                )}
                <p>{props.comment.like}</p>
              </div>
              <div className={style.thumbBox}>
                {isDisliked && (
                  <AiFillDislike
                    onClick={dislikeHandler}
                    className={style.icon}
                  />
                )}
                {!isDisliked && (
                  <AiOutlineDislike
                    onClick={dislikeHandler}
                    className={style.icon}
                  />
                )}
                <p>{props.comment.dislike}</p>
              </div>
            </div>
            <div className={style.commentReplay}>
              <AiOutlineMessage
                className={style.replayIcon}
                onClick={replyHandler}
              />
              <p>{relpyAmount}</p>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {replyInputOpen && (
          <motion.div
            className={style.replyInput}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
          >
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Napisz odpowiedź"
                value={inputValue}
                onChange={changeHandler}
              />
              <button type="submit">
                <AiOutlineSend className={style.replyIcon} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={style.replyBox}>
        <AnimatePresence>
          {replyIsClicked &&
            responses !== undefined &&
            responses !== null &&
            responses.map((item) => (
              <motion.div
                key={item.createdAt}
                className={style.reply}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
              >
                <Image
                  src={userIcon}
                  alt="userIcon"
                  className={style.replyIcon}
                />
                <div className={style.replyUpperBox}>
                  <p className={style.replyNick}>{item.nick}</p>
                  <p className={style.replyDate}>{item.createdAt}</p>
                </div>
                <p className={style.replyText}>{item.content}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CommentItem;
