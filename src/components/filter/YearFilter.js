import style from "./YearFilter.module.css";
import DoubleRangeSlider from "../UI/DoubleRangeSlider";
import { filterActions } from "src/store";

const YearFilter = (props) => {
  return (
    <div className={style.container}>
      <h1>Rok Produkcji</h1>
      <div className={style.SliderBox}>
        <DoubleRangeSlider
          min={0}
          max={43}
          onChange={({ min, max }) => {
            props.setFrom(min);
            props.setTo(max);
          }}
        />
      </div>
    </div>
  );
};

export default YearFilter;
