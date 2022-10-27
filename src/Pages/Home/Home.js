import React from "react";
import { Link } from "react-router-dom";
import img2 from "./../../Pages/Media/img-1.gif";

const Home = () => {
  return (
    <div>
      <div className="lg:flex justify-center items-center mt-12 mb-12">
        <figure className="lg:w-[40%]">
          <img className="lg:w-full" src={img2} alt="" />
        </figure>
        <div className="lg:w-[60%]  ml-8 lg:ml-0">
          <h1 className="lg:text-5xl text-3xl font-extrabold dark:text-white ml-7 lg:ml-0">
            Learning Platform
          </h1>
          <p className="my-4 text-lg text-gray-500">
            The transformation of the education sector is relentless and the
            majority of university and school programs were bound to transfer to
            online platforms. Below we present examples of top educational
            platforms that will help you and your company or institution make
            the most of what elearning has to offer.
          </p>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Availabele Course : Javas , Python, Computer , Database , Software
            Engineering , Oparating System
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
          >
            Courses
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
