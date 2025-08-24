import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

function HomeLayout() {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";

  // Returned JSX
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20 btn-primary">
        {isPageLoading ? <Loading /> : <Outlet />}
      </section>
    </>
  );
}

export default HomeLayout;
