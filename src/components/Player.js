import style from "./Player.module.css";
import "./Player.module.css";
import video from "public/videos/sample_960x540.mp4";
import VideoPlayer from "react-video-js-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsDown as dislike,
  faThumbsUp as like,
  faComment as commentIcon,
  faStar as star,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import CommentSection from "./commentSection";

const likesList = { name: "Black Adam", like: 120, dislike: 19 };

const Player = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [iconUp, setIconUp] = useState(like);
  const [iconDown, setIconDown] = useState(dislike);
  const [iconFavorites, setIconFavorites] = useState(star);

  const likeHandler = () => {
    if (isLiked) {
      setIsLiked(false);
      setIconUp(like);
    } else {
      //Temporary
      likesList.like++;

      setIsLiked(true);
      setIsDisliked(false);
      setIconDown(dislike);
      setIconUp(faThumbsUp);
    }
  };

  const dislikeHandler = () => {
    if (isDisliked) {
      setIsDisliked(false);
      setIconDown(dislike);
    } else {
      //Temporary
      likesList.dislike++;

      setIsDisliked(true);
      setIsLiked(false);
      setIconUp(like);
      setIconDown(faThumbsDown);
    }
  };

  const favoritesHandler = () => {
    if (iconFavorites == star) {
      setIconFavorites(faStar);
    } else {
      setIconFavorites(star);
    }
  };

  const commentHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.videoBox}>
        <VideoPlayer src={video} className={style.video} />
        <div className={style.optionPanel}>
          <div className={style.thumbPanel}>
            <FontAwesomeIcon
              icon={iconUp}
              className={style.icon}
              onClick={likeHandler}
            />
            <div className={style.likesValue}>
              <p>{likesList.like}</p>
            </div>
            <FontAwesomeIcon
              icon={iconDown}
              className={style.icon}
              onClick={dislikeHandler}
            />
            <div className={style.likesValue}>
              <p>{likesList.dislike}</p>
            </div>
          </div>
          <div className={style.rightBox}>
            <div className={style.favritesPanel}>
              <FontAwesomeIcon
                icon={iconFavorites}
                className={style.icon}
                onClick={favoritesHandler}
              />
            </div>
            <div className={style.commentsPanel} onClick={commentHandler}>
              <p>Zobacz komentarze</p>
              <FontAwesomeIcon icon={faComment} className={style.commentIcon} />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className={style.commentSection}>
            <CommentSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default Player;
