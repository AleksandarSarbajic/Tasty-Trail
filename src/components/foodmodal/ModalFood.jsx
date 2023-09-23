import classes from "./Modal.module.scss";

import { useNavigate } from "react-router-dom";

import { VscChromeClose } from "react-icons/vsc";

export default function FoodModal(props) {
  const navigate = useNavigate();

  function onCloseHandler() {
    navigate(`/${props.item.type}/${props.item.link}`);
  }
  return (
    <>
      <div className={classes.backdrop} onClick={onCloseHandler} />
      <dialog open className={classes.modal}>
        {props.children}
        <button className={classes.button} onClick={onCloseHandler}>
          <VscChromeClose className={classes.close} />
        </button>
      </dialog>
    </>
  );
}
