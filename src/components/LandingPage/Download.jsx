import { Link } from "react-router-dom";
import classes from "../LandingPage/Download.module.scss";
import { useInView } from "react-intersection-observer";

export default function Download() {
  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div
      className={`${classes.container} ${gridInView ? classes.animate : ""}`}
      ref={gridRef}
    >
      <div className={classes.leftside}>
        <h2 className={classes.heading}>Place your order in seconds</h2>
        <div className={classes.buttons}>
          <Link to={"/"} className={classes.link}>
            At your place for 10 minutes!
          </Link>
          <Link to={"/"} className={classes.link}>
            Order fresh food right now!
          </Link>
        </div>
        <img src="/icons8-barcode-64.png" className={classes.promoimg} />
        <p className={classes.code}>
          <span className={classes.circle}></span> #36C8E3
        </p>
        <p className={classes.text}>
          Receive a discount of{" "}
          <span className={classes.colored}>300 din </span>
          on your initial purchase by utilizing this promotional code!
        </p>
      </div>
      <div className={classes.rightside}>
        <img src="phone.webp" className={classes.img} />
      </div>
    </div>
  );
}
