import Background from "../components/LandingPage/Background";
import Boxes from "../components/LandingPage/Boxes";
import Company from "../components/LandingPage/Company";
import Hero from "../components/LandingPage/Hero";
import Mobile from "../components/LandingPage/Mobile";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "../components/UI/LoadingSpinner";
export default function LandingPage() {
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
