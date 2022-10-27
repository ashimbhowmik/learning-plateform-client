import { useLoaderData } from "react-router-dom";

const Premimu = () => {
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
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full b">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body relative p-5">
          <h1 className="text-slate-200 text-2xl font-bold">{title}</h1>
          <h1 className="text-slate-400 text-xl font-bold">Price : {price}$</h1>
          <h1 className="text-slate-400  font-bold">Course ID : {id}</h1>
          <div className="flex justify-between mt-[200px]">
            <button className="p-3 bg-red-500 hover:bg-orange-500 text-white font-bold rounded-xl">
              Buy Course
            </button>
            <button className="p-3 bg-red-500 hover:bg-orange-500 text-white font-bold rounded-xl">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premimu;
