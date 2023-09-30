import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux";

import RootLayout from "./routes/RootLayout";
import Restoraunt, { loader as RestorauntLoader } from "./routes/Restoraunt";
import { IconContext } from "react-icons";
import LandingPage from "./routes/LandingPage";
import Discovery, { loader as discoveryLoader } from "./routes/Discovery";
import Food, { loader as foodLoader } from "./routes/Food";
import CartPage, { loader as discountLoader } from "./routes/CartPage";
import ContactPage from "./routes/ContactPage";
import RestorauntsPage, {
  loader as restorauntsLoader,
} from "./routes/Restoraunts";
import Aboutus from "./routes/Aboutus";
import HowItWorks from "./routes/HowItWorks";
import Search, { loader as searchLoader } from "./routes/Search";
import Market, { loader as marketsLoader } from "./routes/Market";
import ErrorFallBack from "./components/UI/ErrorFallBack";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorFallBack />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Restaurant",
        element: <p>TEST TEST TEST</p>,
      },
      {
        path: "/Restaurant/:id",
        id: "restoraunt",
        element: <Restoraunt />,
        loader: RestorauntLoader,
        children: [
          {
            path: "/Restaurant/:id/:food",
            id: "food",
            element: <Food />,
            loader: foodLoader,
          },
        ],
      },
      {
        path: "/Market/:id",
        id: "market",
        element: <Market />,
        loader: marketsLoader,
        children: [
          {
            path: "/Market/:id/:food",
            id: "component",
            element: <Food type={"component"} />,
            loader: foodLoader,
          },
        ],
      },
      {
        path: "/discovery",
        id: "discovery",
        element: <Discovery />,
        loader: discoveryLoader,
      },

      {
        path: "/discovery/:id",
        id: "restoraunts",
        element: <RestorauntsPage />,
        loader: restorauntsLoader,
      },
      {
        path: "/howitworks",
        id: "howitworks",
        element: <HowItWorks />,
      },
      {
        path: "/search",
        id: "search",
        loader: searchLoader,
        element: <Search />,
      },
      {
        path: "/aboutus",
        id: "aboutus",
        element: <Aboutus />,
      },

      {
        path: "/cart",
        id: "cart",
        element: <CartPage />,
        loader: discountLoader,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <RouterProvider router={router} />
        </IconContext.Provider>
      </Provider>
    </>
  );
}
export default App;
