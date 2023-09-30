import classes from "./AboutBox.module.scss";
function AboutBox({ children }) {
  return <div className={classes.box}>{children}</div>;
}

export default AboutBox;
