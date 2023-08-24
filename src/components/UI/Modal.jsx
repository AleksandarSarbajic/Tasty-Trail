import { useDispatch } from "react-redux";
import classes from "./Modal.module.scss";
import { adressActions } from "../../redux/adress-slice";

import { useNavigate } from "react-router-dom";
export default function Modal(props) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  function onCloseHandler() {
    // navigate("/");
    dispatch(adressActions.toggle(!props.visible));
  }
  return (
    <>
      <div className={classes.backdrop} onClick={onCloseHandler} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}
