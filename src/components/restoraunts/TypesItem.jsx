import classes from "../restoraunts/TypesItem.module.scss";

import { Link, useLoaderData } from "react-router-dom";
export default function TypesItem({ item, type }) {
  const { Markets: marketsData, Restoraunts: restorauntData } =
    useLoaderData("restoraunts");

  const numberOfplaces =
    type === "Markets"
      ? marketsData.filter((innerArray) => {
          return innerArray.types.includes(item.name);
        })
      : restorauntData.filter((innerArray) => {
          return innerArray.types.includes(item.name);
        });

  return (
    <Link to={`/discovery/category?type=${item.name}`} className={classes.item}>
      <div className={classes.border}>
        <img src={item.img} className={classes.img} />
      </div>
      <div className={classes.text}>
        <p className={classes.name}>{item.name}</p>
      </div>
      {numberOfplaces.length > 0 && (
        <span className={classes.quantity}>
          {numberOfplaces.length}{" "}
          {numberOfplaces.length > 1 ? "places" : "place"}
        </span>
      )}
    </Link>
  );
}
