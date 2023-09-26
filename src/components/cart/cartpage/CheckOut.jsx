import classes from "../cartpage/Checkout.module.scss";
import { useSelector } from "react-redux";
import CheckOutItems from "./CheckOutItems";
import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
export default function CheckOut(props) {
  const cart = useSelector((state) => state.cart);
  const { adress } = useSelector((state) => state.adress);

  const navigate = useNavigate();
  const location = useLocation();

  function onClickHandler() {
    if (location.hash === "") {
      navigate("#checkout");
    }

    if (Object.keys(props.form).length !== 0) {
      // if (props.form?.name === "") {
      // }
      // if (props.form?.phone === "") {
      // }
      // if (props.form?.email === "" || props.form?.sameEmail === "") {
      // }
      if (props.form?.email !== props?.form.sameEmail) return;

      if (adress.length === 0) return;
      if (
        props.form?.name === "" ||
        props.form?.phone === "" ||
        props.form?.email === "" ||
        props.form?.SameEmail === ""
      ) {
        return;
      }

      if (
        props.form?.email.includes("@") &&
        props.form?.email.includes(".") &&
        props.form?.sameEmail.includes("@") &&
        props.form?.sameEmail.includes(".") &&
        props.form?.email === props?.form.sameEmail
      ) {
        if (location.hash === "#checkout") {
          navigate("#overview");
        }
      } else {
        return;
      }
    }
    return;
  }
  return (
    <div className={classes.CheckOut}>
      {location.hash === "" ? "" : <CheckOutItems />}
      <div>
        <span className={classes.CheckOutName}>Subtotal</span>
        <span className={classes.CheckOutPrice}>
          {cart.selected === "first"
            ? cart.totalPrice
            : cart.selected === "second"
            ? cart.totalPriceSecond
            : cart.totalPrice + cart.totalPriceSecond}{" "}
          RSD
        </span>
      </div>
      <div>
        <span className={classes.CheckOutName}>Discount</span>
        {cart.discount === 1 ? (
          <span className={classes.CheckOutPrice}>0 rsd</span>
        ) : (
          <span className={classes.CheckOutPrice}>
            {cart.selected === "first" && cart.discount > 1
              ? cart.totalPrice / cart.discount
              : cart.selected === "second" && cart.discount > 1
              ? cart.totalPriceSecond / cart.discount
              : (cart.totalPrice + cart.totalPriceSecond) / cart.discount}
            rsd
          </span>
        )}
      </div>
      <div className={classes.CheckOutLast}>
        <span className={classes.CheckOutNameFinal}>Grand total</span>
        {cart.discount === 1 ? (
          <span className={classes.CheckOutPriceFinal}>
            {cart.selected === "first"
              ? cart.totalPrice
              : cart.selected === "second"
              ? cart.totalPriceSecond
              : cart.totalPrice + cart.totalPriceSecond}{" "}
            RSD
          </span>
        ) : (
          <span className={classes.CheckOutPriceFinal}>
            {cart.selected === "first"
              ? cart.totalPrice - cart.totalPrice / cart.discount
              : cart.selected === "second"
              ? cart.totalPriceSecond - cart.totalPriceSecond / cart.discount
              : cart.totalPrice +
                cart.totalPriceSecond -
                (cart.totalPriceSecond + cart.totalPrice) / cart.discount}{" "}
            RSD
          </span>
        )}
      </div>
      <button className={classes.CheckOutButton} onClick={onClickHandler}>
        {location.hash === "" ? "Checkout now" : "Order Now"}
      </button>
    </div>
  );
}
