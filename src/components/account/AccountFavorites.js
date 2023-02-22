import Separator from "../UI/Separator";
import style from "./AccountMain.module.css";
import DropDownList from "../UI/DropDownList";
import FavoritesList from "./FavoritesList";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const sortTypes = [
  { name: "Najpopularniejsze" },
  { name: "Od najnowszych" },
  { name: "Od najstarszych" },
  { name: "A -> Z" },
  { name: "Z -> A" },
];

const types = [
  { name: "W kinach" },
  { name: "Już wktótce" },
  { name: "filmy" },
  { name: "seriale" },
];

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

const AccountFavorites = () => {
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [sortInputValue, setSortInputValue] = useState("");
  const [typeInputValue, setTypeInputValue] = useState("");
  const [categoryInputValue, setCategoryInputValue] = useState("");

  const changeSortHandler = (category) => {
    setSortInputValue(category);
  };

  const changeTypeHandler = (category) => {
    setTypeInputValue(category);
  };

  const changeCategoryHandler = (category) => {
    setCategoryInputValue(category);
  };

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/films");
    }
  }, [isLoggedIn, router]);

  return (
    <>
      {isLoggedIn && (
        <div className={style.mainBox}>
          <div className={style.upperBox}>
            <h1>Ulubione</h1>
          </div>
          <Separator diraction={false} />
          <div className={style.middleBox}>
            <div className={style.leftBox}>
              <p>Ilość ulubionych</p>
              <p>Najczęstsze kategorie</p>
              <p>Ilość komentarzy</p>
              <p>Premium od</p>
            </div>
            <div className={style.rightBox}>
              <p>122</p>
              <p>fantasy, sci-fi</p>
              <p>32</p>
              <p>2 lat</p>
            </div>
          </div>
          <Separator diraction={true} />
          <div className={style.filterBox}>
            <div className={style.choiseBox}>
              <DropDownList
                title="Wybierz kategorie"
                categories={categories}
                onCategoryChange={changeCategoryHandler}
              />
            </div>
            <div className={style.choiseBox}>
              <DropDownList
                title="Wybierz Typ"
                categories={types}
                onCategoryChange={changeTypeHandler}
              />
            </div>
            <div className={style.choiseBox}>
              <DropDownList
                title="Wybierz Sortowanie"
                categories={sortTypes}
                onCategoryChange={changeSortHandler}
              />
            </div>
            <div className={style.btnBox}>
              <button>Wyszukaj</button>
            </div>
          </div>
        </div>
      )}
      {isLoggedIn && <FavoritesList />}
    </>
  );
};

export default AccountFavorites;
