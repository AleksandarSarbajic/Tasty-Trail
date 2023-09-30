import classes from "../contact/FormPart.module.scss";

export default function FormPart() {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>
        Have any questions? Tell us your question and we will answer it.
      </h2>
      <p className={classes.subtitle}>
        Our customers feedback is very important for us!
      </p>
      <form className={classes.form} netlify>
        <div>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <input type="email" placeholder="example@email.com" />
        </div>
        <div className={classes.formAbout}>
          <label htmlFor="message">Tell us your question.</label>
          <input type="text" id="message" />
        </div>
        <button className={classes.formButton}>Send us an email!</button>
      </form>
    </div>
  );
}
