import classes from "../LandingPage/Slider.module.scss";
import { TbTruckDelivery } from "react-icons/tb";
import { WiSunrise } from "react-icons/wi";
import { IoFastFood } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { FcPhoneAndroid } from "react-icons/fc";
// import "./LogoCarousel.css"; // Create this file to add custom styles
export default function Slider() {
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <span className={classes.item}>
          <BiTimeFive className={classes.icon} />
          Live updates on orders
        </span>
        <span className={classes.item}>
          <IoFastFood className={classes.icon} />
          Quality meal choices
        </span>
        <span className={classes.item}>
          <FcPhoneAndroid className={classes.icon} />
          Mobile friendly usage of app
        </span>
        <span className={classes.item}>
          <TbTruckDelivery className={classes.icon} />
          Highly rated riders
        </span>
        <span className={classes.item}>
          <WiSunrise className={classes.icon} />
          24/7 support for customers and vendors
        </span>
      </div>
      <div className={classes.flex}>
        <span className={classes.item}>
          <BiTimeFive className={classes.icon} />
          Live updates on orders
        </span>
        <span className={classes.item}>
          <IoFastFood className={classes.icon} />
          Quality meal choices
        </span>
        <span className={classes.item}>
          <FcPhoneAndroid className={classes.icon} />
          Mobile friendly usage of app
        </span>
        <span className={classes.item}>
          <TbTruckDelivery className={classes.icon} />
          Highly rated riders
        </span>
        <span className={classes.item}>
          <WiSunrise className={classes.icon} />
          24/7 support for customers and vendors
        </span>
      </div>
    </div>
  );
}
