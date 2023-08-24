import classes from "../restoraunts/TypesItem.module.scss";

import { Link } from "react-router-dom";
export default function TypesItem({ store }) {
  return (
    <Link to={`/Restoraunt/${store.link}`}>
      <div className={classes.border}>
        <img src={store.image} className={classes.img} />
      </div>
      <div className={classes.text}>
        <p className={classes.name}>{store.name}</p>
      </div>
      <span className={classes.quantity}>103 places</span>
    </Link>
  );
}
