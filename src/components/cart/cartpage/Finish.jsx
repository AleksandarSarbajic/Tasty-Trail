import { useDispatch, useSelector } from "react-redux";
import classes from "../cartpage/Finish.module.scss";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../../redux/cart-slice";
export default function Finish() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const cart = useSelector((state) => state.cart);
  const { adress } = useSelector((state) => state.adress);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkOutItems =
    cart.selected === "first"
      ? cart.items
      : cart.selected === "second"
      ? cart.secondItems
      : cart.items.concat(cart.secondItems);

  const delivery =
    [...new Set(checkOutItems.map((item) => item.company))].length * 160;

  const currentDate = new Date();

  const orderTime = [30, 45];

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  useEffect(() => {
    if (adress.length === 0) navigate("/cart");
  }, [navigate, adress]);

  useEffect(() => {
    setCurrentTime(new Date());
  }, []);

  const addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  const updatedTimeFirst = addMinutes(currentTime, orderTime[0]);
  const updatedTimeSecond = addMinutes(currentTime, orderTime[1]);

  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  function onClickHandler() {
    dispatch(cartActions.removeAllItems());
    navigate("/discovery");
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <CiCircleCheck className={classes.headerIcon} />
        <h2 className={classes.headerTitle}>Thanks for your order! </h2>
        <p className={classes.headerMessage}>
          The order confirmation has been sent to {formattedDate}
        </p>
        <div className={classes.time}>
          <span>Estimated time for Delivery: </span>
          <div>
            <span>{updatedTimeFirst.toLocaleTimeString([], timeOptions)}</span>{" "}
            -{" "}
            <span>{updatedTimeSecond.toLocaleTimeString([], timeOptions)}</span>
          </div>
        </div>
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
          {checkOutItems.map((item) => {
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
          <p className={classes.checkBoxText}>
            {" "}
            {cart.selected === "first"
              ? cart.totalPrice
              : cart.selected === "second"
              ? cart.totalPriceSecond
              : cart.totalPrice + cart.totalPriceSecond}{" "}
            RSD
          </p>
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
        <p className={classes.checkOutText}>
          {delivery}
          rsd
        </p>
      </div>

      <div className={classes.checkOut}>
        <p className={classes.checkOutTotal}>Grand total</p>
        <p className={classes.checkOutPrice}>
          {" "}
          {cart.selected === "first"
            ? cart.totalPrice + delivery
            : cart.selected === "second"
            ? cart.totalPriceSecond + delivery
            : cart.totalPrice + cart.totalPriceSecond + delivery}{" "}
          RSD
        </p>
      </div>
      <button className={classes.button} onClick={onClickHandler}>
        Continue ordering food
      </button>
    </div>
  );
}
