import React from "react";
import { AppContext } from "../../Context";
import CheckoutCard from "../CheckoutCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

function CartCheckout() {
  const {
    isCartCheckoutOpen,
    checkoutHandler,
    cartProducts,
    handleCheckoutOrder,
    user,
  } = React.useContext(AppContext);

  return (
    <aside
      className={`${
        isCartCheckoutOpen ? "flex" : "hidden"
      } max-w-md w-full h-[calc(100vh-80px)] fixed right-0 top-20 border border-black rounded-lg p-4 bg-white flex-col items-start justify-start gap-y-4`}
    >
      <div className="w-full h-fit flex items-center justify-between">
        <h2 className="text-2xl font-bold">Orders</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black cursor-pointer"
          onClick={() => checkoutHandler(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="flex flex-col items-start justify-start w-full overflow-y-scroll gap-y-4 flex-1">
        {cartProducts.map((products) => (
          <CheckoutCard
            key={products.id.toString()}
            title={products.title}
            description={products.description}
            price={products.price}
            imgUrl={products.images?.[0]}
            id={products.id}
          />
        ))}
      </div>

      <div className="w-full flex items-end justify-start gap-x-1">
        <span>Total price:</span>
        <span className="font-semibold">{totalPrice(cartProducts)}$</span>
      </div>

      <Link to={user?.username ? `/order/last` : `/`} className="w-full h-fit">
        <button
          type="button"
          className="w-full h-fit py-1.5 rounded-lg border outline-none bg-black text-white"
          onClick={handleCheckoutOrder}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
}

export default CartCheckout;
