import classes from "../contact/TextPart.module.scss";
import { AiFillWechat } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";

export default function TextPart() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <AiFillWechat className={classes.boxIcon} />
        <div className={classes.boxText}>
          <p className={classes.boxHeading}>Chat to us</p>
          <p className={classes.boxSub}>Our friendly team is here to help.</p>
          <a href="mailto:sleasarbajic@gmail.com" className={classes.boxEmail}>
            support@tastytrail.com
          </a>
        </div>
      </div>
      <div className={classes.box}>
        <GrMapLocation className={classes.boxIcon} />
        <div className={classes.boxText}>
          <p className={classes.boxHeading}>Visit us</p>
          <p className={classes.boxSub}>Come say hellp to our office.</p>
          <p className={classes.boxEmail}>
            100 Smith Street Collingwood VIC 3066 AU
          </p>
        </div>
      </div>
      <div className={classes.box}>
        <LuPhoneCall className={classes.boxIcon} />
        <div className={classes.boxText}>
          <p className={classes.boxHeading}>Call us</p>
          <p className={classes.boxSub}>Mon-Fri from 8am to 5pm.</p>
          <p className={classes.boxEmail}>+1(555) 000-0000</p>
        </div>
      </div>
    </div>
  );
}
