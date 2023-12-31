import classes from "../restoraunts/Header.module.scss";
import { TbArrowsSort } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../redux/filter-slice";
import { useSearchParams } from "react-router-dom";
export default function Header({ heading = "Restaraunts" }) {
  const { sort, filters } = useSelector((state) => state.filter);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const items = searchParams.get("filters");

  const queryType = searchParams.get("type");

  function onClickHandler() {
    if (searchParams.get("filters") !== null && filters.length === 0) {
      let item = items.split(",");
      dispatch(filterActions.setFilters(item));
    }
    if (searchParams.get("filters") === null) {
      dispatch(filterActions.setFilters([]));
    }
  }
  return (
    <header className={classes.header}>
      <h2 className={classes.heading}>
        {queryType === null ? heading : queryType + " " + "close to you!"}
      </h2>
      <button
        className={classes.button}
        onClick={() => {
          dispatch(filterActions.showFilter(true));
          onClickHandler();
        }}
      >
        Sorted for <span>{sort}</span>
        <TbArrowsSort className={classes.buttonIcon} />
      </button>
    </header>
  );
}
