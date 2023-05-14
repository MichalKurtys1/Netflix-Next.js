import CategoryFilter from "./CategoryFilter";
import Footer from "../Footer";
import YearFilter from "./YearFilter";
import PlatformFilter from "./PlatformFilter";
import { useSelector } from "react-redux";
import useFilter from "src/hooks/useFilter";
import FilterResults from "./FilterResults";
import { useEffect, useState } from "react";
import style from "./FilterPage.module.css";
import { useRouter } from "next/router";

const categoryFilter = (data, results, categories) => {
  if (!categories.length <= 0) {
    categories.forEach((element) => {
      results.push(data.filter((item) => item.genre.includes(element)));
    });
    results = results.flat();
  } else {
    results = data;
  }
  return results;
};

const yearFilter = (data, results, yearFrom, yearTo) => {
  results = results.filter(
    (item) =>
      +item.premiere.split(" ")[2] >= +yearFrom &&
      +item.premiere.split(" ")[2] <= +yearTo
  );
  return results;
};

const platformFilter = (data, results, platforms) => {
  if (!platforms.length <= 0) {
    let platformsResults = [];
    platforms.forEach((element) => {
      let el = element.replace(/[^a-zA-Z]+/, "_").toUpperCase();
      results.forEach((item) => {
        item.platforms.forEach((platform) => {
          if (platform === el) {
            platformsResults.push(item);
          }
        });
      });
    });
    results = platformsResults;
  }
  return results;
};

const typeFilter = (data, results, type) => {
  if (!type !== "") {
    let resultType;
    resultType =
      type === "Filmy"
        ? "FILM"
        : type === "Seriale"
        ? "SERIES"
        : type === "Już wkrótce"
        ? "COMMING_SOON"
        : type === "W kinach"
        ? "IN_CINEMAS"
        : "";
    if (resultType !== "") {
      let typeResults = [];
      results.forEach((item) => {
        item.type.forEach((type) => {
          if (type === resultType) {
            typeResults.push(item);
          }
        });
      });
      results = typeResults;
    }
  }
  return results;
};

const sortFilter = (data, results, sort) => {
  if (!sort !== "") {
    if (sort === 1) {
      results.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
    } else if (sort === 2) {
      results.sort((a, b) =>
        b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      );
    } else if (sort === 3) {
      results.sort(
        (a, b) => +b.premiere.split(" ")[2] - +a.premiere.split(" ")[2]
      );
    } else if (sort === 4) {
      results.sort(
        (a, b) => +a.premiere.split(" ")[2] - +b.premiere.split(" ")[2]
      );
    }
  }
  return results;
};

const FilterPage = (props) => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const [results, setResults] = useState(props.data);
  const [categories, setCategories] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [yearFrom, setYearFrom] = useState(0);
  const [yearTo, setYearTo] = useState(43);

  useEffect(() => {
    if (router.query.search !== undefined) {
      setResults(
        results.filter((item) =>
          item.title.toLowerCase().includes(router.query.search.toLowerCase())
        )
      );
      setIsEnabled(true);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }, [router.query]);

  const onSetCategories = (category, state) => {
    if (state) {
      categories.push(category);
    } else {
      let index = categories.indexOf(category);
      categories.splice(index, 1);
    }
  };

  const onSetPlatforms = (platform, state) => {
    if (state) {
      platforms.push(platform);
    } else {
      let index = platforms.indexOf(platform);
      platforms.splice(index, 1);
    }
  };

  const onSetYearFrom = (year) => {
    setYearFrom(year + 1980);
  };

  const onSetYearTo = (year) => {
    setYearTo(year + 1980);
  };

  const onSetSort = (x, y) => {
    clickHandler(x, y);
  };

  const clickHandler = (x, y) => {
    let data = props.data;
    let results = [];

    results = categoryFilter(data, results, categories);
    results = yearFilter(data, results, yearFrom, yearTo);
    results = platformFilter(data, results, platforms);
    results = typeFilter(data, results, y);
    results = sortFilter(data, results, x);

    let finalResults = [];
    results.forEach((item, i) => {
      item.type.forEach((type) => {
        if (type === "COMMING_SOON") {
          item.commingSoon = "Comming Soon";
        }
      });
      finalResults.push(item);
    });

    setResults(finalResults);
    setIsEnabled(true);
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={style.filters}>
      <div className={style.filterBox}>
        <CategoryFilter setCategories={onSetCategories} />
        <YearFilter setFrom={onSetYearFrom} setTo={onSetYearTo} />
        <PlatformFilter setPlatforms={onSetPlatforms} />
        <button className={style.submitFilterBtn} onClick={clickHandler}>
          Wyszukaj
        </button>
      </div>

      <FilterResults isEnabled={isEnabled} data={results} setSort={onSetSort} />
    </div>
  );
};

export default FilterPage;
