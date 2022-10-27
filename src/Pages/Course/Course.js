import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCart from "../CourseDetails/CourseCart";

const Course = () => {
  const allCourses = useLoaderData();

  return (
    <div className="grid grid-cols-3">
      {allCourses.map((course) => (
        <CourseCart key={course.id} course={course}></CourseCart>
      ))}
    </div>
  );
};

export default Course;
