import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

function HomeLayout() {
  // Returned JSX
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20 btn-primary">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
