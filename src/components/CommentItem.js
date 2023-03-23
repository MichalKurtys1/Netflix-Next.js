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

const likesList = { name: "Irlandczyk", like: 120, dislike: 19 };

const CommentItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [replyIsClicked, setReplyIsClicked] = useState(false);
  const [replyInputOpen, setReplyInputOpen] = useState(false);
  const [relpyAmount, setReplyAmount] = useState();

  useEffect(() => {
    if (!props.comment.reply) {
      setReplyAmount(0);
      return;
    }
    if (props.comment.reply !== undefined) {
      setReplyAmount(props.comment.reply.length);
    }
  }, [props.comment.reply]);

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

  return (
    <>
      <div className={style.commentContainer} key={props.comment.nick}>
        <Image src={userIcon} alt="userIcon" className={style.profileIcon} />
        <div className={style.upperBox}>
          <p className={style.nick}>{props.comment.nick}</p>
          <p className={style.date}>{props.comment.date}</p>
        </div>
        <p className={style.commentText}>{props.comment.text}</p>
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
                <p>{likesList.like}</p>
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
                <p>{likesList.dislike}</p>
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
            <input type="text" placeholder="Napisz odpowiedź" />
            <button type="submit">
              <AiOutlineSend className={style.replyIcon} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={style.replyBox}>
        <AnimatePresence>
          {replyIsClicked &&
            relpyAmount !== 0 &&
            props.comment.reply.map((item) => (
              <motion.div
                key={item.nick}
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
                  <p className={style.replyDate}>{item.date}</p>
                </div>
                <p className={style.replyText}>{item.text}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CommentItem;
