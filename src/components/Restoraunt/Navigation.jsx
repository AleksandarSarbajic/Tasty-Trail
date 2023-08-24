import classes from "../Restoraunt/Navigation.module.scss";
import { MdAccessTime, MdOutlineDeliveryDining } from "react-icons/md";
import { BiStore } from "react-icons/bi";

export default function Navigation(props) {
  return (
    <div>
      <div className={classes.nav}>
        <h2 className={classes.heading}>{props.store.name}</h2>
        <p className={classes.subheading}>{props.store.text}</p>
        <div className={classes.links}>
          <p className={classes.text}>
            <BiStore className={classes.icon} /> {props.store.time}
          </p>
          <p className={classes.text}>
            <MdAccessTime className={classes.icon} /> {props.store.order} min
          </p>
          <p className={classes.text}>
            <MdOutlineDeliveryDining className={classes.icon} />
            {props.store.price} rsd
          </p>
        </div>
      </div>
    </div>
  );
}
