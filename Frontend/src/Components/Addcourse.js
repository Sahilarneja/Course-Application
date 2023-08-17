import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const AddCourse = () => {
  useEffect(() => {
    document.title = "AddCourses || Course Application";
  }, []);

  const [course, setCourse] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
    console.log(course);

    // Send the form data to the server
    axios
      .post(`${base_url}/courses`, course)
      .then((response) => {
        console.log("Course added successfully:", response.data);
        toast.success("Course added successfully!"); // Show success toast
      })
      .catch((error) => {
        console.log("Error adding course:", error);
        toast.error("Failed to add course!"); // Show error toast
      });
  };
  

  // Function to clear the form fields
  const clearForm = () => {
    setCourse({}); // Reset the course state to an empty object
  };

  return (
    <Form onSubmit={handleForm}>
      <FormGroup>
        <Label for="userId">Course Id</Label>
        <Input
          type="text"
          placeholder="Enter here"
          name="userId"
          id="userId"
          value={course.id || ""}
          onChange={(e) =>
            setCourse((prevCourse) => ({ ...prevCourse, id: e.target.value }))
          }
        />
      </FormGroup>

      <FormGroup>
        <Label for="title">Course Title</Label>
        <Input
          type="text"
          placeholder="Enter Title here"
          id="title"
          value={course.title || ""}
          onChange={(e) =>
            setCourse((prevCourse) => ({ ...prevCourse, title: e.target.value }))
          }
        />
      </FormGroup>

      <FormGroup>
        <Label for="description">Course Description</Label>
        <Input
          type="textarea"
          placeholder="Enter Description here"
          id="description"
          value={course.description || ""}
          onChange={(e) =>
            setCourse((prevCourse) => ({
              ...prevCourse,
              description: e.target.value,
            }))
          }
        />
      </FormGroup>

      <Container className="text-center">
        <Button color="success" type="submit" className="mt-3 mr-3">
          Add Course
        </Button>
        <div className="my-3">
          <Button color="info" onClick={clearForm}>
            Clear
          </Button>
          </div>
      </Container>
    </Form>
  );
};

export default AddCourse;

