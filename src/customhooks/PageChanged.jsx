import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { filterActions } from "../redux/filter-slice";

function PageChanged() {
  const location = useLocation();
  const prevLocation = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      dispatch(filterActions.setSort("Recommended"));
    }
    prevLocation.current = location.pathname;
  }, [dispatch, location]);

  return null;
}

export default PageChanged;
