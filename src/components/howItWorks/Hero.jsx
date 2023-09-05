import classes from "./Hero.module.scss";

function Hero() {
  return (
    <header className={classes.hero}>
      <h1 className={classes.heading}>
        How TastyTrail goes from ordering food online to food at your table in
        less than 30 minutes
      </h1>
    </header>
  );
}

export default Hero;
