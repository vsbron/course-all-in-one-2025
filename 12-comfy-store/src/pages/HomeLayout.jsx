import { Outlet } from "react-router-dom";

function HomeLayout() {
  // Returned JSX
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Comfy</span>
      </nav>
      <section className="align-element py-20 btn-primary">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
