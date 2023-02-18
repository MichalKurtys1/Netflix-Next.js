import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./FavoritesPage.module.css";
import Footer from "./Footer";
import Navigation from "./navigation/Navigation";

import img1 from "public/miniatures/jurasicWorld.jpg";
import img2 from "public/miniatures/avatar.jpeg";
import img3 from "public/miniatures/dracula.jpg";
import img4 from "public/miniatures/black_adam.jpg";
import Image from "next/image";
import DropDownList from "./UI/DropDownList";
import { useState } from "react";

const favoritesList = [
  {
    title: "Jurasic World: Domination",
    description:
      "Dinozaury żyją i polują teraz razem z ludźmi na całym świecie. Ta krucha równowaga zmieni przyszłość i raz na zawsze okaże się, czy ludzie mają pozostać największymi drapieżnikami na planecie.",
    image: img1,
  },
  {
    title: "Avatar: Istota wody",
    description:
      "Pandorę znów napada wroga korporacja w poszukiwaniu cennych minerałów. Jack i Neytiri wraz z rodziną zmuszeni są opuścić wioskę i szukać pomocy u innych plemion zamieszkujących planetę.",
    image: img2,
  },
  {
    title: "Black Adam",
    description:
      "Po blisko pięciu tysiącleciach obdarzony boskimi mocami Black Adam zostaje uwolniony ze swojego ziemskiego grobowca.",
    image: img4,
  },
  {
    title: "Dracula: Historia nieznana",
    description:
      "W obliczu zagrożenia królestwa i rodziny Wład Tepeš zawiera umowę z siłami ciemności.",
    image: img3,
  },
  {
    title: "Dracula: Historia nieznana",
    description:
      "W obliczu zagrożenia królestwa i rodziny Wład Tepeš zawiera umowę z siłami ciemności.",
    image: img3,
  },
  {
    title: "Dracula: Historia nieznana",
    description:
      "W obliczu zagrożenia królestwa i rodziny Wład Tepeš zawiera umowę z siłami ciemności.",
    image: img3,
  },
  {
    title: "Dracula: Historia nieznana",
    description:
      "W obliczu zagrożenia królestwa i rodziny Wład Tepeš zawiera umowę z siłami ciemności.",
    image: img3,
  },
  {
    title: "Dracula: Historia nieznana",
    description:
      "W obliczu zagrożenia królestwa i rodziny Wład Tepeš zawiera umowę z siłami ciemności.",
    image: img3,
  },
];

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

const FavoritesPage = () => {
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
        <div>
          <Navigation />
          <div className={style.container}>
            <form className={style.filterBox}>
              <div className={style.dropDownBox}>
                <DropDownList
                  title="Wybierz sortowanie"
                  categories={sortTypes}
                  onCategoryChange={changeSortHandler}
                />
              </div>
              <div className={style.dropDownBox}>
                <DropDownList
                  title="Wybierz typ"
                  categories={types}
                  onCategoryChange={changeTypeHandler}
                />
              </div>
              <div className={style.dropDownBox}>
                <DropDownList
                  title="Wybierz gatunek"
                  categories={categories}
                  onCategoryChange={changeCategoryHandler}
                />
              </div>
              <input type="submit" value="Szukaj" className={style.submitBtn} />
            </form>
            <div className={style.outputBox}>
              {favoritesList.map((item) => (
                <div key={item.title} className={style.item}>
                  <Image src={item.image} alt="title" className={style.image} />
                  <div className={style.descriptionBox}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
