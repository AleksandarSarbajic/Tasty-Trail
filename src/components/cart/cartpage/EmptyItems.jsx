import classes from "../cartpage/EmptyItems.module.scss";
import { Link } from "react-router-dom";
export default function EmptyItems() {
  return (
    <>
      <div className={classes.emptyItems}>
        <h2>Your cart is empty</h2>
        <p>Please add some items to the cart!</p>
        <img src="public/cart.png" alt="cart" />
        <Link to="/discovery" className={classes.emptyItemsLink}>
          Discover new food!
        </Link>
      </div>
    </>
  );
}
