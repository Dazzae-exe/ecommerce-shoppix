import React from "react";
import { AppContext } from "../../Context";

function ProductDetails() {
  const { isProductDetailOpen, detailsHandler, productInfo } =
    React.useContext(AppContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } max-w-md w-full h-[calc(100vh-80px)] fixed right-0 top-20 border border-black rounded-lg p-4 bg-white flex-col items-start justify-start gap-y-4`}
    >
      <div className="w-full h-fit flex items-center justify-between">
        <h2 className="text-2xl font-bold">Product details</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black cursor-pointer"
          onClick={() => detailsHandler(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <figure className="w-full h-72">
        <img
          src={productInfo.images?.[0]}
          alt=""
          className="w-full h-full object-cover object-center bg-no-repeat rounded-lg"
        />
      </figure>

      <div className="w-full h-fit flex items-center justify-start gap-x-2">
        <h2 className="text-2xl font-bold">{productInfo.title}</h2>
        <span className="bg-gray-200 rounded-lg py-0.5 px-1 font-bold text-sm">{productInfo.price}$</span>
      </div>
        <p className="text-lg">{productInfo.description}</p>
    </aside>
  );
}

export default ProductDetails;
