import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./ProfileIcon.module.css";

const ProfileIcon = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  if (props.currentlySelected !== props.name && isSelected !== false) {
    setIsSelected(false);
  }

  const changeHandler = () => {
    props.changeHandler(props.name);
    setIsSelected(true);
  };

  return (
    <div className={style.iconBox}>
      {isSelected && <FontAwesomeIcon icon={faCheck} className={style.icon} />}
      <Image
        style={{ border: `${isSelected ? "3px solid green" : ""}` }}
        src={props.icon}
        alt="Icon"
        className={style.image}
        onClick={() => changeHandler()}
      />
    </div>
  );
};

export default ProfileIcon;
