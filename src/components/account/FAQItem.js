import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import style from "./FAQItem.module.css";

const FAQItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.titleBox}>
        <p>{props.title}</p>
        {!isOpen && (
          <FontAwesomeIcon
            icon={faPlus}
            className={style.icon}
            onClick={clickHandler}
          />
        )}

        {isOpen && (
          <FontAwesomeIcon
            icon={faMinus}
            className={style.icon}
            onClick={clickHandler}
          />
        )}
      </div>

      {isOpen && (
        <div className={style.descBox}>
          <p>{props.text}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
