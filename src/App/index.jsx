import { AppProvider } from "../Context";
import Home from "../Pages/Home";
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
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="/shop/:category" element={<Category />}  />
      <Route path="/my-account" element={<Profile />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/order/last" element={<MyOrder />} />
      <Route path="/order/:id" element={<MyOrder />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
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
