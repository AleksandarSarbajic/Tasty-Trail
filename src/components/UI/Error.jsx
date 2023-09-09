import { Link } from "react-router-dom";
import classes from "./Error.module.scss";
function Error({ img, text, link, to, alt }) {
  return (
    <div className={classes.error}>
      <img src={img} className={classes.img} alt={alt} />
      <p className={classes.errorMessage}>{text}</p>
      <Link to={to} className={classes.link}>
        {link}
      </Link>
    </div>
  );
}

export default Error;
