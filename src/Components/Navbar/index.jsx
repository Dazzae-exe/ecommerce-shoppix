import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../../Context";

function Navbar() {
  const { cartCounter, setSearchByCategory } = React.useContext(AppContext);
  const navigation = useLocation();
  const indexOfNavigation = navigation.pathname.substring(
    navigation.pathname.lastIndexOf("/") + 1
  );

  const setCategoryHandler = () => {
    if (indexOfNavigation === "clothes") {
      setSearchByCategory("shirts");
    } else if (indexOfNavigation === "furnitures") {
      setSearchByCategory("trousers");
    } else if (indexOfNavigation === "electronics") {
      setSearchByCategory("electronics");
    } else {
      setSearchByCategory("shoes");
    }
  };

  React.useEffect(() => {
    setCategoryHandler();
  }, [navigation.pathname]);

  return (
    <nav className="max-w-screen-xl w-[90%] mx-auto h-20 flex items-center justify-between">
      <ul className="w-full h-full flex items-center justify-start gap-x-3">
        <li>
          <NavLink to="/" className="font-semibold text-lg">
            Shoppix
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/clothes"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/electronics"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/furnitures"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/toys"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Toys
          </NavLink>
        </li>
      </ul>

      <ul className="w-full h-full flex items-center justify-end gap-x-3">
        <li className="text-gray-300">chris@gmail.com</li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span>{cartCounter}</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
