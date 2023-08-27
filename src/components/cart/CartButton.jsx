import classes from "../cart/CartButton.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useShowCart } from "../../customhooks/useShowCart";

export default function CartButton() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { previewCartHandler } = useShowCart();
  if (totalQuantity === 0) return null;

  return (
    <li
      className={`${classes.item} hovered__button`}
      onMouseEnter={() => {
        if (window.innerWidth < 600) return;
        previewCartHandler();
      }}
      onMouseLeave={() => {
        if (window.innerWidth < 600) return;
        previewCartHandler();
      }}
      onClick={() => {
        if (window.innerWidth > 600) return;
        previewCartHandler();
      }}
    >
      <button className={classes.button}>
        <AiOutlineShoppingCart className={classes.icon} />
        <span className={classes.text}>Cart</span>
        <span className={classes.count}>{totalQuantity}</span>
      </button>
    </li>
  );
}
