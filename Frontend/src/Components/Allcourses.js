import React, { useState, useEffect } from "react";
import Course from './Course';
import base_url from './../api/bootapi';
import axios from "axios";
import { toast } from "react-toastify";

const Allcourses = () => {


  useEffect(() => {
    document.title = "AllCourses || Course Application";
    getAllCoursesFromServer(); // Move the getAllCoursesFromServer call inside useEffect
  }, []);

  const updateCourse=(id)=>{
    setCourses(courses.filter((c) => c.id != id));
  };

  const [courses, setCourses] = useState([]);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`)
      .then((response) => {
        console.log(response.data);
        setCourses(response.data); // Set the state with the received data
        toast.success("Courses have been loaded");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <>
      <h1>All Course</h1>
      <p>List Of Courses are as follows</p>

      {courses.length > 0 ? (
        courses.map((item) => <Course key={item.id} course={item} update={updateCourse} />)
      ) : (
        "No Courses"
      )}
    </>
  );
};

export default Allcourses;