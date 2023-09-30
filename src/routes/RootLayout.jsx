import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <main className="transition">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
