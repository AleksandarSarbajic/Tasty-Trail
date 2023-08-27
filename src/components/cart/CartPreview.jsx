import classes from "../cart/CartPreview.module.scss";

import { useDispatch, useSelector } from "react-redux";
import CartPreviewItem from "./CartPreviewItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useShowCart } from "../../customhooks/useShowCart";
export default function CartPreview() {
  const [maxMoney, setMaxMoney] = useState(0);
  const cart = useSelector((state) => state.cart);
  const { isShown, previewCartHandler } = useShowCart();

  useEffect(() => {
    cart.items.map((item) => {
      setMaxMoney((prev) => prev + item.totalPrice);
    });
  }, [cart.items]);

  if (cart.items.length === 0) return null;

  return (
    <>
      <div className={`${classes.absolute} hovered__absolute`} />
      <div
        className={`${classes.container} ${
          isShown ? classes.isShown : classes.isDisabled
        } `}
      >
        <div>
          <div className={classes.close}>
            <p className={classes.heading}>Cart</p>
            <button
              className={classes.closeButton}
              onClick={() => {
                previewCartHandler();
              }}
            >
              <AiOutlineClose className={classes.icon} />
            </button>
          </div>
          <div className={classes.flex}>
            {cart.items.map((item) => {
              return <CartPreviewItem key={item.name} item={item} />;
            })}
            {cart.items.length === 0 && (
              <>
                <img src="cart.png" alt="cart" className={classes.img} />
                <span className={classes.empty}>Your cart is empty!</span>
              </>
            )}
          </div>
        </div>
        <div className={classes.buttons}>
          <Link
            to={"/cart"}
            onClick={() => {
              previewCartHandler();
            }}
            className={classes.finish}
          >
            Go to cart
          </Link>
          <p className={classes.total}>
            Total: <span>{cart.totalPrice} rsd</span>
          </p>
        </div>
      </div>
    </>
  );
}
