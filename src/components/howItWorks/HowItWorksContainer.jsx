import classes from "./HowItWorksContainer.module.scss";
import Item from "./Item";

const items = [
  {
    heading: "Open",
    text: "Open your application on your device, and search for food you want to eat.",
    img: "/undraw_progressive_app_m9ms.webp",
    alt: "image of application on phone and computer",
    id: crypto.randomUUID().toString(),
    speacialClass: "one",
  },
  {
    heading: "Add To Cart",
    text: "Add to cart item you would like to purchase, and continue shopping or go to cart.",
    img: "/undraw_Add_to_cart_re_wrdo.webp",
    alt: "image of application while addint to cart",
    id: crypto.randomUUID().toString(),
    speacialClass: "two",
  },
  {
    heading: "Delivery",
    text: "Our delivery man will pick up your order and it will be delivered as fast as possible.",
    img: "/undraw_delivery_truck_vt6p.webp",
    alt: "image of delivery map handing delivery",
    id: crypto.randomUUID().toString(),
    speacialClass: "three",
  },
];

function HowItWorksContainer() {
  return (
    <section className={classes.container}>
      {items.map((item, index) => (
        <Item
          key={item.id}
          number={index + 1}
          heading={item.heading}
          text={item.text}
          img={item.img}
          alt={item.alt}
          className={item.speacialClass}
        />
      ))}
    </section>
  );
}

export default HowItWorksContainer;
