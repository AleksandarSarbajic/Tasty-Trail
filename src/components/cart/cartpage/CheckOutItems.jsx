import { useDispatch, useSelector } from "react-redux";
import classes from "../cartpage/CheckOutItems.module.scss";
import { Form, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";
import { cartActions } from "../../../redux/cart-slice";

export default function CheckOutItems() {
  const cart = useSelector((state) => state.cart);
  const [discountCode, setDiscountCode] = useState("");
  const [isValid, setIsValid] = useState(true);

  const discount = useRouteLoaderData("cart");
  const dispatch = useDispatch();

  const checkOutItems =
    cart.selected === "first"
      ? cart.items
      : cart.selected === "second"
      ? cart.secondItems
      : cart.items.concat(cart.secondItems);

  function handleDiscount(e) {
    e.preventDefault();
    const filteredItem = discount.find(
      (item) => item.toLowerCase() === discountCode.toLowerCase()
    );
    if (filteredItem) {
      dispatch(cartActions.setDiscountPercent(10));
      setIsValid(true);
    } else {
      dispatch(cartActions.setDiscountPercent(1));
      setIsValid(false);
    }
  }

  return (
    <div className={classes.check}>
      <p className={classes.checkHeading}>Your Order</p>
      <div className={classes.container}>
        {checkOutItems.map((item) => {
          return (
            <div key={item.name} className={classes.checkItem}>
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className={classes.checkItemImg}
                />
                <div className={classes.checkItemText}>
                  <span className={classes.checkItemName}>{item.name}</span>
                  <span className={classes.checkItemPrice}>
                    x{item.quantity}
                  </span>
                </div>
              </div>
              <span className={classes.checkItemPrice}>
                {item.totalPrice} rsd
              </span>
            </div>
          );
        })}
      </div>
      <Form className={classes.form} onSubmit={handleDiscount}>
        <label htmlFor="code">Discount Code</label>

        <div>
          <input
            type="text"
            name="code"
            placeholder="Add Discount Code"
            value={discountCode}
            onChange={(e) => {
              setDiscountCode(e.target.value);
            }}
          />
          <button>Apply</button>
        </div>
        {!isValid && (
          <p className={classes.error}>Discount Code is not valid</p>
        )}
      </Form>
    </div>
  );
}
