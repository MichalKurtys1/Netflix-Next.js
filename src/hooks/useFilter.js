import { useEffect } from "react";
import { useSelector } from "react-redux";

function useFilter() {
  const categoryList = useSelector((state) => state.filter.categoryList);
  const platformList = useSelector((state) => state.filter.platformList);
  const sort = useSelector((state) => state.filter.sort);
  const type = useSelector((state) => state.filter.type);
  const yearFrom = useSelector((state) => state.filter.yearFrom);
  const yearTo = useSelector((state) => state.filter.yearTo);

  useEffect(() => {
    console.log(type);
  }, []);

  return { categoryList, platformList, sort, type, yearFrom, yearTo };
}

export default useFilter;
