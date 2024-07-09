import { Outlet } from "react-router-dom";// Import Outlet from react-router-dom for rendering nested routes
import Header from "./Header";
import Footer from "./Footer";


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
