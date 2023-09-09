import { Link, useLocation } from "react-router-dom";
import classes from "../discovery/StoreTypes.module.scss";
import { HiHome } from "react-icons/hi";
// import { IoStorefrontOutline } from "react-icons/io";
import { BiStore } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";

export default function StoreTypes() {
  const location = useLocation();
  return (
    <div className={classes.links}>
      <Link
        to={"/discovery"}
        className={`${classes.link} ${
          location.pathname === "/discovery" ? classes.color : ""
        }`}
      >
        <HiHome className={classes.icon} />
        Discover
      </Link>
      <Link
        to={"/discovery/restaraunts"}
        className={`${classes.link} ${
          location.pathname === "/discovery/restaraunts" ? classes.color : ""
        }`}
      >
        <ImSpoonKnife className={classes.icon} />
        Restaraunts
      </Link>
      <Link
        to={"/discovery/markets"}
        className={`${classes.link} ${
          location.pathname === "/discovery/markets" ? classes.color : ""
        }`}
      >
        <BiStore className={classes.icon} />
        Markets
      </Link>
    </div>
  );
}
