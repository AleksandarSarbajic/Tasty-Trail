import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux";
import "./index.scss";
import RootLayout from "./routes/RootLayout";
import Restoraunt, { loader as RestorauntLoader } from "./routes/Restoraunt";
import { IconContext } from "react-icons";
import LandingPage from "./routes/LandingPage";
import Discovery, { loader as discoveryLoader } from "./routes/Discovery";
import Food, { loader as foodLoader } from "./routes/Food";
import CartPage from "./routes/CartPage";
import ContactPage from "./routes/ContactPage";
import RestorauntsPage, {
  loader as restorauntsLoader,
} from "./routes/Restoraunts";
import Aboutus from "./routes/Aboutus";
import HowItWorks from "./routes/HowItWorks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Restoraunt",
        element: <p>TEST TEST TEST</p>,
      },
      {
        path: "/Restoraunt/:id",
        id: "restoraunt",
        element: <Restoraunt />,
        loader: RestorauntLoader,
        children: [
          {
            path: "/Restoraunt/:id/:food",
            id: "food",
            element: <Food />,
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
        path: "/aboutus",
        id: "aboutus",
        element: <Aboutus />,
      },

      {
        path: "/cart",
        id: "cart",
        element: <CartPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <RouterProvider router={router} />
      </IconContext.Provider>
    </React.StrictMode>
  </Provider>
);
