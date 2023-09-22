import { Link } from "react-router-dom";
import classes from "../restoraunts/TypesAllItem.module.scss";
import { MdOutlineDeliveryDining } from "react-icons/md";
export default function TypesAllItem(props) {
  console.log(props);

  return (
    <Link
      to={`/${props.type === "Market" ? "Market" : "Restaurant"}/${props.link}`}
      className={classes.item}
    >
      <div className={classes.container}>
        <div className={classes.itemContainer}>
          <img src={props.img} alt={props.name} className={classes.img} />
          <p className={classes.delivery}>
            <MdOutlineDeliveryDining className={classes.deliveryIcons} />
            {props.price === 0 ? (
              <span>Free Delivery</span>
            ) : (
              <span>{props.price} rsd</span>
            )}
          </p>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.itemBoxTextes}>
            <p className={classes.itemBoxName}>{props.name}</p>
            <p className={classes.itemBoxText}>{props.text}</p>
          </div>
          <div className={classes.itemBoxTime}>
            <p className={classes.itemBoxOrder}>{props.order}</p>
            <p>min.</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
