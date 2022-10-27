import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const SingleCourse = () => {
  const singleCourseDetails = useLoaderData();
  console.log(singleCourseDetails);
  const { title, details, img, id, price } = singleCourseDetails;
  //   const { id } = useParams();

  //   const [SingleCourse, setSingleCourse] = useState([]);
  //   console.log(SingleCourse);

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/courses/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setSingleCourse(data);
  //       });
  //   }, [id]);
  return (
    <div className="h-screen">
      <section className="flex mt-[150px] w-[80%] mx-auto mb-14 rounded-lg  shadow-xl p-5 bg-slate-200 ">
        <figure className="w-[40%]">
          <img className="w-full h-full" src={img} alt="" />
        </figure>
        <div ref={ref} className="w-[60%] ml-8">
          <div className="flex items-center mb-5">
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
