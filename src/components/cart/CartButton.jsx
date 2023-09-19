import classes from "../cart/CartButton.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useShowCart } from "../../customhooks/useShowCart";

export default function CartButton() {
  const totalQuantity = useSelector((state) => state.cart.items);
  const { previewCartHandler } = useShowCart();
  if (totalQuantity.length === 0)
    return <div className={classes.blank}>&nbsp;</div>;

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
        <span className={classes.count}>{totalQuantity.length}</span>
      </button>
    </li>
  );
}
