import classes from "../cartpage/Container.module.scss";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import { useSelector } from "react-redux";
import EmptyItems from "./EmptyItems";
import Delivery from "./Delivery";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Finish from "./Finish";
import ProgressBar from "./ProgressBar";

export default function ContainerCart() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});
  const locataion = useLocation();

  const { items, secondItems } = useSelector((state) => state.cart);

  function setPageHandler(e) {
    setInputs(e);
  }
  function onClickHandler(e) {
    setError(e);
  }
  return (
    <div className={classes.items}>
      {items.length > 0 || secondItems.length > 0 ? (
        <div
          className={`${classes.grid} ${
            locataion.hash === "#checkout" ? classes.fullScreen : ""
          }`}
        >
          <ProgressBar />

          {locataion.hash === "" ? (
            <Cart />
          ) : locataion.hash === "#checkout" ? (
            <Delivery getForm={setPageHandler} error={error} />
          ) : (
            ""
          )}
          {locataion.hash === "#overview" ? (
            ""
          ) : (
            <CheckOut form={inputs} onClick={onClickHandler} />
          )}
        </div>
      ) : (
        <EmptyItems />
      )}
      {locataion.hash === "#overview" &&
      (items.length !== 0 || secondItems.length !== 0) ? (
        <Finish />
      ) : (
        ""
      )}
    </div>
  );
}
