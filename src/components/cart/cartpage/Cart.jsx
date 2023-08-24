import classes from "../cartpage/Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { BsTrash3 } from "react-icons/bs";
import { Form } from "react-router-dom";
import { cartActions } from "../../../redux/cart-slice";
import { useEffect, useState } from "react";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const removeAllItemsHandler = () => {
    if (cart.items.length === cart.selectedItems.length) {
      dispatch(cartActions.removeAllItems());
    }
  };

  useEffect(() => {
    if (cart.selectedItems.length === 0) {
      setIsChecked(false);
    }
    if (cart.items.length === cart.selectedItems.length) {
      setIsChecked(true);
    }
  }, [cart.selectedItems]);

  const setAllCheckedItems = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      if (cart.items.length === 1) {
        dispatch(cartActions.selectItems(...cart.items));
      } else {
        dispatch(cartActions.selectItems(cart.items));
      }
    } else {
      if (cart.items.length === 1) {
      }
      dispatch(cartActions.selectItems([]));
    }
  };

  const addItemHandler = (item) => {};
  return (
    <div className={classes.cart}>
      <div className={classes.cartHeader}>
        <h2>Your Cart</h2>

        <button onClick={removeAllItemsHandler} disabled={!isChecked}>
          <BsTrash3 />
          Remove
        </button>
      </div>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Form>
            <input
              type="checkbox"
              className={classes.cartItemInput}
              checked={isChecked}
              onChange={setAllCheckedItems}
            />
            <p>Product</p>
          </Form>
          <p className={classes.quantity}>Quantity</p>
          <p>Price</p>
        </li>
        {cart.items.map((item) => {
          return (
            <CartItem
              key={item.name}
              item={item}
              check={isChecked}
              addItem={addItemHandler}
            />
          );
        })}
      </ul>
    </div>
  );
}
