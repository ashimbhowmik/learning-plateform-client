import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCart from "../CourseDetails/CourseCart";

const Course = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <h2>Dragon News Home: {allCourses.length}</h2>
      {allCourses.map((course) => (
        <CourseCart key={course.id} course={course}></CourseCart>
      ))}
    </div>
  );
};

export default Course;
