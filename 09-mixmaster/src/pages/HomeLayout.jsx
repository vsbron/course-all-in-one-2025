import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function HomeLayout() {
  // Returned JSX
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
