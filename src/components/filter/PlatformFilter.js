import style from "./PlatformFilter.module.css";
import PlatformItem from "./PlatformItem";

const platforms = [
  { name: "Netflix" },
  { name: "HBO Max" },
  { name: "Amazon Prime" },
  { name: "Disney Plus" },
  { name: "Apple TV" },
  { name: "CDA Premium" },
  { name: "Canal+ Online" },
  { name: "Player" },
  { name: "Hulu" },
];

const PlatformFilter = (props) => {
  return (
    <div className={style.container}>
      <h1>Platforma Streamingowa</h1>
      <div className={style.itemBox}>
        {platforms.map((item) => (
          <PlatformItem
            key={item.name}
            name={item.name}
            setPlatforms={props.setPlatforms}
          />
        ))}
      </div>
    </div>
  );
};

export default PlatformFilter;
