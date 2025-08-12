import { Outlet } from "react-router-dom";

function HomeLayout() {
  // Returned JSX
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
