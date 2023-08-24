import { useSelector } from "react-redux";
import classes from "../cartpage/Finish.module.scss";
import { CiCircleCheck } from "react-icons/ci";
export default function Finish(props) {
  const cart = useSelector((state) => state.cart);
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <CiCircleCheck className={classes.headerIcon} />
        <h2 className={classes.headerTitle}>Thanks for your order! </h2>
        <p className={classes.headerMessage}>
          The order confirmation has been sent to {formattedDate}
        </p>
      </div>
      <div className={classes.box}>
        <h3 className={classes.boxHeading}>Transacation Date</h3>
        <p className={classes.boxText}>{formattedDate}</p>
      </div>
      <div className={classes.box}>
        <h3 className={classes.boxHeading}>Transacation Date</h3>
        <p className={classes.boxText}>{formattedDate}</p>
      </div>
      <div className={classes.orderItems}>
        <h3 className={classes.orderItemsHeading}>Your Order</h3>
        <div className={classes.orderItemsMargin}>
          {cart.selectedItems.map((item) => {
            return (
              <div className={classes.orderItem} key={item.name}>
                <div className={classes.orderItemDetails}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={classes.orderItemImage}
                  />
                  <div className={classes.orderItemText}>
                    <p className={classes.orderItemName}>{item.name}</p>
                    <p className={classes.orderItemQuantity}>
                      x{item.quantity}
                    </p>
                  </div>
                </div>
                <p className={classes.orderItemPrice}>{item.totalPrice} rsd</p>
              </div>
            );
          })}
        </div>
        <div className={classes.checkBox}>
          <h3 className={classes.checkBoxHeading}>Subtotal</h3>
          <p className={classes.checkBoxText}> {cart.totalPrice} rsd</p>
        </div>
      </div>
      <div className={classes.checkOut}>
        <p className={classes.checkOutHeading}>Applied discount code</p>
        <p className={classes.checkOutDiscount}> 20% off </p>
      </div>
      <div className={classes.checkOut}>
        <p className={classes.checkOutHeading}>Discount</p>
        <p className={classes.checkOutText}> -0 rsd(0%) </p>
      </div>
      <div className={classes.checkOut}>
        <p className={classes.checkOutHeading}>Delivery</p>
        <p className={classes.checkOutText}> 160 rsd </p>
      </div>

      <div className={classes.checkOut}>
        <p className={classes.checkOutTotal}>Grand total</p>
        <p className={classes.checkOutPrice}> {cart.totalPrice} rsd</p>
      </div>
      <button className={classes.button}>Continue ordering food</button>
    </div>
  );
}
