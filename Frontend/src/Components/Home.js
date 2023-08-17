import React from "react";
import { useEffect } from "react";
import {jumbotron , Container, Button} from 'reactstrap';
const Home = () => {

  useEffect(()=>{
    document.title="Home || Course Application";
    }, [])
    return (
        <>
          <jumbotron className="text-center bg-grey text-black p-4 my-4 rounded">
            <h1 >Course Application</h1>
            <p>
              This is developed by Sahil for learning purposes. The backend is built using Spring Boot and the frontend is built using React.js.
            </p>
            <Container>
              <Button outline color="success">Start Using</Button>
            </Container>
          </jumbotron>
        </>
      );
    }
    
  
  export default Home;