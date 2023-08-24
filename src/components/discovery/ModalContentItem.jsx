import classes from "../discovery/ModalContentItem.module.scss";

import { FiPlus } from "react-icons/fi";

export default function ModalContentItem(props) {
  return (
    <li className={classes.outline}>
      <button
        className={classes.button}
        onClick={() => {
          props.onClick(1);
        }}
      >
        <FiPlus className={classes.icon} />
        <div>
          <p className={classes.home}>Add adress</p>
        </div>
      </button>
    </li>
  );
}
