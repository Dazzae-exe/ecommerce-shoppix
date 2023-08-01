import { AppProvider } from "../Context";
import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import NotFound from "../Pages/NotFound";
import SignIn from "../Pages/SignIn";
import "../App.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../Layout";
import Category from "../Pages/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="/shop/:category" element={<Category />}  />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/order/last" element={<MyOrder />} />
      <Route path="/order/:id" element={<MyOrder />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Route>
  )
);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
