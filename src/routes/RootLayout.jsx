import { Outlet, useNavigation } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/UI/LoadingSpinner";

export default function RootLayout() {
  const { state } = useNavigation();

  return (
    <>
      <MainHeader />
      <main>{state === "loading" ? <LoadingSpinner /> : <Outlet />}</main>
      <Footer />
    </>
  );
}
