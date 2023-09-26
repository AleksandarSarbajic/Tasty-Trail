import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import classes from "../Restoraunt/Aside.module.scss";
import { HiChevronDown, HiOutlineSquares2X2 } from "react-icons/hi2";
import { useState } from "react";

export default function Aside(props) {
  const [animation, setAnimation] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const cuttedHash = location.hash.slice(1);

  function onClick() {
    setAnimation((animate) =>
      animation === null ? true : animation != null ? !animate : null
    );

    // if (!animation) return;

    navigate(`/Restaurant/${props.content.link}`);
  }

  function clearAndMoveHandler(type) {
    searchParams.delete("search");
    setSearchParams(searchParams);
    navigate(`#${type}`);
  }

  const types = props.content.food.map((item) => item.type);

  const items = props.content.types.filter((item1) => {
    return types.includes(item1);
  });

  return (
    <aside className={classes.side}>
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
          {items.map((type) => {
            return (
              <li className={classes.item} key={type}>
                <button
                  className={`${classes.link} ${
                    cuttedHash === type && classes.high
                  }`}
                  onClick={() => clearAndMoveHandler(type)}
                >
                  {type.replace(/-/g, " ")}
                </button>
              </li>
            );
          })}
        </div>
      </ul>
    </aside>
  );
}
