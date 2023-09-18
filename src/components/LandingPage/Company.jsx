import classes from "../LandingPage/Company.module.scss";
import ReactCurvedText from "react-curved-text";
import { useInView } from "react-intersection-observer";
export default function Company() {
  // Dummy data for the companies TastyTrail has worked with
  const { ref: boxRef, inView: boxInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <section className={classes.container} ref={boxRef}>
      <h2 className={`${classes.heading} ${boxInView ? classes.opacity : ""}`}>
        Companies TastyTrail Has Worked With
      </h2>
      <div className={classes.list}>
        <div
          className={`${classes.company} ${boxInView ? classes.animate : ""}`}
        >
          <img
            src={"/McDonalds-Logo.png"}
            alt={"McDonald's"}
            className={classes.image}
            loading="lazy"
          />
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={180}
            rx={100}
            ry={100}
            startOffset={100}
            reversed={false}
            text={"McDonald's"}
            textProps={{ style: { fontSize: 20 } }}
            textPathProps={{ fill: "#333333" }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: "rotating-curved-text" }}
          />
        </div>
        <div
          className={`${classes.company} ${boxInView ? classes.animate : ""}`}
        >
          <img
            src={"/Kfc_logo.png"}
            alt={"KFC"}
            className={classes.image}
            loading="lazy"
          />
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={160}
            rx={100}
            ry={120}
            startOffset={60}
            reversed={false}
            text={"Kentucky Fried Chicken"}
            textProps={{ style: { fontSize: 20 } }}
            textPathProps={{ fill: "#333333" }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: "rotating-curved-text" }}
          />
        </div>
        <div
          className={`${classes.company} ${boxInView ? classes.animate : ""}`}
        >
          <img
            src={"/starbucks-logo.png"}
            alt={"StarBucks"}
            className={classes.bucks}
            loading="lazy"
          />
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={180}
            rx={100}
            ry={100}
            startOffset={105}
            reversed={false}
            text={"StarBucks"}
            textProps={{ style: { fontSize: 20 } }}
            textPathProps={{ fill: "#333333" }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: "rotating-curved-text" }}
          />
        </div>
        <div
          className={`${classes.company} ${boxInView ? classes.animate : ""}`}
        >
          <img
            src={"/Burger-King-Logo-1994.png"}
            alt={"BurgerKing"}
            className={classes.image}
          />
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={180}
            rx={100}
            ry={100}
            startOffset={102}
            reversed={false}
            text={"BurgerKing"}
            textProps={{ style: { fontSize: 20 } }}
            textPathProps={{ fill: "#333333" }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={{ className: "rotating-curved-text" }}
          />
        </div>
      </div>
    </section>
  );
}
