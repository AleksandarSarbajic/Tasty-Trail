import { Link } from "react-router-dom";
import classes from "../components/Footer.module.scss";
import { BiUser } from "react-icons/bi";
export default function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.newslatter}>
        <p className={classes.news}>
          Join our newslatter to keep up with new food and discounts!
        </p>
        <form className={classes.form}>
          <div className={classes.absolute}>
            <BiUser className={classes.icon} />
            <input
              type="email"
              className={classes.input}
              placeholder="example@email.com"
            />
          </div>
          <button className={classes.button}>Subscribe</button>
        </form>
      </div>
      <div className={classes.list}>
        <div className={classes.logo}>
          <p className={classes.logotext}>TastyTrail</p>
          <p className={classes.logosub}>
            Place your food order through our application!
          </p>
        </div>
        <div className={classes.all}>
          <ul>
            <li className={classes.item}>
              <Link to={"/howitworks"} className={classes.link}>
                How it works
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/aboutus"} className={classes.link}>
                About us
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/contact"} className={classes.link}>
                Contact
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                Discovery
              </Link>
            </li>
          </ul>
          <ul>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                Company
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                Blog
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                Carriers
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                News
              </Link>
            </li>
          </ul>
          <ul>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                Resources
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                Parteners
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                Ordering
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={"/discovery"} className={classes.link}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.right}>
        <p className={classes.copy}>&copy; 2023 TastyTrail inc.</p>
        <div>
          <span className={classes.copy}>Terms of use</span>
          <span className={classes.copy}>Privacy Policy</span>
          <span className={classes.copy}>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
