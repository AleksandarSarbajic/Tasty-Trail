import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import PageChanged from "../customhooks/PageChanged";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <main className="transition">
        <PageChanged />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
