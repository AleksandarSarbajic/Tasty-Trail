import classes from "../cartpage/CartItem.module.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cart-slice";
import CartModal from "./CartModal";
import { useState } from "react";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const raiseQuantityHandler = () => {
    dispatch(cartActions.addOneRemoveOne({ item, type: "raiseQuantity" }));
  };

  const lowerQuantityHandler = () => {
    if (item.quantity === 1) {
      setIsOpen((opened) => !opened);
    } else {
      dispatch(cartActions.addOneRemoveOne({ item, type: "lowerQuantity" }));
    }
  };

  const handleRemoveItem = () => {
    dispatch(cartActions.addOneRemoveOne({ item, type: "lowerQuantity" }));
  };

  return (
    <>
      {isOpen && (
        <CartModal
          isOpen={isOpen}
          onClick={() => setIsOpen(false)}
          onRemove={handleRemoveItem}
        />
      )}
      <li className={classes.cartItem}>
        <div className={classes.cartItemImage}>
          <img src={item.image} alt={item.name} loading="lazy" />
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
    </>
  );
}
