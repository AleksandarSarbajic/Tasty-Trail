import {
  Form,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import classes from "../Restoraunt/Content.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import ContentItem from "./ContentItem";
import { useEffect, useState, useCallback } from "react";
import Section from "./Section";
import { useSearchInItem } from "../../customhooks/useSearchInItem";

import LoadingSpinnerSmall from "../UI/LoadingSpinnerSmall";
import Error from "../UI/Error";

import { MdCancel } from "react-icons/md";

export default function ContentSecond({ content }) {
  const [text, setText] = useState("");

  const location = useLocation();
  const { exportData, isLoading } = useSearchInItem(
    text,
    100,
    location.pathname.includes("Market") ? "/Markets" : "/Restaurants",
    content.name
  );

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");

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

  const handlePopState = useCallback(() => {
    if (text !== "") {
      setText("");
      searchParams.delete("search");
      setSearchParams(searchParams);
    }

    if (location.hash === "" && text === "") {
      navigate("/discovery");
    }
  }, [text, location.hash, searchParams, setSearchParams, navigate]);

  useEffect(() => {
    if (query === null) {
      setText("");
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handlePopState, query]);

  function onChangeTextHandler(e) {
    setText(e.target.value);

    searchParams.set("search", e.target.value);
    setSearchParams(searchParams);
    if (e.target.value === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }
  function handleClearSearch(e) {
    e.preventDefault();

    setText("");
    searchParams.delete("search");
    setSearchParams(searchParams);
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
                value={text}
                className={classes.input}
                type="text"
                placeholder={`Search in ${content.name}`}
              />
              {text.length > 0 ? (
                <button
                  className={classes.cancelButton}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClearSearch();
                  }}
                >
                  <MdCancel className={classes.cancel} />
                </button>
              ) : (
                ""
              )}
            </div>
          </Form>
        </div>
      </div>
      {location.hash !== "" ? (
        <>
          <p className={classes.heading}>
            {location.hash.slice(1).replace(/-/g, " ")}
          </p>
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

      {isLoading && text !== "" ? (
        <div className={classes.spinnerContainer}>
          <LoadingSpinnerSmall state={isLoading} />
        </div>
      ) : text !== "" && exportData.length > 0 ? (
        <>
          <p className={classes.searchHeading}>
            Search results for &quot;{text}&quot;{" "}
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
      ) : text !== "" && exportData.length === 0 ? (
        <Error
          img={"/cart.png"}
          text="No results found"
          header={text}
          to="/discovery/restaraunts"
          alt={"cart"}
          link={"Clear search"}
          type={"button"}
          onClick={handleClearSearch}
        />
      ) : (
        ""
      )}
      {location.hash === "" && text === "" ? <Section types={content} /> : ""}
    </div>
  );
}
