import React from "react";
import { AppContext } from "../../Context";

function Card({ title, price, category, image, data, id }) {
  const { detailsHandler, setProductInfo, addToCart, cartProducts } =
    React.useContext(AppContext);

  const showProductInfo = (infoDetails) => {
    detailsHandler(true);
    setProductInfo(infoDetails);
  };

  const iconHandler = (id) => {
    const isIntoCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isIntoCart) {
      return (
        <div className="absolute top-2 right-2 text-white text-sm flex justify-center items-center bg-black/20 rounded-full w-6 h-6 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-2 right-2 text-white text-sm flex justify-center items-center bg-black/20 rounded-full w-6 h-6 font-semibold"
          onClick={(event) => addToCart(event, data)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </div>
      );
    }
  };

  return (
    <div
      className="w-56 h-60 cursor-pointer rounded-lg lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
      onClick={() => showProductInfo(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 bg-black/20 text-white rounded-lg text-sm px-3 py-0.5 font-semibold">
          {category}
        </span>
        <img
          src={image}
          alt={title}
          className="object-cover object-center bg-no-repeat w-full h-full rounded-lg"
        />
        {iconHandler(id)}
      </figure>
      <p className="flex justify-between items-center w-full h-1/5">
        <span className="text-sm font-light">{title}</span>
        <span className="text-sm font-semibold">{price}$</span>
      </p>
    </div>
  );
}

export default Card;
