import { useLoader } from "../customhooks/useSearchData";
import TypesAllItem from "../components/restoraunts/TypesAllItem";
import classes from "../components/restoraunts/TypesAll.module.scss";
import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const { exportData, isLoading } = useLoader(query);
  console.log(isLoading, exportData);

  // if (isLoading) return <div>Loading...</div>;

  function handleOnClick(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {isLoading ? (
          <p>Loading...</p>
        ) : exportData.length !== 0 ? (
          exportData.map((rest) => (
            <TypesAllItem
              key={rest.name}
              img={rest.image}
              name={rest.name}
              price={rest.price}
              text={rest.text}
              order={rest.order}
              link={rest.link}
            />
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <form>
        <input
          style={{ paddingTop: "20rem" }}
          type="text"
          value={query}
          onChange={handleOnClick}
        />
      </form>
    </div>
  );
}

export default Search;
