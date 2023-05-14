import style from "./CategoryFilter.module.css";
import CategoryItem from "./CategoryItem";

const categories = [
  { name: "Fantasy" },
  { name: "Sci-Fi" },
  { name: "Akcja" },
  { name: "Przygodowe" },
  { name: "Dramat" },
  { name: "Horror" },
  { name: "Thriller" },
  { name: "Romantyczne" },
  { name: "Komedia" },
  { name: "Familijne" },
  { name: "Animowane" },
  { name: "Historyczne" },
];

const CategoryFilter = (props) => {
  return (
    <div className={style.container}>
      <h1>Kategorie</h1>
      <div className={style.itemBox}>
        {categories.map((item) => (
          <CategoryItem
            key={item.name}
            name={item.name}
            setCategories={props.setCategories}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
