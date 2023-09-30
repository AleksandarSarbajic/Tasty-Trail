import Background from "../components/LandingPage/Background";
import Boxes from "../components/LandingPage/Boxes";
import Company from "../components/LandingPage/Company";
import Hero from "../components/LandingPage/Hero";
import Mobile from "../components/LandingPage/Mobile";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function LandingPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const { ref: boxRef, inView: boxInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: mobileRef, inView: mobileInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <>
      <LoadingSpinner />

      <Hero />
      <Mobile ref={mobileRef} isVisible={mobileInView} />
      <Boxes ref={boxRef} isVisible={boxInView} />
      {/* <p ref={ref}>{inView ? "Yes" : "no"}</p> */}
      <Background />
      <Company />
    </>
  );
}
