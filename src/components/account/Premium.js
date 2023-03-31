import Separator from "../UI/Separator";
import style from "./Premium.module.css";

const Premium = () => {
  return (
    <div className={style.container}>
      <div className={style.table}>
        <div className={style.tableTitle}>
          <p>Premium</p>
        </div>
        <div className={style.tableRow}>
          <Separator diraction={false} />
          <div className={style.tableData}>
            <p>Metoda płatności</p>
            <p>•••• •••• •••• 2283</p>
          </div>
          <Separator diraction={true} />
        </div>
        <div className={style.tableRow}>
          <Separator diraction={false} />
          <div className={style.tableData}>
            <p>Data rozliczenia</p>
            <p>3 kwietnia 2023</p>
          </div>
          <Separator diraction={true} />
        </div>
        <div className={style.tableRow}>
          <Separator diraction={false} />
          <div className={style.tableData}>
            <p>Plan</p>
            <p>Standard</p>
          </div>
          <Separator diraction={true} />
        </div>
        <div className={style.tableRow}>
          <Separator diraction={false} />
          <div className={style.tableData}>
            <p>Premium od</p>
            <p>2 lat</p>
          </div>
          <Separator diraction={true} />
        </div>
      </div>
    </div>
  );
};

export default Premium;
