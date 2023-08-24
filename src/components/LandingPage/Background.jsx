import Slider from "./Slider";
import classes from "../LandingPage/Background.module.css";
import Download from "./Download";
import { useInView } from "react-intersection-observer";
export default function Background() {
  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={classes.background}>
      <div
        className={`${classes.grid} ${gridInView ? classes.animate : ""}`}
        ref={gridRef}
      >
        <div>
          <p
            className={`${classes.text} ${gridInView ? classes.animateF : ""}`}
          >
            Feeling hungry? Feeling too exhausted to prepare a
          </p>
          <p
            className={`${classes.text} ${gridInView ? classes.animateS : ""}`}
          >
            meal? Whether you have guests coming over or you
          </p>
          <p
            className={`${classes.text} ${gridInView ? classes.animateT : ""}`}
          >
            just want to add some convenience to your life,
          </p>
          <p
            className={`${classes.text} ${gridInView ? classes.animateFr : ""}`}
          >
            TastyTrail is the solution.
          </p>
        </div>
        <div
          className={`${classes.absolute} ${gridInView ? classes.image : ""}`}
        >
          <p className={classes.image}>
            Rest assured, TastyTrail has got you covered.
          </p>
          <img src="public/food.png" className={classes.img} />
        </div>
      </div>
      <Slider />
      <Download />
    </section>
  );
}
