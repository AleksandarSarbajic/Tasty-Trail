import classes from "../Restoraunt/Hero.module.scss";
import Aside from "./Aside";
// import Content from "./Content";
import ContentSecond from "./ContentSecond";
import Navigation from "./Navigation";
export default function RestorauntHero(props) {
  return (
    <>
      <div className={classes.absolute}>
        <img src={props.store.image} alt={props.alt} className={classes.img} />
      </div>
      <div className={classes.hero}>
        <Navigation store={props.store} />
        <div className={classes.main}>
          <Aside content={props.store} />
          <ContentSecond content={props.store} />
        </div>
      </div>
    </>
  );
}
