import { AiFillHeart } from "react-icons/ai";
import classes from "./FavoriteButton.module.scss";
import { useEffect, useRef, useState } from "react";
import FavoriteModal from "./FavoriteModal";
import { useLocation } from "react-router-dom";

function FavoriteButton() {
  const items = JSON.parse(localStorage.getItem("favorite"));
  const location = useLocation();
  const prevLocation = useRef();

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      setIsOpen(false);
    }
    prevLocation.current = location.pathname;
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(items);
  }, [items]);

  if (items?.length === 0 || items === null) return null;

  return (
    <div className={classes.favorite}>
      <button
        className={classes.favoriteButton}
        onClick={() => setIsOpen((cur) => !cur)}
      >
        <AiFillHeart className={classes.favoriteIcon} />
      </button>
      {isOpen ? <FavoriteModal /> : null}
    </div>
  );
}

export default FavoriteButton;
