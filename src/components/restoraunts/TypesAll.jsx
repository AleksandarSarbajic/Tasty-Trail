import { useLocation, useSearchParams } from "react-router-dom";
import classes from "../restoraunts/TypesAll.module.scss";
import TypesAllItem from "./TypesAllItem";
import { useSelector } from "react-redux";
import Error from "../UI/Error";

export default function TypesAll({ allData, searchData = [], heading }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const filter = useSelector((state) => state.filter);
  const containsLocation =
    location.pathname.includes("restaraunts") ||
    location.pathname.includes("markets") ||
    location.pathname.includes("search");

  const data =
    location.pathname.includes("restaraunts") ||
    location.pathname.includes("category")
      ? allData.Restoraunts
      : location.pathname.includes("markets")
      ? allData.Markets
      : searchData;

  const searchQuery = searchParams.get("type");
  const filteredRestaurants = [...data].filter((restaurant) =>
    restaurant.types.some((type) =>
      searchParams?.get("filters")?.split(",").includes(type)
    )
  );
  console.log(allData.Restoraunts, searchQuery !== null);
  if (
    searchQuery !== null &&
    [...data].filter((restaurant) =>
      restaurant.types.some((type) => type === searchQuery)
    ).length === 0
  ) {
    return (
      <Error
        img={"/cart.png"}
        text=" There is no such restoraunt for any of that filters, choose other
  filters or go back to restoraunts"
        to="/discovery/restaraunts"
        alt={"cart"}
        link={"Go back"}
      />
    );
  }
  // if (
  //   filteredRestaurants.length === 0 &&
  //   searchQuery === null &&
  //   searchParams.get("filters") !== null
  // )
  //   return (
  //     <Error
  //       img={"/cart.png"}
  //       text=" There is no such restoraunt for any of that filters, choose other
  // filters or go back to restoraunts"
  //       to="/discovery/restaraunts"
  //       alt={"cart"}
  //       link={"Go back"}
  //     />
  //   );
  return (
    <div className={classes.container}>
      {heading && <h3>{heading}</h3>}
      <div className={classes.grid}>
        {containsLocation &&
        searchQuery === null &&
        searchParams?.get("filters")?.split(",") === undefined &&
        filter.sort === "Recommended"
          ? [...data].map((rest) => {
              return (
                <TypesAllItem
                  type={rest.type}
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
          : location.pathname.includes("category") &&
            searchQuery !== null &&
            searchParams?.get("filters")?.split(",") === undefined &&
            filter.sort === "Recommended"
          ? [...data]
              .filter((restaurant) =>
                restaurant.types.some((type) => type === searchQuery)
              )
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : filter.sort === "Order time" &&
            searchQuery !== null &&
            searchParams?.get("filters")?.split(",") === undefined
          ? [...data]
              .filter((restaurant) =>
                restaurant.types.some((type) => type === searchQuery)
              )
              .sort((a, b) => a.averageOrder - b.averageOrder)
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : filter.sort === "Delivery price" &&
            searchQuery !== null &&
            searchParams?.get("filters")?.split(",") === undefined
          ? [...data]
              .filter((restaurant) =>
                restaurant.types.some((type) => type === searchQuery)
              )
              .sort((a, b) => a.price - b.price)
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : filter.sort === "Delivery price" &&
            searchQuery === null &&
            searchParams?.get("filters")?.split(",") === undefined
          ? [...data]
              .sort((a, b) => a.price - b.price)
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : filter.sort === "Order time" &&
            searchQuery === null &&
            searchParams?.get("filters")?.split(",") === undefined
          ? [...data]
              .sort((a, b) => a.averageOrder - b.averageOrder)
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : searchParams?.get("filters")?.split(",").length > 0 &&
            searchQuery !== null &&
            filter.sort === "Recommended"
          ? [...data]
              .filter((restaurant) =>
                restaurant.types.some((type) =>
                  searchParams
                    ?.get("filters")
                    ?.split(",")
                    .concat(searchQuery)
                    .includes(type)
                )
              )
              .map((rest) => (
                <TypesAllItem
                  type={rest.type}
                  key={rest.name}
                  img={rest.image}
                  name={rest.name}
                  price={rest.price}
                  text={rest.text}
                  order={rest.order}
                  link={rest.link}
                />
              ))
          : searchParams?.get("filters")?.split(",").length > 0 &&
            searchQuery === null &&
            filter.sort === "Recommended"
          ? [...filteredRestaurants].map((rest) => (
              <TypesAllItem
                type={rest.type}
                key={rest.name}
                img={rest.image}
                name={rest.name}
                price={rest.price}
                text={rest.text}
                order={rest.order}
                link={rest.link}
              />
            ))
          : searchParams?.get("filters")?.split(",").length > 0 &&
            searchQuery !== null &&
            filter.sort === "Delivery price"
          ? [...data]
              .filter((restaurant) =>
                restaurant.types.some((type) =>
                  searchParams
                    ?.get("filters")
                    ?.split(",")
                    .concat(searchQuery)
                    .includes(type)
                )
              )
              .sort((a, b) => a.price - b.price)
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : searchParams?.get("filters")?.split(",").length > 0 &&
            searchQuery === null &&
            filter.sort === "Delivery price"
          ? [...filteredRestaurants]
              .sort((a, b) => a.price - b.price)
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : searchParams?.get("filters")?.split(",").length > 0 &&
            searchQuery !== null &&
            filter.sort === "Order time"
          ? [...data]
              .filter((restaurant) =>
                restaurant.types.some((type) =>
                  searchParams
                    ?.get("filters")
                    ?.split(",")
                    .concat(searchQuery)
                    .includes(type)
                )
              )
              .sort((a, b) => a.averageOrder - b.averageOrder)
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : searchParams?.get("filters")?.split(",").length > 0 &&
            searchQuery === null &&
            filter.sort === "Order time"
          ? [...filteredRestaurants]
              .sort((a, b) => a.averageOrder - b.averageOrder)
              .map((rest) => {
                return (
                  <TypesAllItem
                    type={rest.type}
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
          : ""}
      </div>
    </div>
  );
}
