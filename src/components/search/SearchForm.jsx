import { Form, Link } from "react-router-dom";
import classes from "./SearchForm.module.scss";
import { AiOutlineSearch, AiOutlineExclamationCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { useLoader } from "../../customhooks/useSearchData";
import LoadingSpinnerSmall from "../UI/LoadingSpinnerSmall";
import SearchItem from "./SearchItem";
function SearchForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { exportData, isLoading } = useLoader(searchText);

  function onClearFormHandler(e) {
    e.preventDefault();
    setSearchText("");
    setIsVisible((visible) => !visible);
  }

  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  const items = exportData.length > 5 ? exportData.slice(0, 5) : exportData;

  return (
    <Form
      className={classes.form}
      onClick={(e) => {
        if (e.type === "click" && e.target.tagName.toUpperCase() == "INPUT") {
          setIsVisible((visible) =>
            visible === false ? true : visible === true ? true : false
          );
        }
      }}
      onBlur={() => {
        setTimeout(() => {
          setIsVisible(false);
        }, 150);
      }}
    >
      <div className={classes.inner}>
        <div className={classes.inputBox}>
          <div className={classes.absolute}></div>
          <input
            type="text"
            value={searchText}
            className={`${classes.input} ${classes.inputIsVisible}`}
            onChange={handleSearchText}
            placeholder={"Search on Tasty Trail..."}
          />
          <AiOutlineSearch className={classes.search} />
          <div className={classes.buttonBox}>
            <button
              onClick={onClearFormHandler}
              className={`${classes.button} ${
                !searchText.length && classes.buttonIsInvisble
              }`}
            >
              <MdCancel className={classes.cancel} />
            </button>
          </div>
        </div>
        {searchText.length !== 0 && isVisible ? (
          <div className={classes.outsideBox}>
            <div className={classes.box}>
              <div className={classes.searchBox}>
                <div className={classes.itemsBox}>
                  {isLoading ? (
                    <LoadingSpinnerSmall state={isLoading} />
                  ) : items.length === 0 ? (
                    <p className={classes.empty}>
                      We didnt find anything, try typing something else 😀
                    </p>
                  ) : (
                    items.map((item) => (
                      <SearchItem item={item} key={item.name} />
                    ))
                  )}
                </div>
                {!isLoading ? (
                  <div className={classes.showBox}>
                    {exportData.length > 5 ? (
                      <Link
                        to={`/search?q=${searchText}`}
                        className={classes.showLink}
                      >
                        Display of all 14 results
                      </Link>
                    ) : null}
                    <Link to={"/"} className={classes.showSort}>
                      <AiOutlineExclamationCircle className={classes.icon} />{" "}
                      Find out how we find and sort search results
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Form>
  );
}

export default SearchForm;
