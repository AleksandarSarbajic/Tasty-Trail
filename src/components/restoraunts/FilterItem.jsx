import classes from "../restoraunts/Filter.module.scss";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
export default function FilterItem({ type, onClick }) {
  const [isSelected, setIsSelected] = useState(false);

  const select = useSelector((state) => state.filter.itemsToBeFiltered);

  useEffect(() => {
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
