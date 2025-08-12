import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";

// Create react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "cocktail", element: <Cocktail /> },
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
