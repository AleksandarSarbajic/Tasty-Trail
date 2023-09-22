import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import classes from "../Restoraunt/Aside.module.scss";
import { HiChevronDown, HiOutlineSquares2X2 } from "react-icons/hi2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../../redux/search-slice";

export default function Aside(props) {
  const [animation, setAnimation] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // const queryParams = searchParams.get("typeQuery");
  const cuttedHash = location.hash.slice(1);
  const dispatch = useDispatch();

  function onClick() {
    dispatch(searchActions.setSearchText({ payload: "" }));

    setAnimation((animate) =>
      animation === null ? true : animation != null ? !animate : null
    );

    // if (!animation) return;

    navigate(`/Restaraunt/${props.content.link}`);
  }

  function clearAndMoveHandler(type) {
    dispatch(searchActions.setSearchText({ payload: "" }));

    navigate(`#${type}`);
  }

  return (
    <aside>
      <ul className={classes.list}>
        <button className={classes.square} onClick={onClick}>
          <span>
            <HiOutlineSquares2X2 className={classes.icon} />
            <span>Sections</span>
          </span>
          <span className={classes.chevron}>
            <HiChevronDown />
          </span>
        </button>

        <div
          className={`${classes.links} ${
            animation === null
              ? ""
              : !animation
              ? classes.easeIn
              : classes.easeOut
          }`}
        >
          {props.content.types.map((type) => {
            return (
              <li className={classes.item} key={type}>
                <button
                  className={`${classes.link} ${
                    cuttedHash === type && classes.high
                  }`}
                  onClick={() => clearAndMoveHandler(type)}
                >
                  {type}
                </button>
              </li>
            );
          })}
        </div>
      </ul>
    </aside>
  );
}
