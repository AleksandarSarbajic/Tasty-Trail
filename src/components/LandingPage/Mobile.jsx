import {
  useState,
  useEffect,
  useCallback,
  useReducer,
  forwardRef,
} from "react";
import classes from "../LandingPage/Mobile.module.scss";
import { useWindowHeight } from "../../customhooks/useWindowHeight";

const info = [
  {
    number: 1,
    text: "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
    heading: "Find the perfect food for you",
    img: "/app-screen-1.png",
  },
  {
    number: 2,
    text: "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes!",
    heading: "Go to cart and check your order",
    img: "/app-screen-2.png",
  },
  {
    number: 3,
    text: "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
    heading: "Order your food, and it will be at your place in 10 minutes",
    img: "/app-screen-3.png",
  },
];
const reducer = (payload, action) => {
  switch (action.type) {
    case "FIRST":
      return [
        {
          text: info[0].text,
          heading: info[0].heading,
          img: info[0].img,
          number: info[0].number,
        },
      ];
    case "SECOND":
      return [
        {
          text: info[1].text,
          heading: info[1].heading,
          img: info[1].img,
          number: info[1].number,
        },
      ];
    case "THIRD":
      return [
        {
          text: info[2].text,
          heading: info[2].heading,
          img: info[2].img,
          number: info[2].number,
        },
      ];

    default:
      throw new Error("Should not get there");
  }
};
const Mobile = forwardRef(({ isVisible }, ref) => {
  const {
    windowHeight: {
      first: startingPosition,
      second: secondItem,
      third: thirdItem,
      close: closePosition,
    },
  } = useWindowHeight();
  const [userInfo, setUserInfo] = useReducer(reducer, [
    {
      text: info[0].text,
      heading: info[0].heading,
      img: info[0].img,
      number: info[0].number,
    },
  ]);

  console.log({ startingPosition, secondItem, thirdItem, closePosition });

  const [scrollY, setScrollY] = useState(0);
  const [classD, setClassD] = useState({});
  const [hidden, setHidden] = useState(true);

  const onScroll = useCallback(() => {
    const { pageYOffset } = window;

    setScrollY(pageYOffset);
    console.log(pageYOffset);
    if (pageYOffset >= startingPosition && isVisible) {
      setClassD({ fixed: classes.fixed, position: classes.position });
    } else {
      setClassD("");
      setUserInfo({ type: "FIRST" });
    }
    if (pageYOffset >= closePosition) {
      setClassD("");
      setHidden(false);
      setHidden(false);
    } else {
      setHidden(true);
    }
    if (pageYOffset >= secondItem[0] && pageYOffset <= secondItem[1]) {
      setUserInfo({ type: "SECOND" });
    }
    if (pageYOffset >= thirdItem[0] && pageYOffset <= thirdItem[1]) {
      setUserInfo({ type: "THIRD" });
    }
    // console.log(pageYOffset);
  }, [isVisible]);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

  return (
    <>
      <div
        className={`${classes.log} ${isVisible ? classes.animate : ""}`}
        ref={ref}
      >
        <div className={`${classD.fixed} ${classes.mobile}`}>
          <h2 className={classes.heading}>Try the app</h2>
          <p className={classes.subheading}>
            Experience the convenience of having a wide selection of Serbian
            cuisine from various restaurants delivered to you in minutes,
            catering to your specific preferences and requirements.
          </p>
          <div className={classes.grid}>
            <div className={classes.aside}>
              <p className={classes.number}>0{userInfo[0].number}</p>
              <p className={classes.direction}>{userInfo[0].heading}</p>
              <p className={classes.paragraph}>{userInfo[0].text}</p>
            </div>
            <img src={`${userInfo[0].img}`} className={classes.img} />
            {/* <img src="/public/app-screen-2.png" />
        <img src="/public/app-screen-3.png" /> */}
          </div>
        </div>
      </div>
      <div className={`${classes.height} ${hidden ? classes.hidden : ""}`}>
        <div className={`${classes.mobile}`}>
          <h2 className={classes.heading}>Try the app</h2>
          <p className={classes.subheading}>
            Experience the convenience of having a wide selection of Serbian
            cuisine from various restaurants delivered to you in minutes,
            catering to your specific preferences and requirements.
          </p>
          <div className={classes.grid}>
            <div className={classes.aside}>
              <p className={classes.number}>0{userInfo[0].number}</p>
              <p className={classes.direction}>{userInfo[0].heading}</p>
              <p className={classes.paragraph}>{userInfo[0].text}</p>
            </div>
            <img src={`${userInfo[0].img}`} className={classes.img} />
            {/* <img src="/public/app-screen-2.png" />
        <img src="/public/app-screen-3.png" /> */}
          </div>
        </div>
      </div>
      {/* <div className={classes.height}></div> */}
    </>
  );
});
Mobile.displayName = "Mobile";
export default Mobile;
