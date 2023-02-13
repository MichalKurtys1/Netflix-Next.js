import style from "./CategoryFilter.module.css";
import CategoryItem from "./CategoryItem";

const categories = [
  { name: "Fantasy" },
  { name: "Sci-Fi" },
  { name: "Akcji" },
  { name: "Przygodowe" },
  { name: "Dramaty" },
  { name: "Horrory" },
  { name: "Thriller" },
  { name: "Romantyczne" },
  { name: "Komedie" },
  { name: "Familijne" },
  { name: "Animowane" },
  { name: "Historyczne" },
];

const CategoryFilter = () => {
  return (
    <div className={style.container}>
      <h1>Kategorie</h1>
      <div className={style.itemBox}>
        {categories.map((item) => (
          <CategoryItem key={item.name} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
