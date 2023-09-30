import { Form } from "react-router-dom";
import classes from "../discovery/ModalSetLocation.module.scss";
import { useState, useRef } from "react";
export default function ModalSetLoaction(props) {
  const [labelClass, setLabelClass] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef(null);
  function containsNumbers(str) {
    return /[0-9]/.test(str);
  }

  function classesHandler(e) {
    if (e.target.value.length >= 1) {
      setLabelClass(true);
    } else {
      setLabelClass(false);
    }
    if (e.target.value.length >= 10 && containsNumbers(e.target.value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    props.getLocation(inputRef.current.value);
    props.onClick(2);
  }
  return (
    <div className={classes.location}>
      <p className={classes.heading}>Set adress</p>
      <Form className={classes.form} onSubmit={onSubmitHandler}>
        <div>
          <input
            id="input"
            type="text"
            className={classes.input}
            onChange={classesHandler}
            ref={inputRef}
          />
          <label
            htmlFor="input"
            className={`${classes.label} ${labelClass ? classes.animate : ""}`}
          >
            Name of the steet and number
          </label>
        </div>
        <button className={classes.button} disabled={isDisabled}>
          Continue
        </button>
      </Form>
    </div>
  );
}
