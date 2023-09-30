import { useDispatch } from "react-redux";
import classes from "./Modal.module.scss";
import { adressActions } from "../../redux/adress-slice";

export default function Modal(props) {
  const dispatch = useDispatch();

  function onCloseHandler() {
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
