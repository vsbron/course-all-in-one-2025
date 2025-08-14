import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { action as newsletterAction } from "./pages/Newsletter";
import { loader as landingLoader } from "./pages/Landing";
import { loader as cocktailLoader } from "./pages/Cocktail";

import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

// Create react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: cocktailLoader,
      },
      { path: "newsletter", element: <Newsletter />, action: newsletterAction },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  // Returned JSX
  return <RouterProvider router={router} />;
}

export default App;
