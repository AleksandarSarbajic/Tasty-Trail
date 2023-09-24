import { useRouteError } from "react-router-dom";
import classes from "./ErrorFallBack.module.scss";

function ErrorFallBack() {
  let error = useRouteError();
  console.log(error.message);
  return (
    <div className={classes.main}>
      <div className={classes.box}>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button
          className={classes.button}
          onClick={() => window.location.replace("/discovery")}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorFallBack;
