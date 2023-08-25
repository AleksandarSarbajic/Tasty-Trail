import { Link, useLocation, useParams } from "react-router-dom";
import classes from "../Restoraunt/ContentItem.module.scss";
import { BsBag } from "react-icons/bs";
import { useEffect, useState } from "react";
export default function ContentItem(props) {
  const location = useLocation();
  const params = useParams();
  const [hash, setHash] = useState(location.hash);

  useEffect(
    function () {
      if (location.hash !== "") {
        setHash(location.hash);
      } else {
        return;
      }
    },
    [location.hash]
  );

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
      <button className={classes.button}>
        <span className={classes.icon}>
          <BsBag />
        </span>
      </button>
    </Link>
  );
}
