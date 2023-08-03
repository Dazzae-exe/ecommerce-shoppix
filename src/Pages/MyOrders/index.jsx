import React from "react";
import OrdersCard from "../../Components/OrdersCard";
import { AppContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";

function MyOrders() {
  const { order, user } = React.useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto w-full flex flex-col items-start justify-start gap-y-4">
      {user?.username ? (
        <>
          <h2 className="text-2xl font-bold">My orders</h2>

          {order.map((order, index) => (
            <Link
              to={`/order/${index}`}
              key={index.toString()}
              className="w-full"
            >
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))}
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default MyOrders;
