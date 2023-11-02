import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import AboutBoxContainer from "../components/aboutus/AboutBoxContainer";
import AboutHero from "../components/aboutus/Hero";
import OurHistory from "../components/aboutus/OurHistory";
import useDocumentTitle from "../customhooks/useDocumentTitle";
import AddItems from "../AddItems";

function Aboutus() {
  useDocumentTitle("About Us | TastyTrail");
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <LoadingSpinner />
      <AboutHero />
      <AboutBoxContainer />
      <OurHistory />
      <AddItems />
    </>
  );
}

export default Aboutus;
