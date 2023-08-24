import { Link } from "react-router-dom";
import classes from "../Restoraunt/Aside.module.scss";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
export default function Aside(props) {
  console.log(props);
  return (
    <aside>
      <ul className={classes.list}>
        <li className={classes.square}>
          <Link
            // to={`/Restoraunt/Collina-Burgers-&-Pancakes-Novi-Beograd?content=${type}`}
            to={`/Restoraunt/${props.content.link}#${""}`}
            className={classes.square}
          >
            <HiOutlineSquares2X2 className={classes.icon} />
            <span>Sections</span>
          </Link>
        </li>
        {props.content.types.map((type) => {
          return (
            <li className={classes.item} key={type}>
              <Link
                // to={`/Restoraunt/${props.content.link}?content=${type}`}
                to={`/Restoraunt/${props.content.link}#${type}`}
                className={classes.link}
              >
                {type}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
