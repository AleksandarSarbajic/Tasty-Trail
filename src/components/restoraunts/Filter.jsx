import classes from "../restoraunts/Filter.module.scss";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../redux/filter-slice";
import { useState } from "react";
import FilterItem from "./FilterItem";
import { useSearchParams } from "react-router-dom";
export default function Filter(props) {
  const { sort, itemsToBeFiltered } = useSelector((state) => state.filter);
  const [value, setValue] = useState(sort);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  function onClickHandler() {
    dispatch(filterActions.setFilter());
    dispatch(filterActions.showFilter(false));
    dispatch(filterActions.setSort(value));

    if (itemsToBeFiltered.length > 0) {
      searchParams.set("filters", itemsToBeFiltered);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("filters");

      setSearchParams(searchParams);
    }
  }
  function onItemClick(item) {
    dispatch(filterActions.setItemsForFilter(item));
  }

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          dispatch(filterActions.showFilter(false));
        }}
      />

      <dialog open className={classes.modal}>
        <nav className={classes.nav}>
          <button
            className={classes.navClose}
            onClick={() => {
              dispatch(filterActions.showFilter(false));
            }}
          >
            <RxCross2 className={classes.navIcon} />
          </button>
        </nav>
        <p className={classes.heading}>Filter</p>
        <div className={classes.grid}>
          {props.data.types.food.map((item) => (
            <FilterItem
              key={item.name}
              type={item.name}
              onClick={onItemClick}
            />
          ))}
        </div>
        <p className={classes.subheading}>Sort by</p>
        <div>
          <button
            className={`${classes.gridItem} ${
              value === "Recommended"
                ? classes.selected
                : sort === ""
                ? classes.selected
                : ""
            }`}
            value={"Recommended"}
            onClick={(e) => {
              setValue(e.target.value);
            }}
          >
            Reccomended
          </button>
          <button
            className={`${classes.gridItem} ${
              value === "Delivery price"
                ? classes.selected
                : sort === ""
                ? classes.selected
                : ""
            }`}
            value={"Delivery price"}
            onClick={(e) => {
              setValue(e.target.value);
            }}
          >
            Delivery price
          </button>
          <button
            className={`${classes.gridItem} ${
              value === "Order time"
                ? classes.selected
                : sort === ""
                ? classes.selected
                : ""
            }`}
            value={"Order time"}
            onClick={(e) => {
              setValue(e.target.value);
            }}
          >
            Order time
          </button>
          <button
            className={`${classes.gridItem} ${
              value === "Price"
                ? classes.selected
                : sort === ""
                ? classes.selected
                : ""
            }`}
            value={"Price"}
            onClick={(e) => {
              setValue(e.target.value);
            }}
          >
            Price
          </button>
        </div>
        <button className={classes.button} onClick={onClickHandler}>
          Apply
        </button>
      </dialog>
    </>
  );
}
