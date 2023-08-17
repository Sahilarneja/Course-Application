import React from 'react';
import './App.css';
import Header from './Components/Header';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container, Row, Col } from 'reactstrap';
import Home from './Components/Home';
import Course from './Components/Course';
import AllCourses from './Components/Allcourses';
import AddCourse from './Components/Addcourse';
import Menu from './Components/Menu';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Allcourses from './Components/Allcourses';

const showAlert = () => {
  toast.success("Success");
};

function App() {
  return (
    <div>
      <Router>
      <ToastContainer />
      <Header />
      <Container>
        <div className="content-menu-container">
          <div className="content-side">
          <Menu/>
          </div>

          <div className="menu-side">
          <Routes>
              {/* Define your Routes here */}
              <Route path='/' element={<Home />} />
              <Route path='/add-course' element={<AddCourse />} />
              <Route path='/viewCourse' element={<Allcourses />} />
            </Routes>
          </div>
        </div>
      </Container>
      </Router>
    </div>
  );
}

export default App;
