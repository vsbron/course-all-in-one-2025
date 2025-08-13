import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

function HomeLayout() {
  // Returned JSX
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
