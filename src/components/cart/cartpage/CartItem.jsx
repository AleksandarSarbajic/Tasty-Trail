import { Form } from "react-router-dom";
import classes from "../cartpage/CartItem.module.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../redux/cart-slice";
import { useState } from "react";
import { useEffect } from "react";
export default function CartItem({ item, check, addItem }) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.cart.selectedItems);
  const lowerQuantityHandler = () => {
    dispatch(cartActions.addOneRemoveOne({ item, type: "lowerQuantity" }));
  };
  const raiseQuantityHandler = () => {
    dispatch(cartActions.addOneRemoveOne({ item, type: "raiseQuantity" }));
  };
  useEffect(() => {
    const existingItem = selectedItems.find(
      (element) => element.name === item.name
    );
    if (check) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    if (existingItem) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [check]);
  const setIsCheckedHandler = () => {
    setIsChecked(!isChecked);

    addItem(item);
    dispatch(cartActions.selectItems(item));
  };
  return (
    <li className={classes.cartItem}>
      <Form>
        <input
          type="checkbox"
          className={classes.cartItemInput}
          checked={isChecked}
          onChange={setIsCheckedHandler}
        />
      </Form>
      <div className={classes.cartItemImage}>
        <img src={item.image} alt={item.name} />
        <div className={classes.cartItemName}>
          <span className={classes.cartItemText}>{item.name}</span>
          <span className={classes.cartItemIngredients}>
            {item.ingredients}
          </span>
        </div>
      </div>
      <div className={classes.cartButtons}>
        <button className={classes.cartButton} onClick={lowerQuantityHandler}>
          <AiOutlineMinus className={classes.cartButtonsIcon} />
        </button>
        <span className={classes.cartButtonsNumber}>{item.quantity}</span>
        <button className={classes.cartButton} onClick={raiseQuantityHandler}>
          <AiOutlinePlus className={classes.cartButtonsIcon} />
        </button>
      </div>
      <p className={classes.cartItemPrice}>{item.totalPrice} rsd</p>
    </li>
  );
}
