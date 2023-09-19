import classes from "../cartpage/Checkout.module.scss";
import { useSelector } from "react-redux";
import CheckOutItems from "./CheckOutItems";
import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
export default function CheckOut(props) {
  const { cart, adress } = useSelector((state) => state);

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
      // if (props.form?.email === props?.form.sameEmail) {
      // }
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
          navigate("#finish");
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
        <span className={classes.CheckOutPrice}>{cart.totalPrice} RSD</span>
      </div>
      <div>
        <span className={classes.CheckOutName}>Discount</span>
        <span className={classes.CheckOutPrice}>0 rsd</span>
      </div>
      <div className={classes.CheckOutLast}>
        <span className={classes.CheckOutNameFinal}>Grand total</span>
        <span className={classes.CheckOutPriceFinal}>
          {cart.totalPrice} RSD
        </span>
      </div>
      <button className={classes.CheckOutButton} onClick={onClickHandler}>
        {location.hash === "" ? "Checkout now" : "Order Now"}
      </button>
    </div>
  );
}
