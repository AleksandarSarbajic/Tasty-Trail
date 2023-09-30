
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../redux/showCart-slice";

export function useShowCart() {
  const isShown = useSelector((state) => state.showCart.isShown);

  const dispatch = useDispatch();

  function previewCartHandler() {
    dispatch(showCartActions.setIsShown());
  }
  return { isShown, previewCartHandler };
}
