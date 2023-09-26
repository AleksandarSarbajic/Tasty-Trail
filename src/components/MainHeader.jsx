import { Link, useLocation } from "react-router-dom";
import classes from "../components/MainHeader.module.scss";

import { FiMapPin, FiChevronDown } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

import { useEffect, useState, useCallback } from "react";
import useLocationCity from "../customhooks/useLocationCity";
import { useSelector, useDispatch } from "react-redux";
import { adressActions } from "../redux/adress-slice";
import Modal from "./UI/Modal";
import ModalContent from "./discovery/ModalContent";
import CartButton from "./cart/CartButton";
import CartPreview from "./cart/CartPreview";
import SearchForm from "./search/SearchForm";

export default function MainHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const city = useLocationCity();
  const location = useLocation();

  const dispatch = useDispatch();
  const toggleModal = useSelector((state) => state.adress.isShown);

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

  return (
    <>
      {toggleModal && (
        <Modal visible={toggleModal}>
          <ModalContent />
        </Modal>
      )}
      <header
        className={`${classes.header} ${scrollY > 150 ? classes.fixed : ""} ${
          location.pathname.includes("/Restaurant") ||
          location.pathname.includes("/Market")
            ? classes.bg
            : ""
        }`}
      >
        <nav className={`${classes.nav}`}>
          <div className={classes.pin}>
            <Link
              to={`${
                location.pathname === "/" ||
                location.pathname === "/aboutus" ||
                location.pathname === "/contact" ||
                location.pathname === "/discovery" ||
                location.pathname === "/howitworks"
                  ? "/"
                  : "/discovery"
              } `}
              className={classes.logo}
            >
              Tasty Trail
            </Link>
            {location.pathname !== "/" && city && (
              <div
                className={classes.location}
                onClick={() => {
                  dispatch(adressActions.toggle(!toggleModal));
                }}
              >
                <FiMapPin className={classes.map} />
                <div>
                  <span>Delivery to</span>
                  <p>{city.city}</p>
                </div>
                <FiChevronDown />
              </div>
            )}
          </div>

          {location.pathname !== "/" &&
          location.pathname !== "/aboutus" &&
          location.pathname !== "/contact" &&
          location.pathname !== "/cart" &&
          location.pathname !== "/howitworks" ? (
            <SearchForm />
          ) : (
            <span className={classes.flex}> </span>
          )}
          {location.pathname === "/" ||
          location.pathname === "/aboutus" ||
          location.pathname === "/contact" ||
          location.pathname === "/cart" ||
          location.pathname === "/howitworks" ? (
            <>
              <button
                className={classes.menu}
                onClick={() => {
                  setShowSidebar((show) => !show);
                }}
              >
                <RxHamburgerMenu className={classes.menuBurger} />
              </button>
            </>
          ) : (
            ""
          )}
          <ul
            className={`${classes.list} ${
              showSidebar ? classes.transform : ""
            } ${
              location.pathname !== "/" &&
              location.pathname !== "/aboutus" &&
              location.pathname !== "/contact" &&
              location.pathname !== "/cart" &&
              location.pathname !== "/howitworks"
                ? classes.gone
                : ""
            }`}
          >
            {location.pathname === "/" ||
            location.pathname === "/aboutus" ||
            location.pathname === "/cart" ||
            location.pathname === "/contact" ||
            location.pathname === "/howitworks" ? (
              <>
                <li>
                  <Link
                    to={"/howitworks"}
                    className={classes.link}
                    onClick={() => {
                      if (window.innerWidth <= 800) {
                        setShowSidebar((show) => !show);
                      }
                    }}
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/aboutus"}
                    className={classes.link}
                    onClick={() => {
                      if (window.innerWidth <= 800) {
                        setShowSidebar((show) => !show);
                      }
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={classes.link}
                    onClick={() => {
                      if (window.innerWidth <= 800) {
                        setShowSidebar((show) => !show);
                      }
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li className={classes.border}>
                  <Link
                    to={"/discovery"}
                    className={classes.button}
                    onClick={() => {
                      if (window.innerWidth <= 800) {
                        setShowSidebar((show) => !show);
                      }
                    }}
                  >
                    Get Started
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
          {location.pathname !== "/" &&
          location.pathname !== "/aboutus" &&
          location.pathname !== "/cart" &&
          location.pathname !== "/contact" &&
          location.pathname !== "/howitworks" ? (
            <>
              <CartButton />

              {location.pathname !== "/" &&
              location.pathname !== "/aboutus" &&
              location.pathname !== "/cart" &&
              location.pathname !== "/contact" &&
              location.pathname !== "/howitworks" ? (
                <CartPreview />
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </nav>
      </header>
    </>
  );
}
