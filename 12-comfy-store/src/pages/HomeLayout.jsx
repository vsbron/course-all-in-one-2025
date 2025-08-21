import { Outlet } from "react-router-dom";

function HomeLayout() {
  // Returned JSX
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Comfy</span>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
