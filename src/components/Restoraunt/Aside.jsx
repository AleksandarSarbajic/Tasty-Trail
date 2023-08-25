import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import classes from "../Restoraunt/Aside.module.scss";
import { HiChevronDown, HiOutlineSquares2X2 } from "react-icons/hi2";
import { useState } from "react";
export default function Aside(props) {
  const [animation, setAnimation] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const cuttedHash = location.hash.slice(1);

  function onClick(type) {
    // console.log(location, type);

    setAnimation((animate) =>
      animation === null ? true : animation != null ? !animate : null
    );
    if (location.hash === "") return;
    if (!animation) return;
    navigate(`/Restoraunt/${props.content.link}`);
  }

  return (
    <aside>
      <ul className={classes.list}>
        <li className={classes.square}>
          <button className={classes.square} onClick={onClick}>
            <span>
              <HiOutlineSquares2X2 className={classes.icon} />
              <span>Sections</span>
            </span>
            <span>
              <HiChevronDown />
            </span>
          </button>
        </li>
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
                <NavLink
                  to={`/Restoraunt/${props.content.link}#${type}`}
                  className={`${classes.link} ${
                    cuttedHash === type && classes.high
                  }`}
                  onClick={() => onClick(type)}
                >
                  {type}
                </NavLink>
              </li>
            );
          })}
        </div>
      </ul>
    </aside>
  );
}
