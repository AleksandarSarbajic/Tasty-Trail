import classes from "./LoadingSpinner.module.scss";
function LoadingSpinnerSmall({ state }) {
  if (state === false) return null;

  if (state === true)
    return (
      <div className={classes.containerMini}>
        <div className={classes.spinner} />
      </div>
    );
}

export default LoadingSpinnerSmall;
