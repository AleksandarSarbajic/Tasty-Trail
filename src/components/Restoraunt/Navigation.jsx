import classes from "../Restoraunt/Navigation.module.scss";
import { MdAccessTime, MdOutlineDeliveryDining } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useAddFavoriteItem from "../../customhooks/useFavoriteItem";
import { useEffect, useState } from "react";

export default function Navigation({ store }) {
  const [isLiked, setIsLiked] = useState(false);
  const { addItemHandler } = useAddFavoriteItem(store.id);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorite"));
    const item = items?.find((item) => item === store.id);
    if (item) {
      setIsLiked(true);
    }
  }, [store.id]);

  function onClickHandler() {
    setIsLiked((cur) => !cur);
    addItemHandler();
  }

  return (
    <div className={classes.nav}>
      <div>
        <h2 className={classes.heading}>{store.name}</h2>
        <p className={classes.subheading}>{store.text}</p>
        <div className={classes.links}>
          <p className={classes.text}>
            <BiStore className={classes.icon} /> {store.time}
          </p>
          <p className={classes.text}>
            <MdAccessTime className={classes.icon} /> {store.order} min
          </p>
          <p className={classes.text}>
            <MdOutlineDeliveryDining className={classes.icon} />
            {store.price} rsd
          </p>
        </div>
      </div>
      <div className={classes.favoriteBox}>
        <button className={classes.favoriteButton} onClick={onClickHandler}>
          {isLiked ? (
            <AiFillHeart className={classes.favoriteIcon} />
          ) : (
            <AiOutlineHeart className={classes.favoriteIcon} />
          )}
        </button>
      </div>
    </div>
  );
}
