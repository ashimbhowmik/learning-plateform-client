import { useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Premimu = () => {
  const singleCourseDetails = useLoaderData();
  console.log(singleCourseDetails);
  const { title, img, id, price } = singleCourseDetails;

  return (
    <div className="bg-slate-400 lg:py-[100px] p-4 lg:p-0 mt-8 mb-8">
      <div className="card lg:w-96 bg-base-100 shadow-xl image-full mx-auto my-20">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body relative p-5">
          <h1 className="text-slate-200 text-2xl font-bold">{title}</h1>
          <h1 className="text-slate-400 text-xl font-bold">Price : {price}$</h1>
          <h1 className="text-slate-400  font-bold">Course ID : {id}</h1>
          <div className="flex justify-between mt-[200px]">
            <button
              onClick={() => {
                toast.success("You have successfully buy this course", {
                  theme: "colored",
                });
              }}
              className="p-3 bg-red-500 hover:bg-orange-500 text-white font-bold rounded-xl"
            >
              Buy Course
            </button>

            <button
              onClick={() => {
                toast.error("Cancelled", {
                  theme: "colored",
                });
              }}
              className="p-3 bg-red-500 hover:bg-orange-500 text-white font-bold rounded-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Premimu;
