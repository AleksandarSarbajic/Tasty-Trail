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
              <div className={classes["history-images"]}>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt="ship"
                  className={classes.img}
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt="ship"
                  className={classes.img}
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt="ship"
                  className={classes.img}
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt="ship"
                  className={classes.img}
                />
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
                <p className={classes.boxHeading}>A lot of new content</p>
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
            <div className={`${classes.boxForth} ${classes.boxSecond}`}>
              <div className={classes.boxHeadSecond}>
                <p
                  className={`${classes.boxHeading} ${classes.boxHeadingSecond}`}
                >
                  Rebranded and redisigned
                </p>
                <p className={classes.boxDate}>12 Aug </p>
              </div>
              <div className={classes["history-images"]}>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt="ship"
                  className={classes.img}
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt="ship"
                  className={classes.img}
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
                  alt="ship"
                  className={classes.img}
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
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
