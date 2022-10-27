import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import img3 from "./../../Pages/Media/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { user, logout } = useAuth();
  console.log(user);

  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user?.photoURL ? (
                <>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/courses">Course</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>

                  <li>
                    <Link onClick={logout}>Log Out</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">LogIn</Link>
                  </li>
                  <li>
                    <Link to="/signup">SignUp</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="">
            <img className="w-7 h-7" src={img3} alt="" />
          </div>
          <div className="btn btn-ghost normal-case text-xl font-bold">
            Learning Platform
          </div>
        </div>
        {user?.photoURL ? (
          <>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/courses">Course</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="mr-2">
                  <Link onClick={logout}>Log Out </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link to="/login">LogIn</Link>
                </li>
                <li className="mr-3">
                  <Link to="signup">SignUp</Link>
                </li>
              </ul>
            </div>
          </>
        )}
        <div className="mr-3 hidden lg:block">
          <button
            onClick={() => {
              setOpen(!open);
              open
                ? (localStorage.theme = "dark")
                : (localStorage.theme = "light");

              // On page load or when changing themes, best to add inline in `head` to avoid FOUC
              if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
              ) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            }}
            className="h-7 w-7 mt-1"
          >
            {open ? (
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            )}
          </button>
        </div>

        {user?.photoURL && (
          <div className="avatar online hidden lg:block ">
            <div
              className="w-12 rounded-full tooltip tooltip-bottom"
              data-tip={user?.displayName}
              title={user?.displayName}
            >
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
