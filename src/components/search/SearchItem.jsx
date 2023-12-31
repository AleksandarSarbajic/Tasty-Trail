import { Link } from "react-router-dom";
import classes from "./SearchItem.module.scss";
import { MdOutlineDeliveryDining } from "react-icons/md";
function SearchItem({ item }) {
  return (
    <>
      <Link to={`/${item.type}/${item.link}`} className={classes.link}>
        <div className={classes.imgBox}>
          <div className={classes.imgInnerBox}>
            <img
              loading="lazy"
              decoding="async"
              className={classes.img}
              src={item.image}
              alt={item.text}
            />
          </div>
        </div>
        <div className={classes.textBox}>
          <p className={classes.heading}>{item.name}</p>
          <p className={classes.text}>{item.text}</p>
          <span className={classes.description}>
            <span className={classes.deliveryBox}>
              <MdOutlineDeliveryDining className={classes.icon} />
              <span className={classes.price}>{item.price}&nbsp; RSD</span>
            </span>
            <span className={classes.location}>{item.location}</span>
          </span>
        </div>
      </Link>
      <div style={{ borderBottom: "1px solid rgba(32, 33, 37, 0.12)" }} />
    </>
  );
}

export default SearchItem;
