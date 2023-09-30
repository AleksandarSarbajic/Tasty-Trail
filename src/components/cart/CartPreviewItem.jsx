import classes from "../cart/CartPreviewItem.module.scss";

export default function CartPreviewItem({ item }) {
  return (
    <div className={classes.item}>
      <span className={classes.quantity}>x{item.quantity}</span>
      <img
        src={item.image}
        alt={item.name}
        className={classes.img}
        loading="lazy"
      />
      <p className={classes.name}>{item.name}</p>
      <p className={classes.price}>{item.totalPrice} rsd</p>
    </div>
  );
}
