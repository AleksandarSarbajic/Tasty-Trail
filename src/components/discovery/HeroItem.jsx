import classes from "../discovery/HeroItem.module.scss";
import { Link } from "react-router-dom";
export default function HeroItem({ store }) {
  return (
    <Link to={`/Restaraunt/${store.link}`} key={store.name}>
      <img src={store.image} className={classes.img} loading="lazy" />
      <div className={classes.text}>
        <span className={classes.type}>{store.type}</span>
        <p className={classes.name}>{store.name}</p>
      </div>
    </Link>
  );
}
