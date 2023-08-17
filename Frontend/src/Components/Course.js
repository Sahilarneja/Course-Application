import React from "react";
import './Course.css';
import axios from "axios";
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from 'reactstrap';
import { toast } from "react-toastify"; // Make sure you have imported react-toastify and set it up in your app
import base_url from "../api/bootapi";
const Course = ({ course ,update}) => {

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`)
      .then((response) => {
        toast.success("Course deleted");
        update(id); // Call the update function passed down from the parent component
      })
      .catch((error) => {
        toast.error("Course not deleted");
      });
  };

  return (
    <Card className="course-card">
      <CardBody className="text-center">
        <CardSubtitle className="course-subtitle">
          {course.title}
        </CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger" className="course-button" onClick={() => {
            deleteCourse(course.id);
          }}>Delete</Button>
          <Button color="info ml-3" className="course-button">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;