/** @format */

import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../ContextApi/ContextApi";

// import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { LoginWithEP, GoogleLogin } = useContext(authContext);
  //   const [loginUserEmail, setLoginUserEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  //token paile navigate korbo
  //   if (token) {
  //     console.log(token);
  //     navigate(from, { replace: true });
  //   }

  // login function
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log("Given(for login) Email,pass:", email, password);

    LoginWithEP(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user EP user Logged IN as:", user);
        // setLoginUserEmail(email);
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        const user = result.user;
        console.log("Google Logged in user :", user);
        // setLoginUserEmail(user.email);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  // const userInfoToDb = (name, email) => {
  //   const user = {
  //     name,
  //     email,
  //   };
  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.acknowledged) {
  //         setUserTokenEmail(email);
  //       }
  //     });
  // };
  return (
    <div className="mx-auto">
      <div className="hero-content ">
        <div className="card shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login</h1>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Type your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Type your password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
              <p className="mt-3">
                New to Task Manager??{" "}
                <Link className="link-hover text-secondary" to="/signup">
                  Sign Up Now
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <input className="btn" type="submit" value="Login" />
            </div>
          </form>
          <h3 className="text-center">Continue With Google Login</h3>
          <div className="flex flex-col justify-center">
            <button
              onClick={handleGoogleLogin}
              className="flex justify-center items-center flex-col  m-4 rounded-lg hover:bg-gradient-to-r from-secondary to-primary md:bg-slate-100 lg:bg-slate-100 bg-slate-700 "
            >
              <h1 className="text-5xl m-0 p-0">
                {/* <FcGoogle></FcGoogle> */}
              </h1>
              <h1 className="px-5 py-4 font-bold text-white lg:text-accent md:text-accent">
                Google
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
