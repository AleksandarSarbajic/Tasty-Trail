import classes from "../Restoraunt/SectionItem.module.scss";

import ContentItem from "./ContentItem";
export default function SectionItem({ types, number }) {
  const food = types.food.filter(
    (item, index) => item.type === types.types[number]
  );

  return (
    <>
      {types.food.filter((item, index) => item.type === types.types[number])
        .length !== 0 && (
        <>
          <p className={classes.heading}>{types.types[number]}</p>
          <div className={classes.grid}>
            {food.map((item, index) => {
              return (
                <ContentItem
                  name={item.name}
                  description={item.ingredients}
                  price={item.price}
                  image={item.image}
                  type={item.type}
                  key={item.name}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
