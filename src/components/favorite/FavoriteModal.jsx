import { useState } from "react";
import classes from "./FavoriteModal.module.scss";

import useFetchFavorite from "../../customhooks/useFetchFavorite";

import SearchItem from "../search/SearchItem";
import { Link } from "react-router-dom";
import LoadingSpinnerSmall from "../UI/LoadingSpinnerSmall";
function FavoriteModal() {
  const { isLoading, exportData } = useFetchFavorite();

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("favorite"))
  );

  const filteredItems = items.map((item) => {
    const filter = exportData.filter((fil) => fil.id === item);

    return filter;
  });

  const cutLenghtItems =
    [].concat(...filteredItems).length > 3
      ? [].concat(...filteredItems).slice(0, 3)
      : [].concat(...filteredItems);

  return (
    <div className={classes.box}>
      {!isLoading ? (
        <>
          <ul>
            {cutLenghtItems.map((item) => (
              <SearchItem item={item} key={item.id} />
            ))}
          </ul>
          {[].concat(...filteredItems).length > 3 ? (
            <div className={classes.showBox}>
              <Link to={`/favorites`} className={classes.showLink}>
                Display of all {[].concat(...filteredItems).length} results
              </Link>
            </div>
          ) : null}
        </>
      ) : (
        <LoadingSpinnerSmall state={isLoading} />
      )}
    </div>
  );
}

export default FavoriteModal;
