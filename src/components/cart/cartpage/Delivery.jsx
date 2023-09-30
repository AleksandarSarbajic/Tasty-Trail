import { Form } from "react-router-dom";
import classes from "../cartpage/Delivery.module.scss";
import { useState, useRef, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adressActions } from "../../../redux/adress-slice";
import { useEffect } from "react";

function reducer(state, action) {
  if (action.type === "nameError") {
    return {
      ...state,
      nameError: action.payload,
    };
  }
  if (action.type === "emailError") {
    return {
      ...state,
      emailError: action.payload,
    };
  }
  if (action.type === "sameEmailError") {
    return {
      ...state,
      sameEmailError: action.payload,
    };
  }
  if (action.type === "phoneError") {
    return {
      ...state,
      phoneError: action.payload,
    };
  }
  if (action.type === "simillarError") {
    return {
      ...state,
      simillarError: action.payload,
    };
  }
}
const initialState = {
  nameError: false,
  emailError: false,
  sameEmailError: false,
  phoneError: false,
  simillarError: false,
};
export default function Delivery(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [stateError, dispatchError] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const sameEmailRef = useRef();
  const phoneRef = useRef();

  const address = useSelector((state) => state.adress);

  function onChangeHadnler() {
    setIsChecked(!isChecked);
  }
  function onClickHandler() {
    setIsChecked(!isChecked);
    dispatch(adressActions.toggle(!address.isShown));
  }

  function onInputHandler() {
    if (nameRef.current.value.length === 0) {
      dispatchError({ type: "nameError", payload: true });
    } else {
      dispatchError({ type: "nameError", payload: false });
    }
    if (emailRef.current.value.length === 0) {
      dispatchError({ type: "emailError", payload: true });
    } else {
      dispatchError({ type: "emailError", payload: false });
    }
    if (sameEmailRef.current.value.length === 0) {
      dispatchError({ type: "sameEmailError", payload: true });
    } else {
      dispatchError({ type: "sameEmailError", payload: false });
    }
    if (phoneRef.current.value.length === 0) {
      dispatchError({ type: "phoneError", payload: true });
    } else {
      dispatchError({ type: "phoneError", payload: false });
    }
    if (emailRef.current.value !== sameEmailRef.current.value) {
      dispatchError({ type: "simillarError", payload: true });
    } else {
      dispatchError({ type: "simillarError", payload: false });
    }
    props.getForm({
      name: nameRef.current.value,
      email: emailRef.current.value,
      sameEmail: sameEmailRef.current.value,
      phone: phoneRef.current.value,
    });
  }

  return (
    <div className={classes.container}>
      <p className={classes.formHeading}>Shipping address</p>
      <Form className={classes.form}>
        <div className={classes.formBox}>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Aleksandar Sarbajic"
            required
            ref={nameRef}
            onBlur={onInputHandler}
          />
          <span className={classes.error}>
            {stateError.nameError ? "Name is required" : ""}
          </span>
        </div>
        <div className={classes.formBoxEmail}>
          <div className={classes.formBox}>
            <label className={classes.emailLabel} htmlFor="email">
              Email address *
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className={classes.emailInput}
              required
              ref={emailRef}
              onBlur={onInputHandler}
            />
            <span className={classes.error}>
              {stateError.emailError
                ? "Email is required"
                : stateError.simillarError
                ? "Email is not same"
                : ""}
            </span>
          </div>
          <div className={classes.formBox}>
            <label htmlFor="email" className={classes.emailLabel}>
              Confirmation email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your confirmation email"
              className={classes.emailInput}
              required
              ref={sameEmailRef}
              onBlur={onInputHandler}
            />
            <span className={classes.error}>
              {stateError.sameEmailError
                ? "Email is required"
                : stateError.simillarError
                ? "Email is not same"
                : ""}
            </span>
          </div>
        </div>
        <div className={classes.formBox}>
          <label htmlFor="tel">Phone number *</label>
          <input
            type="tel"
            name="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="Enter your phone number (only digits)"
            required
            ref={phoneRef}
            onBlur={onInputHandler}
          />
          <span className={classes.error}>
            {stateError.phoneError ? "Phone is required" : ""}
          </span>
        </div>

        {address.adress.length !== 0 && (
          <div className={classes.formBoxRadio}>
            <input
              type="radio"
              name="radio"
              required
              checked={!isChecked}
              onChange={onChangeHadnler}
            />
            <label htmlFor="radio">Use your current adress *</label>
          </div>
        )}
        {address.adress.length === 0 && (
          <div className={classes.formBoxRadio}>
            <input
              type="radio"
              name="radio"
              required
              checked={isChecked}
              onChange={onChangeHadnler}
              onClick={onClickHandler}
            />
            <label htmlFor="radio">Type your new adress *</label>
          </div>
        )}
        {address.adress[0] && (
          <div className={classes.formBoxLocation}>
            <p className={classes.location}>Your location</p>
            <div>
              <span className={classes.type}>Type: </span>
              <span className={classes.location}>{address.adress[0].type}</span>
            </div>
            <div>
              <span className={classes.type}>Location: </span>

              <span className={classes.location}>
                {address.adress[0].location}
              </span>
            </div>
            <div>
              <span className={classes.type}>Entrance: </span>
              <span className={classes.location}>
                {address.adress[0].entrance}
              </span>
            </div>
            {address.adress[0].floor && (
              <div>
                <span className={classes.type}>Floor: </span>
                <span className={classes.location}>
                  {address.adress[0].floor}
                </span>
              </div>
            )}
            {address.adress[0].sifra && (
              <div>
                <span className={classes.type}>Password: </span>
                <span className={classes.location}>
                  {address.adress[0].sifra}
                </span>
              </div>
            )}
            <div>
              <span className={classes.type}>Other: </span>
              <span className={classes.location}>
                {address.adress[0].other}
              </span>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
}
