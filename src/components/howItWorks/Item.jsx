import classes from "./Item.module.scss";
function Item({ img, heading, number, text, alt, className }) {
  return (
    <div className={classes.box}>
      <img className={classes.img} src={img} alt={alt} />
      <div className={classes.numberBox}>
        <span className={`${classes[className]} ${classes.number}`}>
          {number}
        </span>
      </div>
      <div className={classes.textBox}>
        <h4 className={classes.heading}>{heading}</h4>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
}

export default Item;
