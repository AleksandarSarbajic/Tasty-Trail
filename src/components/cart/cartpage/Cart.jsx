import classes from "../cartpage/Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { BsTrash3 } from "react-icons/bs";

import { cartActions } from "../../../redux/cart-slice";
import { useEffect, useState } from "react";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (cart.selectedItems.length === 0) {
      setIsChecked(false);
    }
    if (cart.items.length === cart.selectedItems.length) {
      setIsChecked(true);
    }
  }, [cart.items.length, cart.selectedItems]);

  return (
    <div className={classes.cart}>
      <div className={classes.cartHeader}>
        <button disabled={!isChecked}>
          <BsTrash3 />
          Remove
        </button>
      </div>
      <ul className={classes.list}>
        <li className={classes.item}>
          <p>Product</p>
          <p className={classes.quantity}>Quantity</p>
          <p>Price</p>
        </li>
        {cart.items.map((item) => {
          return <CartItem key={item.name} item={item} check={isChecked} />;
        })}
      </ul>
    </div>
  );
}
