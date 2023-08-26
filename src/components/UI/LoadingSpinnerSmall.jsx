import { useLoading } from "../../customhooks/useLoading";
import classes from "./LoadingSpinner.module.scss";
function LoadingSpinnerSmall() {
  const state = useLoading();

  if (state === "idle") return null;

  if (state === "loading")
    return (
      <div className={classes.containerMini}>
        <div className={classes.spinner} />
      </div>
    );
}

export default LoadingSpinnerSmall;
