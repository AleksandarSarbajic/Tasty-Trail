import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import classes from "../Restoraunt/ContentItem.module.scss";
import { BsBag } from "react-icons/bs";
import { useEffect, useState } from "react";
export default function ContentItem(props) {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
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
    <button
      className={classes.container}
      onClick={function () {
        navigate(props.name);
      }}
    >
      <img src={props.image} alt={props.name} className={classes.img} />
      <p className={classes.name}>{props.name}</p>
      <p className={classes.description}>
        {props.description !== 0 ? props.description : ""}
      </p>

      <p className={classes.price}>{props.price} rsd</p>
      <p className={classes.button}>
        <span className={classes.icon}>
          <BsBag />
        </span>
      </p>
    </button>
  );
}
