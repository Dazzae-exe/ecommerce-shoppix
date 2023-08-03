import React from "react";
import { AppContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const { user, setUser, removeUserLocalStorage } =
    React.useContext(AppContext);
  const navigate = useNavigate();

  const logOutUser = () => {
    removeUserLocalStorage();
    return setUser({});
  };

  return (
    <div className="mx-auto w-full container h-full flex flex-col items-center justify-start gap-y-4">
      {user?.username ? (
        <>
          <div className="flex flex-col items-start justify-start max-w-xs w-full">
            <h3 className="font-semibold text-xl">Username</h3>
            <span>{user?.username}</span>
          </div>

          <div className="flex flex-col items-start justify-start max-w-xs w-full">
            <h3 className="font-semibold text-xl">Password</h3>
            <span>{user?.password}</span>
          </div>

          <div className="flex flex-col items-start justify-start max-w-xs w-full">
            <h3 className="font-semibold text-xl">Email</h3>
            <span>{user?.email}</span>
          </div>

          <Link
            to={"/"}
            onClick={logOutUser}
            className="max-w-xs p-4 bg-black rounded-lg outline-none w-full text-white text-center"
          >
            Log out
          </Link>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default Profile;
