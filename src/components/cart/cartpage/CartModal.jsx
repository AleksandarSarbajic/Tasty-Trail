import classes from "./CartModal.module.scss";
import { HiXMark } from "react-icons/hi2";
function CartModal({ isOpen, onClick, onRemove }) {
  return (
    <div className={classes.backdrop} onClick={onClick}>
      <div className={classes.container}>
        <button className={classes.exit} onClick={onClick}>
          <HiXMark className={classes.icon} />
        </button>
        <div>
          <div className={classes.item}>
            <h3 className={classes.heading}>
              Are you sure you want to delete an item?
            </h3>
            <p className={classes.subheading}>
              Are you sure you want to delete this item from permanently? This
              action cannot be undone.
            </p>
            <div className={classes.buttons}>
              <button className={classes.cancel} onClick={onClick}>
                Cancel
              </button>
              <button className={classes.delete} onClick={onRemove}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
