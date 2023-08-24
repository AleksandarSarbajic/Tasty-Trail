import { useLocation } from "react-router-dom";
import classes from "../restoraunts/TypesAll.module.scss";
import TypesAllItem from "./TypesAllItem";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function TypesAll(props) {
  const location = useLocation();
  const filter = useSelector((state) => state.filter);
  const [data] = useState(props.data.Restoraunts);

  const filteredRestaurants = props.data.Restoraunts.filter((restaurant) =>
    restaurant.types.some((type) => filter.filters.includes(type))
  );

  return (
    <div className={classes.container}>
      <h3>All Restoraunts</h3>
      <div className={classes.grid}>
        {location.pathname.includes("restoraunts") &&
        filter.filters.length === 0 &&
        filter.sort === "Recommended"
          ? props.data.Restoraunts.map((rest) => {
              return (
                <TypesAllItem
                  key={rest.name}
                  img={rest.image}
                  name={rest.name}
                  price={rest.price}
                  text={rest.text}
                  order={rest.order}
                  link={rest.link}
                />
              );
            })
          : filter.sort === "Delivery price" && filter.filters.length === 0
          ? [...data]
              .sort((a, b) => a.price - b.price)
              .map((rest) => {
                return (
                  <TypesAllItem
                    key={rest.name}
                    img={rest.image}
                    name={rest.name}
                    price={rest.price}
                    text={rest.text}
                    order={rest.order}
                    link={rest.link}
                  />
                );
              })
          : filter.sort === "Order time" && filter.filters.length === 0
          ? [...data]
              .sort((a, b) => a.averageOrder - b.averageOrder)
              .map((rest) => {
                return (
                  <TypesAllItem
                    key={rest.name}
                    img={rest.image}
                    name={rest.name}
                    price={rest.price}
                    text={rest.text}
                    order={rest.order}
                    link={rest.link}
                  />
                );
              })
          : filter.filters.length !== 0 && filter.sort === "Recommended"
          ? [...filteredRestaurants].map((rest) => (
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
          : filter.filters.length !== 0 && filter.sort === "Delivery price"
          ? [...filteredRestaurants]
              .sort((a, b) => a.price - b.price)
              .map((rest) => {
                return (
                  <TypesAllItem
                    key={rest.name}
                    img={rest.image}
                    name={rest.name}
                    price={rest.price}
                    text={rest.text}
                    order={rest.order}
                    link={rest.link}
                  />
                );
              })
          : filter.filters.length !== 0 && filter.sort === "Order time"
          ? [...filteredRestaurants]
              .sort((a, b) => a.averageOrder - b.averageOrder)
              .map((rest) => {
                return (
                  <TypesAllItem
                    key={rest.name}
                    img={rest.image}
                    name={rest.name}
                    price={rest.price}
                    text={rest.text}
                    order={rest.order}
                    link={rest.link}
                  />
                );
              })
          : props.data.Markets.map((rest) => {
              return (
                <TypesAllItem
                  key={rest.name}
                  img={rest.image}
                  name={rest.name}
                  price={rest.price}
                  text={rest.text}
                  order={rest.order}
                  link={rest.link}
                />
              );
            })}
      </div>
    </div>
  );
}
