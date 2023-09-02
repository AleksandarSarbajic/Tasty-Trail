import AboutBox from "./AboutBox";
import classes from "./AboutBoxContainer.module.scss";
function AboutBoxContainer() {
  return (
    <section className={classes.container}>
      <h3 className={classes.heading}>What exactly is this Wolt all about? </h3>
      <AboutBox>
        <div>
          <p className={classes.text}>
            Founded in Helsinki, we are a technology company known for our local
            commerce platform. Wolts mission is to make cities better places for
            customers, merchants and couriers alike. Wolts platform makes it
            easy for customers to order whatever they need on one app, for
            merchants to make additional sales, and for couriers to make
            meaningful earnings flexibly. To enable this, Wolt develops a wide
            range of technologies from local logistics to retail software and
            financial solutions, as well as operates its own grocery stores
            under the brand Wolt Market.
          </p>
          <p className={classes.text}>
            In November 2021, we announced that we&apos;re joining forces with
            the US-based company DoorDash. The transaction closed in May 2022,
            and since then we have been one team with DoorDash. Our CEO, Miki
            Kuusi leads all of DoorDash&apos;s international business in the 28
            countries outside of the US.
          </p>
          <p className={classes.text}>
            Together our aim is to build the best possible platform to serve
            merchants, consumers, and couriers in our existing and future
            markets. Our two companies share a strong vision for local commerce,
            and working side by side, we can accomplish more for all our
            stakeholders.
          </p>
        </div>
        <img
          src="public/phone.webp"
          className={classes.img}
          alt="Phone in someones hand"
        />
      </AboutBox>
      <h3 className={classes.heading}>
        Companies typically define their &quot;mission and vision.&quot; What do
        we have in terms of ours? `
      </h3>

      <AboutBox>
        <img
          src="public/TwoPeople.webp"
          className={classes.img}
          alt="Phone in someones hand"
        />
        <div>
          <p className={classes.text}>
            Wolt is – essentially – building new infrastructure. We build a
            connection between restaurants and retailers that want to make and
            sell food and other products, couriers that want to earn through
            delivering those products, and customers who want to free up time
            and effort to focus on the more important things in life. By doing
            this, we make our cities also better places to live. And by “better”
            we mean happier people: happier small enterprises that have more
            business and that can employ more people, happier couriers that have
            a flexible way to earn when they choose, happier customers who now
            have easy access to a great meal or anything else they need, exactly
            when and where they need it - and who get to save some of their
            precious time while they are at it.
          </p>
          <p className={classes.text}>
            Our vision is to build the digital world version of the shopping
            malls we used to frequent, this time brought to the convenience of
            our homes and workplaces within the half-hour or so. We started with
            the food court on top the floor, and have since expanded to
            groceries on the ground floor along with all the other shops, stores
            and boutiques in the middle – and we&apos;re still only getting
            started.
          </p>
        </div>
      </AboutBox>
    </section>
  );
}

export default AboutBoxContainer;
