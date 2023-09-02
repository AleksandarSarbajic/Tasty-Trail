import LoadingSpinner from "../components/UI/LoadingSpinner";
import AboutBoxContainer from "../components/aboutus/AboutBoxContainer";
import AboutHero from "../components/aboutus/Hero";
import OurHistory from "../components/aboutus/OurHistory";

function Aboutus() {
  return (
    <>
      <LoadingSpinner />
      <AboutHero />
      <AboutBoxContainer />
      <OurHistory />
    </>
  );
}

export default Aboutus;
