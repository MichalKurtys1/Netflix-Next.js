import style from "./Player.module.css";
import "./Player.module.css";
import video from "public/videos/sample_960x540.mp4";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShare } from "@fortawesome/free-solid-svg-icons";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import CommentSection from "./commentSection";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { gql, useMutation } from "@apollo/client";

const GETCOMMENTS = gql`
  mutation Mutation($title: String!) {
    getComments(title: $title) {
      responses {
        nick
        content
        createdAt
      }
      like
      dislike
      createdAt
      content
      id
      user {
        nick
      }
    }
  }
`;

const MODIFYLIKES = gql`
  mutation Mutation($modifyLikesId: Int!, $value: Int!, $type: String!) {
    modifyLikes(id: $modifyLikesId, value: $value, type: $type)
  }
`;

const MODIFYDISLIKES = gql`
  mutation Mutation($modifyDislikesId: Int!, $value: Int!, $type: String!) {
    modifyDislikes(id: $modifyDislikesId, value: $value, type: $type)
  }
`;

const Player = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [iconFavorites, setIconFavorites] = useState(star);
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [likes, setLikes] = useState(props.like);
  const [dislikes, setDislikes] = useState(props.dislike);
  const [getComments, { data, loading, error }] = useMutation(GETCOMMENTS);
  const [modifyLikes, { data1, loading1, error1 }] = useMutation(MODIFYLIKES);
  const [modifyDislikes, { data2, loading2, error2 }] =
    useMutation(MODIFYDISLIKES);

  useEffect(() => {
    getComments({
      variables: { title: props.title },
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  let width = window.innerWidth;

  const likeHandler = () => {
    if (isLiked) {
      let like = likes;
      setLikes(like - 1);
      setIsLiked(false);
      modifyLikes({
        variables: {
          modifyLikesId: +props.id,
          value: like - 1,
          type: props.type,
        },
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let like = likes;
      setLikes(like + 1);
      setIsLiked(true);
      modifyLikes({
        variables: {
          modifyLikesId: +props.id,
          value: like + 1,
          type: props.type,
        },
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      if (isDisliked) {
        let dislike = dislikes;
        setDislikes(dislike - 1);
        setIsDisliked(false);
        modifyDislikes({
          variables: {
            modifyDislikesId: +props.id,
            value: dislike - 1,
            type: props.type,
          },
        })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const dislikeHandler = () => {
    if (isDisliked) {
      let dislike = dislikes;
      setDislikes(dislike - 1);
      setIsDisliked(false);
    } else {
      let dislike = dislikes;
      setDislikes(dislike + 1);
      setIsDisliked(true);
      if (isLiked) {
        let like = likes;
        setLikes(like - 1);
        setIsLiked(false);
      }
    }
  };

  const favoritesHandler = () => {
    if (iconFavorites == star) {
      setIconFavorites(faStar);
      setAddedToFavorites(true);
      setTimeout(() => {
        setAddedToFavorites(false);
      }, 2000);
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

  const shareHandler = () => {
    if (shareOpen) {
      setShareOpen(false);
    } else {
      setShareOpen(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.videoBox}>
        <div className={style.vidBox}>
          <ReactPlayer
            url={video}
            playing={true}
            controls={true}
            muted={false}
            light={"/miniatures/black_bgc.jpg"}
            className={style.video}
            width={"80vw"}
            height={"80vh"}
          />
        </div>
        <div className={style.optionPanel}>
          <div className={style.leftBox}>
            <h1>{props.title}</h1>
            <div className={style.thumbPanel}>
              <div className={style.thumbBox}>
                {isLiked && (
                  <AiFillLike onClick={likeHandler} className={style.icon} />
                )}
                {!isLiked && (
                  <AiOutlineLike onClick={likeHandler} className={style.icon} />
                )}
                <p>{likes}</p>
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
                <p>{dislikes}</p>
              </div>
            </div>
          </div>
          <div className={style.rightBox}>
            <div className={style.shareBox}>
              <FontAwesomeIcon
                icon={faShare}
                className={style.shareIcon}
                onClick={shareHandler}
              />
            </div>
            <FontAwesomeIcon
              icon={iconFavorites}
              className={style.iconRight}
              onClick={favoritesHandler}
            />
            <AiOutlineComment
              className={style.iconRight}
              onClick={commentHandler}
            />
          </div>
        </div>
        <AnimatePresence>
          {shareOpen && (
            <motion.div
              className={style.sharePopup}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.15 }}
            >
              <p>http://localhost:3000/films/filmId</p>
              <button onClick={shareHandler}>Kopiuj</button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {addedToFavorites && (
            <motion.div
              className={style.addPopup}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.25 }}
            >
              <FontAwesomeIcon icon={faStar} className={style.addPopupIcon} />
              <p>Dodano no ulubionych</p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {data !== undefined && isOpen && (
            <motion.div
              className={style.commentSection}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.25 }}
            >
              <CommentSection comments={data} title={props.title} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Player;
