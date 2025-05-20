import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Auth/AuthContext";

const Signup = () => {

  const {signUpWithEmail, update,setUser,user} = useContext(AuthContext);

  const handleSignUp = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {email, password, photoURL, name} = Object.fromEntries(formData.entries());
    console.log(email, password);
    signUpWithEmail(email, password).then(result=>{
      console.log(result.user);
      update({displayName:name, photoURL: photoURL}).then(result=>{
        console.log(result?.user);
        setUser({... result?.user, displayName:name, photoURL:photoURL})
      }).catch(error=>console.log(error));
    }).catch(error=>console.log(error));
  }

  return (
    <div className="hero bg-base-200 lg:min-h-[90vh] min-h-[80vh] px-3">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl shadow-primary">
        <div className="card-body">
          <h1 className="text-3xl text-primary font-bold">Sign Up now!</h1>
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Enter Your Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              placeholder="Enter Your Email"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input w-full"
              name="photoURL"
              placeholder="Enter The Phot URL"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover hover:text-primary">
                Forgot password?
              </a>
            </div>
            <button className="btn mt-4 text-primary bg-transparent border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-accent transition-all duration-300 ease-in-out">
              Sign Up
            </button>
            <p className="text-center text-lg">or</p>
             <button className="btn text-accent bg-gradient-to-r from-primary to-secondary border-primary hover:text-primary hover:bg-transparent hover:bg-none transition-all duration-300 ease-in-out">
              <FcGoogle size={20} />Sign Up With Google
            </button>
            <p className="text-accent">
              Already have any Account?{" "}
              <Link to="/login" className="link text-secondary">
               Login Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
