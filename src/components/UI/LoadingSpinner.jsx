import { useLoading } from "../../customhooks/useLoading";
import classes from "./LoadingSpinner.module.scss";
function LoadingSpinner() {
  const state = useLoading();

  if (state === "idle") return null;

  if (state === "loading")
    return (
      <div className={classes.container}>
        <div className={classes.spinner} />
      </div>
    );
}

export default LoadingSpinner;
