import React from "react";
import { useRouteError } from "react-router-dom";
import img1 from "./../../Pages/Media/img1.png";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <img className="w-[70%] " src={img1} alt="" />
    </div>
  );
};

export default Error;
