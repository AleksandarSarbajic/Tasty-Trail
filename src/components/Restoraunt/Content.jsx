import { Form, useLocation } from "react-router-dom";
import classes from "../Restoraunt/Content.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import ContentItem from "./ContentItem";
import { useEffect, useState, useCallback } from "react";
import Section from "./Section";

export default function Content({ content }) {
  const [scrollY, setScrollY] = useState(0);
  const [filter, setFilter] = useState([]);
  const location = useLocation();

  const onScroll = useCallback(() => {
    const { pageYOffset } = window;

    setScrollY(pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

  useEffect(() => {
    setFilter(() => {
      return content.food.filter((item) => {
        return `#${item.type}` === location.hash;
      });
    });
  }, [location.hash, content.food]);

  return (
    <div>
      <div className={classes.parent}>
        <div className={`${scrollY > 350 ? classes.fixed : ""}`}>
          <Form>
            <div className={classes.container}>
              <AiOutlineSearch className={classes.icon} />
              <input
                className={classes.input}
                type="text"
                placeholder={`Search in ${content.name}`}
              />
            </div>
          </Form>
        </div>
      </div>
      {location.hash && (
        <>
          <p className={classes.heading}>{location.hash.slice(1)}</p>
          <div className={classes.grid}>
            {filter.map((item) => (
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
      )}
      {location.hash === "" && <Section types={content}></Section>}
    </div>
  );
}
