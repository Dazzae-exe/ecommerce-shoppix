import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CartCheckout from "../Components/CartCheckout";

function RootLayout() {
  return (
    <>
      <Navbar />

      <main className="max-w-screen-xl mx-auto">
        <Outlet />
        <CartCheckout />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default RootLayout;
