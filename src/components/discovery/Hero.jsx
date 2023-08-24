import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import classes from "../discovery/Hero.module.scss";

import HeroItem from "./HeroItem";
export default function Hero(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1600, min: 900 },
      items: 2,
    },
    laptop: {
      breakpoint: { max: 900, min: 601 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 601, min: 450 },
      items: 2,
    },
    bigmobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick }) => {
    // onMove means if dragging or swiping in progress.

    return (
      <button onClick={() => onClick()} className={classes.buttonRight}>
        <BsArrowRight className={classes.arrow} />
      </button>
    );
  };
  const CustomLeftArrow = ({ onClick }) => {
    // onMove means if dragging or swiping in progress.

    return (
      <button onClick={() => onClick()} className={classes.buttonLeft}>
        <BsArrowLeft className={classes.arrow} />
      </button>
    );
  };

  return (
    <div className={classes.hero}>
      <Carousel
        infinite={true}
        responsive={responsive}
        containerClass="zindex"
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        itemClass={classes.item}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        removeArrowOnDeviceType={["tablet", "bigmobile", "mobile"]}
      >
        {props.data.Restoraunts.map((item) => {
          return <HeroItem store={item} key={item.name} />;
        })}
      </Carousel>
    </div>
  );
}
