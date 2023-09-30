import classes from "./Hero.module.scss";
function AboutHero() {
  return (
    <header className={classes.hero}>
      <h1 className={classes.heading}>About Us</h1>
      <p className={classes.subheading}>
        Creckcook simplifies the process of finding and receiving what you
        desire, delivering it to you swiftly, dependably, and affordably. In
        doing this, we contribute to enhancing the quality of life in cities.
      </p>
    </header>
  );
}

export default AboutHero;
