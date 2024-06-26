import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ShoppingCart from "./ShoppingCart"
import CartPage from "./CartPage"
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout