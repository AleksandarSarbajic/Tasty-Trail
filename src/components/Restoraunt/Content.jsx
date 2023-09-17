import { Form, useLocation } from "react-router-dom";
import classes from "../Restoraunt/Content.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import ContentItem from "./ContentItem";
import { useEffect, useState, useCallback } from "react";
import Section from "./Section";
import { useSearchInItem } from "../../customhooks/useSearchInItem";

import LoadingSpinnerSmall from "../UI/LoadingSpinnerSmall";
import Error from "../UI/Error";

import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../redux/search-slice";

export default function Content({ content }) {
  const searchText = useSelector((state) => state.search.search);
  const dispatch = useDispatch();
  const { exportData, isLoading } = useSearchInItem(
    searchText,
    250,
    "/Restoraunts",
    content.name
  );
  const location = useLocation();

  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    const { pageYOffset } = window;

    setScrollY(pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

  function onChangeTextHandler(e) {
    dispatch(searchActions.setSearchText({ payload: e.target.value }));
  }
  function handleClearSearch(e) {
    e.preventDefault();
    dispatch(searchActions.setSearchText({ payload: "" }));
  }

  return (
    <div>
      <div className={classes.parent}>
        <div className={`${scrollY > 350 ? classes.fixed : ""}`}>
          <Form>
            <div className={classes.container}>
              <AiOutlineSearch className={classes.icon} />
              <input
                onChange={onChangeTextHandler}
                value={searchText}
                className={classes.input}
                type="text"
                placeholder={`Search in ${content.name}`}
              />
            </div>
          </Form>
        </div>
      </div>
      {location.hash !== "" ? (
        <>
          <p className={classes.heading}>{location.hash.slice(1)}</p>
          <div className={classes.grid}>
            {content.food
              .filter((item) => `#${item.type}` === location.hash)
              .map((item) => (
                <ContentItem
                  name={item.name}
                  description={item.ingredients}
                  price={item.price}
                  image={item.image}
                  type={item.type}
                  key={item.name}
                />
              ))}
          </div>
        </>
      ) : (
        ""
      )}

      {isLoading && searchText !== "" ? (
        <div className={classes.spinnerContainer}>
          <LoadingSpinnerSmall state={isLoading} />
        </div>
      ) : searchText !== "" && exportData.length > 0 ? (
        <>
          <p className={classes.searchHeading}>
            Search results for &quot;{searchText}&quot;{" "}
            <button
              className={classes.searchButton}
              onClick={handleClearSearch}
            >
              Clear saerch
            </button>
          </p>
          <div className={classes.grid}>
            {exportData.map((item) => (
              <ContentItem
                name={item.name}
                description={item.ingredients}
                price={item.price}
                image={item.image}
                type={item.type}
                key={item.name}
              />
            ))}
          </div>
        </>
      ) : searchText !== "" && exportData.length === 0 ? (
        <Error
          img={"/cart.png"}
          text="No results found"
          header={searchText}
          to="/discovery/restaraunts"
          alt={"cart"}
          link={"Clear search"}
          type={"button"}
          onClick={handleClearSearch}
        />
      ) : (
        ""
      )}
      {location.hash === "" && searchText === "" ? (
        <Section types={content} />
      ) : (
        ""
      )}
    </div>
  );
}
