import classes from "../restoraunts/Filter.module.scss";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function FilterItem({ type, onClick }) {
  const [isSelected, setIsSelected] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const select = useSelector((state) => state.filter.itemsToBeFiltered);
  // function onClickHandler() {

  //   const existingItems = select.find((item) => item === type);

  //   if (existingItems) {
  //     setIsSelected(true);
  //   }
  // }
  useEffect(() => {
    // searchParams?.get("filters")?.split(",");
    // if (searchParams?.get("filters")?.split(",") !== undefined) {
    // }

    const existingItems = select.find((item) => item === type);

    if (existingItems) {
      setIsSelected(true);
    }
  }, [select, type]);

  return (
    <button
      className={`${classes.gridItem} ${isSelected ? classes.selected : ""}`}
      onClick={() => {
        setIsSelected(!isSelected);
        onClick(type);
      }}
    >
      {type}
    </button>
  );
}
