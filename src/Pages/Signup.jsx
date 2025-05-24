import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
import { auth } from "../firebase.init";

const Signup = () => {
  useEffect(()=> {
    document.title = "ProjectBuddies | Sign Up"
  }, []);
  const navigate = useNavigate();
  const { signUpWithEmail, update, setUser, googleSignup } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  console.log(error);

  const handleSignUp = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, photoURL, name } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password);
    signUpWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        update({ displayName: name, photoURL: photoURL })
          .then((result) => {
            console.log(result?.user);
            const currentUser = auth.currentUser;
            setUser({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: name,
              photoURL: photoURL,
            });
            Swal.fire({
              title: "Signup Sucessful!",
              icon: "success",
              draggable: true,
            });
            navigate("/");
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignup = () => {
    setError("");
    googleSignup()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Signup Sucessful!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };

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
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                className="w-full"
                type="password"
                required
                placeholder="Password"
                minLength="6"
                name="password"
                pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be at least 6 characters, including
              <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            <button className="btn mt-4 text-primary bg-transparent border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-accent transition-all duration-300 ease-in-out">
              Sign Up
            </button>
            <p className="text-center text-lg">or</p>
            <button
              onClick={handleGoogleSignup}
              type="button"
              className="btn text-accent bg-gradient-to-r from-primary to-secondary border-primary hover:text-primary hover:bg-transparent hover:bg-none transition-all duration-300 ease-in-out"
            >
              <FcGoogle size={20} />
              Sign Up With Google
            </button>
            <p className="text-accent">
              Already have any Account?{" "}
              <Link to="/login" className="link text-secondary">
                Login Here
              </Link>
            </p>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
