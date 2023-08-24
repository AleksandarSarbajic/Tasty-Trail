import { Link, useLocation } from "react-router-dom";
import classes from "../Restoraunt/Aside.module.scss";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
export default function Aside(props) {
  const { hash } = useLocation();
  const cuttedHash = hash.slice(1);
  return (
    <aside>
      <ul className={classes.list}>
        <li className={classes.square}>
          <Link
            to={`/Restoraunt/${props.content.link}`}
            className={classes.square}
          >
            <HiOutlineSquares2X2 className={classes.icon} />
            <span>Sections</span>
          </Link>
        </li>
        <div className={classes.links}>
          {props.content.types.map((type) => {
            return (
              <li className={classes.item} key={type}>
                <Link
                  to={`/Restoraunt/${props.content.link}#${type}`}
                  className={`${classes.link} ${
                    cuttedHash === type && cuttedHash ? classes.high : ""
                  }`}
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
