import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const SingleCourse = () => {
  const singleCourseDetails = useLoaderData();
  console.log(singleCourseDetails);
  const { title, details, img, id, price } = singleCourseDetails;
  return (
    <div className="">
      <section className="lg:flex mt-10 lg:mt-[150px] lg:w-[80%] mx-auto mb-14 rounded-lg  shadow-xl p-5 bg-slate-200 ">
        <figure className="lg:w-[40%]">
          <img className="w-full h-full" src={img} alt="" />
        </figure>
        <div ref={ref} className="lg:w-[60%] lg:ml-8">
          <div className="flex items-center mb-5 mt-5 lg:mt-0">
            <h1 className="text-2xl font-bold mb-3 w-full">{title}</h1>
            <Pdf targetRef={ref} filename={`${title}.pdf`}>
              {({ toPdf }) => (
                <button
                  className="p-2 rounded-md bg-red-600 text-white"
                  onClick={toPdf}
                >
                  Download
                </button>
              )}
            </Pdf>
          </div>
          <p className="mb-3">{details}</p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">
              Price : <small>{price}$</small>
            </p>
            <Link to={`/premiumAccess/${id}`}>
              <button className="p-2 rounded-md bg-red-600 text-white">
                Get Primemum Access
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCourse;
