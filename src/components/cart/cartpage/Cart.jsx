import classes from "../cartpage/Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { cartActions } from "../../../redux/cart-slice";

export default function Cart() {
  const { items, secondItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [firstCart, setFirstCart] = useState(false);
  const [secondCart, setSecondCart] = useState(false);

  useEffect(() => {
    if (firstCart === false && secondCart === false) {
      dispatch(cartActions.setSelectedCart("both"));
    }
    if (firstCart === true && secondCart === true) {
      dispatch(cartActions.setSelectedCart("both"));
    }
    if (firstCart === true && secondCart === false) {
      dispatch(cartActions.setSelectedCart("first"));
    }
    if (firstCart === false && secondCart === true) {
      dispatch(cartActions.setSelectedCart("second"));
    }
  }, [dispatch, firstCart, secondCart]);

  return (
    <div className={classes.cart}>
      {secondItems.length !== 0 && (
        <div className={classes.form}>
          <input
            type="checkbox"
            value={firstCart}
            onChange={() => {
              setFirstCart((value) => !value);
            }}
          />
          <h4 className={classes.heading}>First Cart</h4>
        </div>
      )}
      <ul className={classes.list}>
        <li className={classes.item}>
          <p>Product</p>
          <p className={classes.quantity}>Quantity</p>
          <p>Price</p>
        </li>
        {items.map((item) => {
          return <CartItem key={item.name} item={item} />;
        })}
        {secondItems.length > 0 ? (
          <>
            <div className={classes.form}>
              <input
                type="checkbox"
                value={secondCart}
                onChange={() => {
                  setSecondCart((value) => !value);
                }}
              />
              <h4 className={classes.heading}>Second Cart</h4>
            </div>

            <li className={classes.item}>
              <p>Product</p>
              <p className={classes.quantity}>Quantity</p>
              <p>Price</p>
            </li>
          </>
        ) : (
          ""
        )}
        {secondItems.map((item) => {
          return <CartItem key={item.name} item={item} />;
        })}
      </ul>
    </div>
  );
}
