import { Link, useLocation } from "react-router-dom";
import classes from "../Restoraunt/Aside.module.scss";
import { HiChevronDown, HiOutlineSquares2X2 } from "react-icons/hi2";
import { useState } from "react";
export default function Aside(props) {
  const [animation, setAnimation] = useState(false);
  const { hash } = useLocation();
  const cuttedHash = hash.slice(1);

  function onClick() {
    setAnimation((animate) => !animate);
  }

  return (
    <aside>
      <ul className={classes.list}>
        <li className={classes.square}>
          <Link
            to={`/Restoraunt/${props.content.link}`}
            className={classes.square}
            onClick={onClick}
          >
            <span>
              <HiOutlineSquares2X2 className={classes.icon} />
              <span>Sections</span>
            </span>
            <span>
              <HiChevronDown />
            </span>
          </Link>
        </li>
        <div
          className={`${classes.links} ${
            !animation ? classes.easeIn : classes.easeOut
          }`}
        >
          {props.content.types.map((type) => {
            return (
              <li className={classes.item} key={type}>
                <Link
                  to={`/Restoraunt/${props.content.link}#${type}`}
                  className={`${classes.link} ${
                    cuttedHash === type && cuttedHash ? classes.high : ""
                  }`}
                  onClick={onClick}
                >
                  {type}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </aside>
  );
}
