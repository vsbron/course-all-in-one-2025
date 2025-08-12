import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Create react router
const router = createBrowserRouter([
  { path: "/", element: <h2>Home</h2> },
  { path: "/about", element: <h2>About</h2> },
  { path: "/temp", element: <h2>Temp</h2> },
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
