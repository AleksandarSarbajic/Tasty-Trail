import classes from "../discovery/SliderMarketItem.module.scss";

import { Link } from "react-router-dom";
export default function SliderMarketItem({ store }) {
  return (
    <Link to={`/Market/${store.link}`}>
      <div className={classes.border}>
        <img src={store.image} className={classes.img} alt={store.name} />
      </div>
      <div className={classes.text}>
        <p className={classes.name}>{store.name}</p>
      </div>
    </Link>
  );
}
