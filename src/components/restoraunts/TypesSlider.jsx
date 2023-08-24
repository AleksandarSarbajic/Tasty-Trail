import classes from "../restoraunts/TypesSlider.module.scss";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import SliderMarketItem from "../discovery/SliderMarketItem";
import TypesItem from "./TypesItem";
export default function TypesSlider(props) {
  const [data, setData] = useState(
    Object.entries(props.data.Markets).map(([key, store]) => ({
      store,
    }))
  );

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1300 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 1300, min: 704 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 704, min: 500 },
      items: 3,
    },
    // bigmobile: {
    //   breakpoint: { max: 650, min: 432 },
    //   items: 2,
    // },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button onClick={() => onClick()} className={classes.buttonRight}>
        <BsArrowRight className={classes.arrow} />
      </button>
    );
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button onClick={() => onClick()} className={classes.buttonLeft}>
        <BsArrowLeft className={classes.arrow} />
      </button>
    );
  };

  return (
    <div className={classes.hero}>
      <div>
        <h2 className={classes.heading}>Categories</h2>
        <Carousel
          slidesToSlide={6}
          infinite={true}
          responsive={responsive}
          containerClass="zindex"
          autoPlay={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          autoPlaySpeed={5000}
          itemClass={classes.item}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          removeArrowOnDeviceType={["tablet", "bigmobile", "mobile"]}
        >
          {data.map((item, index) => {
            const { store } = item;
            return <TypesItem store={store} key={store.name} />;
          })}
        </Carousel>
      </div>
    </div>
  );
}
