import React from "react";
import { AppContext } from "../../Context";
import { useLocation } from "react-router-dom";

function CheckoutCard({ title, description, price, imgUrl, id }) {
  const { cartProducts, setCartProducts } = React.useContext(AppContext);
  const location = useLocation();

  const deleteProductHandler = (id) => {
    const deleteProduct = cartProducts.filter((product) => product.id != id);

    setCartProducts(deleteProduct);
  };

  return (
    <div className="w-full h-32 flex items-center justify-between gap-x-2">
      <figure className="w-full h-full">
        <img
          src={imgUrl}
          alt="image api"
          className="w-full h-32 rounded-lg object-cover object-center"
        />
      </figure>

      <div className="w-full flex flex-col items-start justify-start gap-y-1">
        <h2>{title}</h2>
        <p className="truncate w-24">{description}</p>
      </div>

      <div className="w-full flex justify-between">
        <span>{price}$</span>
        {location.pathname !== `/orders/last` ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => deleteProductHandler(id)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CheckoutCard;
