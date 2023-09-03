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
                <img src="/img/ship.jpg" alt="ship" className={classes.img} />
                <p className={classes.text}>
                  Curabitur nulla odio bibendum sit amet, facilisis sed idm
                  lobotis id justo. Done csec sollicitudin facilisis. Phasellus
                  odio. Suspendisse scelerisque. Donec sit amet lorem vel quam
                  commodo euismod.
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
              <div className="history-images">
                <img src="/img/59.jpg" alt="ship" className="history-img" />
                <img src="/img/91.jpg" alt="ship" className="history-img" />
                <img
                  src="/img/dSJvdtu.jpg"
                  alt="ship"
                  className="history-img"
                />
                <img
                  src="/img/Njg2OTcyLmpwZw.jpg"
                  alt="ship"
                  className="history-img"
                />
              </div>
            </div>
            <div
              className={`${classes.diamondContainer} ${classes.diamondNumberEnd}`}
            >
              <div
                className={`${classes.diamond} ${classes["history-diamond-end"]} ${classes.diamondHistory}`}
              >
                <p className={classes.diamondNumber}>2023</p>
              </div>
            </div>
            <div className={`${classes.box} ${classes.boxThird}`}>
              <div className={classes.boxHead}>
                <p className={classes.boxDate}>13 sep</p>
                <p className={classes.boxHeading}>
                  PROJECT DELIVERING CELEBRATION
                </p>
              </div>
              <div className={classes["history-img-text"]}>
                <img src="/img/ship.jpg" alt="ship" className={classes.img} />
                <p className={classes.text}>
                  Curabitur nulla odio bibendum sit amet, facilisis sed idm
                  lobotis id justo. Done csec sollicitudin facilisis. Phasellus
                  odio. Suspendisse scelerisque. Donec sit amet lorem vel quam
                  commodo euismod.
                </p>
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
