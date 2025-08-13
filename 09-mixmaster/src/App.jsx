import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { loader as landingLoader } from "./pages/Landing";

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
      { path: "cocktail/:id", element: <Cocktail /> },
      { path: "newsletter", element: <Newsletter /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  // Returned JSX
  return <RouterProvider router={router} />;
}

export default App;
