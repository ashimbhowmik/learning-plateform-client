import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthProvider/AuthProvider";
import useAuth from "../Hooks/useAuth";

const handleSignup = (name, email, password, registerUser, navigate) => {
  registerUser(email, password, name, navigate);
};

const SignUp = () => {
  const { user, registerUser, authError, isLoading, signInWithGoogle } =
    useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <div className=" bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card w-[45%]  my-14 shadow-2xl bg-base-100 ">
            <h1 className="text-center text-3xl mt-6">Sign Up</h1>
            <form
              className="card-body"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const email = e.target.email.value;
                const password = e.target.password.value;
                const confirm = e.target.confirm.value;

                if (password === confirm) {
                  handleSignup(name, email, password, registerUser, navigate);
                } else {
                  alert("Password mismatch!");
                }
              }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="full name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirm"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>

              <>
                {isLoading && (
                  <>
                    <div className="alert shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="stroke-info flex-shrink-0 w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span>Please Wait....</span>
                      </div>
                    </div>
                  </>
                )}
                {user?.email && (
                  <div className="toast toast-top toast-end">
                    <div className="alert alert-success">
                      <div>
                        <span>Sign Up Successfully</span>
                      </div>
                    </div>
                  </div>
                )}
              </>
              <>
                {authError && (
                  <>
                    <div className="alert alert-error shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{authError}</span>
                      </div>
                    </div>
                  </>
                )}
              </>
              <p>
                <small>
                  Already Have an Account
                  <Link to="/login">
                    <span className="underline ml-1">Login</span>
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;