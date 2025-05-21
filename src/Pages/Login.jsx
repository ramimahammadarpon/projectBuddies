import React, { useContext } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Auth/AuthContext";

const Login = () => {

  const {googleSignup, login} = useContext(AuthContext);
  console.log(googleSignup);

  const handleGoogleSignup = () => {
    googleSignup().then(result=> {
      console.log(result);
    }).catch(error => console.log(error));
  }

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password).then(result=>{
      console.log(result)
    }).catch(error=> console.log(error));

  }

  return (
    <div className="hero bg-base-200 min-h-[90vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl shadow-primary">
        <div className="card-body">
          <h1 className="text-3xl text-primary font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover hover:text-primary">
                Forgot password?
              </a>
            </div>
            <button className="btn mt-3 text-primary bg-transparent border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-accent transition-all duration-300 ease-in-out">
              Login
            </button>
            <p className="text-center text-lg">or</p>
            <button type="button" onClick={handleGoogleSignup} className="btn text-accent bg-gradient-to-r from-primary to-secondary border-primary hover:text-primary hover:bg-transparent hover:bg-none transition-all duration-300 ease-in-out">
              <FcGoogle size={20} />Sign Up With Google
            </button>
            <p className="text-accent">
              Don't have any Account?{" "}
              <Link to="/signup" className="link text-secondary">
                sign up Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
