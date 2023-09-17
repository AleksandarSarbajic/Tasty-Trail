import { Link } from "react-router-dom";
import classes from "./Error.module.scss";
function Error({ img, text, link, to, alt, type = "link", onClick, header }) {
  return (
    <div className={classes.error}>
      <img src={img} className={classes.img} alt={alt} />
      <p className={classes.errorHeading}>&quot;{header}&quot;</p>
      <p className={classes.errorMessage}>{text}</p>
      {type === "link" ? (
        <Link to={to} className={classes.link}>
          {link}
        </Link>
      ) : (
        <button className={classes.button} onClick={onClick}>
          {link}
        </button>
      )}
    </div>
  );
}

export default Error;
