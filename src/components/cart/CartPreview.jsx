import classes from "../cart/CartPreview.module.scss";

import { useDispatch, useSelector } from "react-redux";
import CartPreviewItem from "./CartPreviewItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CartPreview() {
  const [maxMoney, setMaxMoney] = useState(0);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    cart.items.map((item) => {
      setMaxMoney((prev) => prev + item.totalPrice);
    });
  }, [cart.items]);
  return (
    <>
      <div className={`${classes.absolute} hovered__absolute`} />
      <div className={`${classes.container} hovered__cart`}>
        <div>
          <p className={classes.heading}>Cart</p>
          <div className={classes.flex}>
            {cart.items.map((item) => {
              return <CartPreviewItem key={item.name} item={item} />;
            })}
            {cart.items.length === 0 && (
              <>
                <img src="public/cart.png" alt="cart" className={classes.img} />
                <span className={classes.empty}>Your cart is empty!</span>
              </>
            )}
          </div>
        </div>
        <div className={classes.buttons}>
          <Link to={"/cart"} className={classes.finish}>
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
