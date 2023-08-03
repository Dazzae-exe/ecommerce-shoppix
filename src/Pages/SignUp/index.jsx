import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context";

function SignUp() {
  const formRef = React.useRef(null);
  const { setUserData, setUser, user, userLocalStorage } = React.useContext(AppContext);
  const route = useNavigate();

  const signUpForm = (evt, form) => {
    evt.preventDefault();
    const formData = new FormData(form.current);

    setUserData({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    setUser({
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    userLocalStorage();

    route("/");
  };

  return (
    <div className="container mx-auto w-full h-full flex items-center justify-center">
      {user?.username ? (
        route("/")
      ) : (
        <form
          className="max-w-xs w-full h-screen flex flex-col justify-start items-start gap-y-4"
          ref={formRef}
          onSubmit={(evt) => signUpForm(evt, formRef)}
        >
          <div className="flex flex-col items-start justify-start gap-y-1 w-full">
            <label htmlFor="username" className="text-xl font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="p-4 border border-black rounded-lg w-full text-lg font-medium"
            />
          </div>

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
            Sign Up
          </button>

          <div className="flex flex-col items-start justify-start gap-y-1 w-full">
            <span className="font-light text-sm text-gray-400">
              Do you have an account?
            </span>
            <Link to={`/sign-in`} className="w-full">
              <button
                type="button"
                className="p-4 bg-white rounded-lg outline-none w-full text-gray-400 items-center border border-gray-400"
              >
                Log In
              </button>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUp;
