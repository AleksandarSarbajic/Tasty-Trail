import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/cart-slice";
import classes from "../foodmodal/FoodContent.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function FoodContent({ foodItem, item }) {
  const dispatch = useDispatch();
  const { items, secondItems } = useSelector((state) => state.cart);
  const filter =
    item.type === "Market"
      ? secondItems.find((item) => item.name === foodItem.name)
      : items.find((item) => item.name === foodItem.name);

  const [orderNumber, setOrderNumber] = useState(filter ? filter.quantity : 1);
  const [totalPrice, setTotalPrice] = useState(
    filter ? filter.totalPrice : foodItem.price
  );
  const navigate = useNavigate();

  function addOrderNumberHandler(decision) {
    if (orderNumber === 1 && decision === "-" && !filter) {
      return;
    }
    if (orderNumber === 0 && decision === "-" && filter) {
      return;
    }
    if (decision === "+") {
      setOrderNumber((prev) => prev + 1);
      setTotalPrice((prev) => prev + foodItem.price);
    } else {
      setOrderNumber((prev) => prev - 1);
      setTotalPrice((prev) => prev - foodItem.price);
    }
  }
  function addToCartHandler() {
    const newItem = {
      ...foodItem,
      quantity: orderNumber,
      totalPrice,
      type: item.type,
      delivery: item.price,
      company: item.name,
    };
    console.log(item);
    if (orderNumber === 0) {
      dispatch(
        cartActions.removeFromCart({ name: foodItem.name, type: item.type })
      );
    } else {
      dispatch(
        cartActions.addToCart({
          item: newItem,
          type: item.type,
        })
      );
    }

    navigate(`/${item.type}/${item.link}`);
  }

  return (
    <div className={classes.foodContent}>
      <img
        src={foodItem.image}
        alt={foodItem.name}
        className={classes.image}
        loading="lazy"
      />
      <div className={classes.container}>
        <h1 className={classes.heading}>{foodItem.name}</h1>
        <p className={classes.price}>{foodItem.price} rsd</p>
        <p className={classes.description}>{foodItem.ingredients}</p>
        <div className={classes.flex}>
          <div className={classes.buttons}>
            <button
              className={classes.minus}
              disabled={orderNumber === 1 && !filter}
              onClick={() => addOrderNumberHandler("-")}
            >
              <AiOutlineMinus />
            </button>
            <span className={classes.number}>{orderNumber}</span>
            <button
              className={classes.plus}
              onClick={() => addOrderNumberHandler("+")}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <button className={classes.cart} onClick={addToCartHandler}>
            {!filter
              ? "Add to Cart"
              : orderNumber > 0
              ? "Update Cart"
              : "Remove from Cart"}
            {orderNumber !== 0 && <span>{totalPrice} RSD</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
