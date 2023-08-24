import { Link, useParams } from "react-router-dom";
import classes from "../Restoraunt/ContentItem.module.scss";
import { BsBag } from "react-icons/bs";
export default function ContentItem(props) {
  const params = useParams();

  return (
    <Link
      to={`/Restoraunt/${params.id}/${props.name}`}
      className={classes.container}
    >
      <img src={props.image} alt={props.name} className={classes.img} />
      <p className={classes.name}>{props.name}</p>
      <p className={classes.description}>
        {props.description !== 0 ? props.description : ""}
      </p>

      <p className={classes.price}>{props.price} rsd</p>
      <Link
        to={`/Restoraunt/${params.id}/${props.name}`}
        className={classes.button}
      >
        <span className={classes.icon}>
          <BsBag />
        </span>
      </Link>
    </Link>
  );
}
