import { Link } from "react-router-dom";
import classes from "../LandingPage/Hero.module.scss";
import { useState, useEffect } from "react";

const food = [
  "Are you hungry?",
  "Dont know what to eat?",
  "Looking for something new?",
  "Enjoy good food!",
  "Stuck in a food dilemma?",
  "Hungry and clueless?",
  "Looking for a tasty solution?",
  "Struggling with food decisions?",
  "Overwhelmed by food choices?",
];
export default function Hero() {
  const [text, setText] = useState("Are you hungry?");
  const [cloud, setCloud] = useState("");
  const [hidden, setHidden] = useState("");

  useEffect(() => {
    // setAnimation(classes.animation);
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * food.length);
      setText(food[randomIndex]);
    }, 5000);

    const interval = setInterval(() => {
      setCloud(classes.opacity);
      setHidden(classes.visible);
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={classes.hero}>
      <div className={classes.center}>
        <h1 className={`${classes.heading} ${hidden}`}>{text}</h1>
        <div className={`${classes.links} ${hidden}`}>
          <Link to={"/discovery"} className={classes.link}>
            Order fresh food right now!
          </Link>
          <Link to={"/discovery"} className={classes.link}>
            At your place in 10 minutes!
          </Link>
        </div>
        <p className={`${classes.subheading} ${hidden}`}>
          There are more than a thousand stores available to place food orders
          from!
        </p>
        <img
          className={`${classes.left} ${cloud}`}
          src="/cloud.webp"
          alt="Two clouds that are moving to the sides"
        />
        <img
          className={`${classes.right} ${cloud}`}
          src="/cloud.webp"
          alt="Two clouds that are moving to the sides"
        />
      </div>
    </section>
  );
}
