import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";

function SignIn() {
  const { userData, setUser, user } = React.useContext(AppContext);
  const formRef = React.useRef(null);
  const [errorHandler, setErrorHandler] = React.useState(false);
  const route = useNavigate();

  const logInUser = (evt) => {
    evt.preventDefault();

    const formData = new FormData(formRef.current);
    let email = formData.get("email");
    let password = formData.get("password");

    if (userData?.email === email && userData?.password === password) {
      setErrorHandler(false);
      setUser(userData);
      return route("/");
    } else {
      return setErrorHandler(true);
    }
  };

  return (
    <div className="container mx-auto w-full h-full flex items-center justify-center">
      {user?.username ? (
        route("/")
      ) : (
        <form
          className="max-w-xs w-full h-screen flex flex-col justify-start items-start gap-y-4"
          ref={formRef}
          onSubmit={(evt) => logInUser(evt)}
        >
          <div className="flex flex-col items-start justify-start gap-y-1 w-full">
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-4 border border-black rounded-lg w-full text-lg font-medium"
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-y-1 w-full">
            <label htmlFor="password" className="text-xl font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="p-4 border border-black rounded-lg w-full text-lg font-medium"
            />
          </div>

          <button
            type="submit"
            className="p-4 bg-black rounded-lg outline-none w-full text-white items-center"
          >
            Sign In
          </button>

          {errorHandler === true ? (
            <span className="w-full h-fit">
              Account not match with our user data. Please try again.
            </span>
          ) : (
            ""
          )}

          <div className="flex flex-col items-start justify-start gap-y-1 w-full">
            <span className="font-light text-sm text-gray-400">
              Don&apos;t you have an account?
            </span>
            <Link to={`/sign-up`} className="w-full">
              <button
                type="button"
                className="p-4 bg-white rounded-lg outline-none w-full text-gray-400 items-center border border-gray-400"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignIn;
