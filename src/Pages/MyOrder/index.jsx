import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const { order, user } = React.useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  let orderIndex = Object.keys(params) <= 0 ? order?.length - 1 : params.id;

  return (
    <div className="max-w-md container mx-auto w-full flex flex-col gap-y-4 items-start justify-start">
      {user?.username ? (
        <>
          <div className="flex items-center justify-start gap-x-4">
            <Link to={`/orders`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Link>

            {location.pathname !== "/order/last" ? (
              <h2 className="text-2xl font-bold">My order #{params.id}</h2>
            ) : (
              <h2 className="text-2xl font-bold">My last order</h2>
            )}
          </div>

          <div className="w-full h-fit flex flex-col items-start justify-start gap-y-4">
            {order.length > 0
              ? order?.[orderIndex].products.map((product) => (
                  <OrderCard
                    key={product.id.toString()}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    imgUrl={product.images?.[0]}
                  />
                ))
              : ""}
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default MyOrder;
