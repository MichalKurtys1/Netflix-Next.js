import style from "./IconChange.module.css";
import img from "public/miniatures/img_avatar.png";
import ProfileIcon from "./ProfileIcon";
import { useEffect, useState } from "react";

const iconList = [
  {
    icons: [
      { icon: img, name: "1" },
      { icon: img, name: "2" },
      { icon: img, name: "3" },
      { icon: img, name: "4" },
      { icon: img, name: "5" },
    ],
  },
  {
    icons: [
      { icon: img, name: "6" },
      { icon: img, name: "7" },
      { icon: img, name: "8" },
      { icon: img, name: "9" },
      { icon: img, name: "10" },
    ],
  },
  {
    icons: [
      { icon: img, name: "11" },
      { icon: img, name: "12" },
      { icon: img, name: "13" },
      { icon: img, name: "14" },
      { icon: img, name: "15" },
    ],
  },
  {
    icons: [
      { icon: img, name: "16" },
      { icon: img, name: "17" },
      { icon: img, name: "18" },
      { icon: img, name: "19" },
      { icon: img, name: "20" },
    ],
  },
];

const IconChange = () => {
  const [currentlySelected, setCurrentlySelected] = useState(null);

  const changeHandler = (name) => {
    setCurrentlySelected(name);
  };

  const submitHandler = () => {
    if (currentlySelected !== null) {
      console.log("Zmiana zapisana");
      setCurrentlySelected(null);
    } else {
      console.log("error");
    }
  };

  return (
    <div className={style.container}>
      <h1>Zmiana ikony</h1>
      <div className={style.iconBox}>
        {iconList.map((icons) => (
          <div className={style.iconRow}>
            {icons.icons.map((icon) => (
              <ProfileIcon
                icon={icon.icon}
                name={icon.name}
                changeHandler={changeHandler}
                currentlySelected={currentlySelected}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={submitHandler}>Zapisz</button>
    </div>
  );
};

export default IconChange;
