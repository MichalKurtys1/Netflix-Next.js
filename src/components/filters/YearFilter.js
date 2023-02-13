import style from "./YearFilter.module.css";
import DoubleRangeSlider from "../UI/DoubleRangeSlider";
import { useDispatch } from "react-redux";
import { filterActions } from "src/store";

const YearFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <h1>Rok Produkcji</h1>
      <div className={style.SliderBox}>
        <DoubleRangeSlider
          min={0}
          max={43}
          onChange={({ min, max }) => {
            dispatch(
              filterActions.changeYear({ from: min + 1980, to: max + 1980 })
            );
          }}
        />
      </div>
    </div>
  );
};

export default YearFilter;
