import classes from "../discovery/HeroItem.module.scss";
import { Link } from "react-router-dom";
export default function HeroItem({ store }) {
  return (
    <Link to={`/Restaurant/${store.link}`} key={store.name}>
      <img src={store.image} className={classes.img} alt={store.name} />
      <div className={classes.text}>
        <span className={classes.type}>{store.type}</span>
        <p className={classes.name}>{store.name}</p>
      </div>
    </Link>
  );
}
