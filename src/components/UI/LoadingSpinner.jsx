import classes from "./LoadingSpinner.module.scss";
function LoadingSpinner() {
  return (
    <div className={classes.container}>
      <div className={classes.spinner} />
    </div>
  );
}

export default LoadingSpinner;
