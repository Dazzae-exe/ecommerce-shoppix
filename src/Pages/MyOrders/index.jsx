import React from "react";
import OrdersCard from "../../Components/OrdersCard";
import { AppContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = React.useContext(AppContext);

  return (
    <div className="max-w-md mx-auto w-full flex flex-col items-start justify-start gap-y-4">
      <h2 className="text-2xl font-bold">My orders</h2>

      {order.map((order, index) => (
        <Link to={`/order/${index}`} key={index.toString()} className="w-full">
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </div>
  );
}

export default MyOrders;
