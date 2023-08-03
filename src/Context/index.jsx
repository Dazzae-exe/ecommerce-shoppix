import React from "react";
import { totalPrice } from "../utils";

const AppContext = React.createContext();

function AppProvider({ children }) {
  // Original items data
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err))
  }, []);

  // Search by title data
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [searchByTitle, setSearchByTitle] = React.useState("");

  const inputSearchHandler = (event) => {
    setSearchByTitle(event.target.value);
    const searchItems = items?.filter((itemSearched) =>
      itemSearched.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
    setFilteredItems(searchItems);
  };

  // Search by category
  const [searchByCategory, setSearchByCategory] = React.useState("");

  const categoryHandler = () => {
    const categoryItems = items?.filter((categorySearched) =>
      categorySearched.category.name
        .toLowerCase()
        .includes(searchByCategory.toLowerCase())
    );

    setFilteredItems(categoryItems);
  };

  React.useEffect(() => {
    categoryHandler();
  }, [searchByCategory]);

  // Cart counter
  const [cartCounter, setCartCounter] = React.useState(0);

  // Open / Close - Details Product.
  const [isProductDetailOpen, setIsProductDetailOpen] = React.useState(false);
  const detailsHandler = (boolean) => setIsProductDetailOpen(boolean);

  // Details products information to show
  const [productInfo, setProductInfo] = React.useState({});

  // Cart flow - Add, delete, checkout aside
  const [cartProducts, setCartProducts] = React.useState([]);
  const [isCartCheckoutOpen, setIsCartCheckoutOpen] = React.useState(false);

  const checkoutHandler = (boolean) => setIsCartCheckoutOpen(boolean);

  const addToCart = (event, cartData) => {
    event.stopPropagation();
    setCartProducts([...cartProducts, cartData]);
    setCartCounter(cartCounter + 1);
    checkoutHandler(true);
  };

  // Cart ~ Orders
  const [order, setOrder] = React.useState([]);

  const handleCheckoutOrder = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setCartCounter(0);

    checkoutHandler(false);
  };

  // User sign in - log out - profile
  const [userData, setUserData] = React.useState({});
  const [user, setUser] = React.useState({});

  const userDataLocalStorage = () => {
    const userSetLocal = localStorage.setItem(
      "userData",
      JSON.stringify({}, null, 2)
    );
    const userGetLocal = localStorage.getItem("userData");

    if (!userGetLocal) {
      return userSetLocal;
    } else {
      localStorage.setItem("userData", JSON.stringify(userData, null, 2));
      return userGetLocal;
    }
  };

  const userLocalStorage = () => {
    const userSetLocal = localStorage.setItem(
      "user",
      JSON.stringify(user, null, 2)
    );
    const userGetLocal = localStorage.getItem("user");

    if (!userGetLocal) {
      return userSetLocal;
    } else {
      localStorage.setItem("user", JSON.stringify(user, null, 2));
      return userGetLocal;
    }
  };

  React.useEffect(() => {
    userLocalStorage();
  }, [user]);

  const removeUserLocalStorage = () => {
    return localStorage.removeItem("user");
  };

  React.useEffect(() => {
    userDataLocalStorage();
  }, [userData]);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        cartCounter,
        setCartCounter,
        isProductDetailOpen,
        detailsHandler,
        productInfo,
        setProductInfo,
        cartProducts,
        setCartProducts,
        addToCart,
        isCartCheckoutOpen,
        checkoutHandler,
        handleCheckoutOrder,
        order,
        inputSearchHandler,
        filteredItems,
        searchByTitle,
        categoryHandler,
        setSearchByCategory,
        searchByCategory,
        setUserData,
        userData,
        user,
        setUser,
        userLocalStorage,
        removeUserLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
