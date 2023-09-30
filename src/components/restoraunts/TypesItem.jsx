import classes from "../restoraunts/TypesItem.module.scss";

import { Link, useLoaderData } from "react-router-dom";
export default function TypesItem({ item, type }) {
  const { Markets: marketsData, Restaurants: restorauntData } =
    useLoaderData("restoraunts");

  const numberOfplaces =
    type === "Markets"
      ? marketsData.filter((innerArray) => {
          return innerArray.types.includes(item.name);
        })
      : type === "Restaurants"
      ? restorauntData.filter((innerArray) => {
          return innerArray.types.includes(item.name);
        })
      : marketsData.concat(restorauntData).filter((innerArray) => {
          return innerArray.types.includes(item.name);
        });

  return (
    <Link to={`/discovery/category?type=${item.name}`} className={classes.item}>
      <div className={classes.border}>
        <img src={item.img} className={classes.img} alt={item.text} />
      </div>
      <div className={classes.text}>
        <p className={classes.name}>{item.name}</p>
      </div>

      <span className={classes.quantity}>
        {numberOfplaces.length > 0 && numberOfplaces.length}{" "}
        {numberOfplaces.length > 1
          ? "places"
          : numberOfplaces.length === 0
          ? "No places"
          : "place"}
      </span>
    </Link>
  );
}
