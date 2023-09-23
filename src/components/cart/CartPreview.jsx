import classes from "../cart/CartPreview.module.scss";

import { useSelector } from "react-redux";
import CartPreviewItem from "./CartPreviewItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useShowCart } from "../../customhooks/useShowCart";
export default function CartPreview() {
  const [maxMoney, setMaxMoney] = useState(0);
  const { items, secondItems, totalPrice, totalPriceSecond } = useSelector(
    (state) => state.cart
  );
  const { isShown, previewCartHandler } = useShowCart();

  useEffect(() => {
    items.map((item) => {
      setMaxMoney((prev) => prev + item.totalPrice);
    });
  }, [items]);

  if (items.length === 0 && secondItems.length === 0) return null;

  return (
    <>
      <div
        className={`${classes.absolute} hovered__absolute`}
        onMouseEnter={() => {
          if (window.innerWidth < 800) return;

          previewCartHandler();
        }}
      />
      <div
        className={`${classes.container} ${
          isShown ? classes.isShown : classes.isDisabled
        } `}
        onMouseLeave={() => {
          if (window.innerWidth < 800) return;
          previewCartHandler();
        }}
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

          {/* {items.length === 0 && secondItems.length === 0 ? (
            <>
              <img src="cart.png" alt="cart" className={classes.img} />
              <span className={classes.empty}>Your cart is empty!</span>
            </>
          ) : (
            ""
          )} */}
          {items.length > 0 && (
            <div
              className={`${
                secondItems.length === 0
                  ? classes.height
                  : secondItems.length === 1
                  ? classes.heightOneAndHalf
                  : secondItems.length > 1 && items.length === 1
                  ? classes.heightHalf
                  : ""
              } ${
                items.length === 1 && secondItems.length === 1
                  ? classes.heightHalf
                  : ""
              } ${classes.flex}`}
            >
              {items.map((item) => {
                return <CartPreviewItem key={item.name} item={item} />;
              })}
            </div>
          )}
          {items.length > 0 && secondItems.length > 0 ? (
            <p className={classes.secondCart}>Second Cart</p>
          ) : (
            ""
          )}
          {secondItems.length > 0 && (
            <div
              className={`${
                items.length === 0
                  ? classes.height
                  : items.length === 1
                  ? classes.heightOneAndHalf
                  : items.length > 1 && secondItems.length === 1
                  ? classes.heightHalf
                  : ""
              } ${classes.flex}
              
              ${
                items.length === 1 && secondItems.length === 1
                  ? classes.heightHalf
                  : ""
              }
              `}
            >
              {secondItems.map((item) => {
                return <CartPreviewItem key={item.name} item={item} />;
              })}
            </div>
          )}
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
          <div className={classes.totalBox}>
            {items.length > 0 ? (
              <p className={classes.total}>
                Restaurants Total: <span>{totalPrice} rsd</span>
              </p>
            ) : (
              ""
            )}
            {secondItems.length > 0 ? (
              <p className={classes.total}>
                Markets Total: <span>{totalPriceSecond} rsd</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
