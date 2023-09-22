import classes from "./OurHistory.module.scss";

function OurHistory() {
  return (
    <section className={classes.container} id="history">
      <div className={classes["history-container"]}>
        <p className={classes.heading}>A Look Back At Our History</p>

        <div className={classes.history}>
          <div className={classes.diamondContainer}>
            <div className={classes.diamondHistory}>
              <p className={classes.diamondNumber}>2022</p>
            </div>
          </div>
          <div className={classes.boxes}>
            <div className={classes.box}>
              <div className={classes.boxHead}>
                <p className={classes.boxDate}>13 nov</p>
                <p className={classes.boxHeading}>The start of the project</p>
              </div>
              <div className={classes["history-img-text"]}>
                <img src="Kfc_logo.webp" alt="ship" className={classes.img} />
                <p className={classes.text}>
                  The first idea about the project started back in 2020 because
                  of the covid. In that hard times idea was lost, and it was
                  back in 2020. When we started to develop our app and gathered
                  our team of people.
                </p>
              </div>
            </div>
            <div className={classes.boxSecond}>
              <div className={classes.boxHeadSecond}>
                <p
                  className={`${classes.boxHeading} ${classes.boxHeadingSecond}`}
                >
                  First Working app
                </p>
                <p className={classes.boxDate}>20 dec</p>
              </div>
              <div className={classes["history-img-text"]}>
                <p className={classes.text}>
                  On December 20 2022, the first working application was
                  released to public. At first we were thinking about that our
                  company was gona fail, but huge amount of users suprised us
                </p>
                <img src="Kfc_logo.webp" alt="ship" className={classes.img} />
              </div>
            </div>
            <div
              className={`${classes.diamondContainer} ${classes.diamondCenter}`}
            >
              <div
                className={` ${classes["history-diamond-end"]} ${classes.diamondHistory}`}
              >
                <p className={classes.diamondNumber}>2023</p>
              </div>
            </div>
            <div className={`${classes.box} ${classes.boxThird}`}>
              <div className={classes.boxHead}>
                <p className={classes.boxDate}>26 jan</p>
                <p className={classes.boxHeading}>A lot of new brands joined</p>
              </div>

              <div className={classes["history-images"]}>
                <img
                  src="McDonalds-Logo.webp"
                  alt="Companies logo"
                  className={classes.img}
                />
                <img
                  src="Kfc_logo.webp"
                  alt="Companies logo"
                  className={classes.img}
                />
                <img
                  src="Burger-King-Logo-1994.webp"
                  alt="Companies logo"
                  className={classes.img}
                />
                <img
                  src="starbucks-logo.webp"
                  alt="Companies logo"
                  className={classes.img}
                />
              </div>
            </div>
            <div className={`${classes.boxForth} ${classes.boxSecond}`}>
              <div className={classes.boxHeadSecond}>
                <p
                  className={`${classes.boxHeading} ${classes.boxHeadingSecond}`}
                >
                  Rebranded and redisigned
                </p>
                <p className={classes.boxDate}>12 Aug </p>
              </div>
              <div className={classes["history-img-text"]}>
                <p className={classes.text}>
                  On jun 2023, we wanted to rebrand, change colors and the way
                  we work with others. We needed a good time to think about it
                  but we thought a lot about it and it was a very good route to
                  go.
                </p>
                <img
                  src="Kfc_logo.webp
                "
                  alt="ship"
                  className={classes.img}
                />
              </div>
            </div>
          </div>
          <div
            className={`${classes.diamondContainer} ${classes.diamondNumberEnd}`}
          >
            <div
              className={`${classes.diamond} ${classes["history-diamond-end"]} ${classes.diamondHistory}`}
            >
              <p className={classes.diamondNumber}>MORE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurHistory;
