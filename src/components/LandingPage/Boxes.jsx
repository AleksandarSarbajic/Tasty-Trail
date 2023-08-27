import { Link } from "react-router-dom";
import classes from "../LandingPage/Boxes.module.css";
import { MdSell } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { forwardRef } from "react";

const Boxes = forwardRef(({ isVisible }, ref) => {
  return (
    <div className={classes.container} ref={ref}>
      <h2 className={`${classes.title} ${isVisible ? classes.opacity : ""}`}>
        Our Community
      </h2>
      <div className={classes.grid}>
        <div className={`${classes.box} ${isVisible ? classes.firstbox : ""}`}>
          <MdSell className={classes.first} />
          <p className={classes.heading}>Start selling</p>
          <p className={classes.subheading}>
            Are you a restaurant owner looking to grow your business? Reach new
            customers when you join us.
          </p>
          <Link to={"/"} className={classes.link}>
            See more <span className={classes.arrow}>&#8594;</span>
          </Link>
        </div>
        <div className={`${classes.box} ${isVisible ? classes.secondbox : ""}`}>
          <TbTruckDelivery className={classes.second} />
          <p className={classes.heading}>Deliver happiness</p>
          <p className={classes.subheading}>
            Join our elite league of delivery riders delivering happiness to
            customers and earn to achieve your dreams while at it.
          </p>
          <Link to={"/"} className={`${classes.link} ${classes.second}`}>
            See more <span className={classes.arrow}>&#8594;</span>
          </Link>
        </div>
        <div className={`${classes.box} ${isVisible ? classes.thirdbox : ""}`}>
          <FaUserAlt className={classes.third} />
          <p className={classes.heading}>Behind the scenes</p>
          <p className={classes.subheading}>
            Our customers are our number one priority, so we focus on doing
            everything we can to do for you to fell satisfying.
          </p>
          <Link to={"/"} className={`${classes.link} ${classes.third}`}>
            See more <span className={classes.arrow}>&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
});

Boxes.displayName = "boxes";

export default Boxes;
