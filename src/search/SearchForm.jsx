import { Form } from "react-router-dom";
import classes from "./SearchForm.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { useLoader } from "../customhooks/useSearchData";
function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const { exportData, isLoading } = useLoader(searchText);
  console.log(exportData);
  function onClearFormHandler(e) {
    setSearchText("");
    e.preventDefault();
    console.log(searchText);
  }

  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  return (
    <Form className={classes.form}>
      <div className={classes.inner}>
        <div className={classes.inputBox}>
          <div className={classes.absolute}></div>
          <input
            type="text"
            value={searchText}
            className={`${classes.input} ${classes.inputIsVisible}`}
            onChange={handleSearchText}
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
        <div className={classes.outsideBox}>
          <div className={classes.box}>
            <div className={classes.searchBox}>
              <div className={classes.itemsBox}>
                <p className={classes.empty}>We didnt find anything</p>
                {exportData.map((item) => (
                  <p>{item.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default SearchForm;
