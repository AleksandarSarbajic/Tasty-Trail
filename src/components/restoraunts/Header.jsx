import classes from "../restoraunts/Header.module.scss";
import { TbArrowsSort } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../redux/filter-slice";
export default function Header() {
  const sort = useSelector((state) => state.filter.sort);

  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <h2 className={classes.heading}>Restoranunts</h2>
      <button
        className={classes.button}
        onClick={() => {
          dispatch(filterActions.showFilter(true));
        }}
      >
        Sorted for <span>{sort}</span>
        <TbArrowsSort className={classes.buttonIcon} />
      </button>
    </header>
  );
}
