import classes from "../discovery/SliderItem.module.scss";

import { Link } from "react-router-dom";
export default function SliderItem({ store, discount }) {
  return (
    <Link to={`/Restoraunt/${store.link}`} key={store.name}>
      <div className={classes.border}>
        <img src={store.image} className={classes.img} />
        {store.discount !== "0%" && discount && (
          <span className={classes.discount}>{store.discount}</span>
        )}
      </div>
      <div className={classes.text}>
        <span className={classes.type}>{store.type}</span>
        <p className={classes.name}>{store.name}</p>
      </div>
    </Link>
  );
}
