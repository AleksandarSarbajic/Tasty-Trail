import { Link } from "react-router-dom";
import classes from "../LandingPage/Download.module.scss";
import { useInView } from "react-intersection-observer";

export default function Download() {
  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className={`${classes.container} ${gridInView ? classes.animate : ""}`}
      ref={gridRef}
    >
      <div className={classes.leftside}>
        <h2 className={classes.heading}>Place your order in seconds</h2>
        <div className={classes.buttons}>
          <Link to={"/discovery"} className={classes.link}>
            At your place for 10 minutes!
          </Link>
          <Link to={"/discovery"} className={classes.link}>
            Order fresh food right now!
          </Link>
        </div>
        <img
          src="/icons8-barcode-64.webp"
          className={classes.promoimg}
          alt="Barcode"
        />
        <p className={classes.code}>
          <span className={classes.circle}></span> #36C8E3
        </p>
        <p className={classes.text}>
          Receive a discount of{" "}
          <Link to={"/discovery"} className={classes.colored}>
            10%{" "}
          </Link>{" "}
          on your initial purchase by utilizing this promotional code!
        </p>
      </div>
      <div className={classes.rightside}>
        <img
          src="phone.webp"
          className={classes.img}
          alt="Image of our web in hand"
        />
      </div>
    </div>
  );
}
