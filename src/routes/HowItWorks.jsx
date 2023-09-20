import { useEffect } from "react";
import AddItems from "../AddItems";
import Hero from "../components/howItWorks/Hero";
import HowItWorksContainer from "../components/howItWorks/HowItWorksContainer";
import useDocumentTitle from "../customhooks/useDocumentTitle";

function HowItWorks() {
  useDocumentTitle("How It Works | TastyTrail");

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Hero />
      <HowItWorksContainer />
      <AddItems />
    </>
  );
}

export default HowItWorks;
