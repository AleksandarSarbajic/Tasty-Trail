import classes from "../cart/CartButton.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
export default function CartButton() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  if (totalQuantity === 0) return null;

  return (
    <li className={`${classes.item} hovered__button`}>
      <button className={classes.button}>
        <AiOutlineShoppingCart className={classes.icon} />
        <span className={classes.text}>Cart</span>
        <span className={classes.count}>{totalQuantity}</span>
      </button>
    </li>
  );
}
