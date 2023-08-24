import classes from "../discovery/ModalContent.module.scss";

import { AiTwotoneHome } from "react-icons/ai";

export default function ModalLocationItem(props) {
  return (
    <li className={classes.outline}>
      <button className={classes.button}>
        <AiTwotoneHome className={classes.icon} />
        <div>
          <p className={classes.home}>Home</p>
          <p>{props.city.location}</p>
        </div>
      </button>
    </li>
  );
}
