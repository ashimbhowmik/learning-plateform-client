import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="mt-8 ml-8  ">
        {user?.photoURL && (
          <>
            {courses.map((course) => (
              <button
                className="mb-4 flex flex-col ml-10 p-3 bg-violet-500 text-white rounded-lg w-60 items-center"
                key={courses.id}
              >
                <Link to={`/courseDetails/${course.id}`}>{course.title}</Link>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
