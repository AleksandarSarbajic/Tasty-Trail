import { useLocation } from "react-router-dom";
import classes from "./ProgressBar.module.scss";
function ProgressBar() {
  const location = useLocation();

  return (
    <div
      className={`${classes.progress} ${
        location.hash === "#overview" ? classes.center : ""
      }`}
    >
      <p
        className={`${classes.link} ${
          location.hash !== "" ? classes.opacity : ""
        }`}
      >
        <span
          className={`${classes.number} ${
            location.hash === "" ? classes.highlighted : ""
          }`}
        >
          1
        </span>
        Cart
      </p>
      <p
        className={`${classes.link} ${
          location.hash !== "#checkout" ? classes.opacity : ""
        }`}
      >
        <span
          className={`${classes.number} ${
            location.hash === "#checkout" ? classes.highlighted : ""
          }`}
        >
          2
        </span>
        CheckOut
      </p>
      <p
        className={`${classes.link} ${
          location.hash !== "#overview" ? classes.opacity : ""
        }`}
      >
        <span
          className={`${classes.number} ${
            location.hash === "#overview" ? classes.highlighted : ""
          }`}
        >
          3
        </span>
        Overview
      </p>
    </div>
  );
}

export default ProgressBar;
