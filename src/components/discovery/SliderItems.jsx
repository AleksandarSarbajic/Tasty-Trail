import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import classes from "../discovery/SliderItems.module.scss";

import SliderItem from "./SliderItem";
export default function SliderItems(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1600, min: 900 },
      items: 3,
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
    <section className={classes.hero}>
      <div>
        <h2 className={classes.heading}>{props.heading}</h2>
        <Carousel
          slidesToSlide={3}
          infinite={true}
          responsive={responsive}
          containerClass="pt"
          autoPlay={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          autoPlaySpeed={5000}
          itemClass={classes.item}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          removeArrowOnDeviceType={["tablet", "bigmobile", "mobile"]}
        >
          {props.data.Restaurants.map((item) => {
            return (
              <SliderItem
                store={item}
                key={item.name}
                discount={props.discount}
              ></SliderItem>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
