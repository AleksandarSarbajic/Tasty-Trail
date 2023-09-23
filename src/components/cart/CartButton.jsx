import classes from "../cart/CartButton.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useShowCart } from "../../customhooks/useShowCart";
import { useLocation } from "react-router-dom";

export default function CartButton() {
  const { items, secondItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const { previewCartHandler } = useShowCart();
  console.log(secondItems.length);
  if (
    (items.length === 0 && secondItems.length === 0) ||
    location.pathname === "/cart"
  ) {
    return <div className={classes.blank}>&nbsp;</div>;
  }

  return (
    <li
      className={`${classes.item} hovered__button`}
      onMouseEnter={() => {
        if (window.innerWidth < 800) return;
        previewCartHandler();
      }}
      onMouseLeave={() => {
        if (window.innerWidth < 800) return;
        previewCartHandler();
      }}
      onClick={() => {
        if (window.innerWidth > 800) return;
        previewCartHandler();
      }}
    >
      <button className={classes.button}>
        <AiOutlineShoppingCart className={classes.icon} />
        <span className={classes.text}>Cart</span>
        <span className={classes.count}>
          {items.length + secondItems.length}
        </span>
      </button>
    </li>
  );
}
