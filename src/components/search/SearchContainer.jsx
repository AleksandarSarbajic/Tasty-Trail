import TypesAllItem from "../restoraunts/TypesAllItem";
import classes from "./SearchContainer.module.scss";
function SearchContainer({ data }) {
  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {data.map((rest) => (
          <TypesAllItem
            key={rest.name}
            img={rest.image}
            name={rest.name}
            price={rest.price}
            text={rest.text}
            order={rest.order}
            link={rest.link}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchContainer;
