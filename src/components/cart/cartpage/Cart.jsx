import classes from "../cartpage/Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { BsTrash3 } from "react-icons/bs";

// import { cartActions } from "../../../redux/cart-slice";
// import { useEffect, useState } from "react";
export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className={classes.cart}>
      <div className={classes.cartHeader}>
        <button>
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
          return <CartItem key={item.name} item={item} />;
        })}
      </ul>
    </div>
  );
}
