import { useSelector } from "react-redux";
import classes from "../cartpage/CheckOutItems.module.scss";
import { Form } from "react-router-dom";

export default function CheckOutItems() {
  const cart = useSelector((state) => state.cart);
  const checkOutItems =
    cart.selected === "first"
      ? cart.items
      : cart.selected === "second"
      ? cart.secondItems
      : cart.items.concat(cart.secondItems);

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
      <Form className={classes.form}>
        <label htmlFor="code">Discount Code</label>
        <div>
          <input type="text" name="code" placeholder="Add Discount Code" />
          <button>Apply</button>
        </div>
      </Form>
    </div>
  );
}
