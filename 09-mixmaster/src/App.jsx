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
  { path: "/", element: <HomeLayout /> },
  { path: "/about", element: <About /> },
]);

function App() {
  // Returned JSX
  return (
    <RouterProvider router={router}>
      <main>
        <h1>MixMaster</h1>
      </main>
    </RouterProvider>
  );
}

export default App;
