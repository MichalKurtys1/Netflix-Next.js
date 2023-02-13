import style from "./Separator.module.css";

const Separator = (props) => {
  return (
    <>
      {props.diraction == false && (
        <div className={style.separator}>
          <div className={style.lineShort}></div>
          <div className={style.arrowDown}></div>
          <div className={style.lineLong}></div>
        </div>
      )}
      {props.diraction == true && (
        <div className={style.separator}>
          <div className={style.lineLong}></div>
          <div className={style.arrowUp}></div>
          <div className={style.lineShort}></div>
        </div>
      )}
    </>
  );
};

export default Separator;
