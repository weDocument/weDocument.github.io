import React from 'react';
import { Paper } from '@material-ui/core';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import javaImage from '../images/java image.jpg';
// import pythonImage from '../images/python image.jpg';

const Home = () => (
  <div className="container">
    <div
      className="jumbotron"
      style={{ textAlign: 'center', marginTop: '100px' }}
    >
      Home Page
    </div>
    <Row>
      <Paper
        variant="outlined"
        elevation="10"
        square
        className="col-lg-4"
        style={{
          textAlign: 'center',
          padding: '50px',
          marginRight: '10px',
          marginBottom: '10px',
        }}
      >
        {/* <img */}
        {/*  src={javaImage} */}
        {/*  alt="javaImage" */}
        {/*  style={{ width: '150px', height: '150px', marginBottom: '10px' }} */}
        {/* /> */}
        <img
          src="https://img.icons8.com/ios/50/000000/java-coffee-cup-logo.png"
          alt="javaImage"
        />
        <br />
        <br />
        <Link to="/java"> Java</Link>
      </Paper>
      <Paper
        variant="outlined"
        // elevation={100}
        square
        className="col-lg-4"
        style={{
          textAlign: 'center',
          padding: '40px',
          marginRight: '10px',
          marginBottom: '10px',
        }}
      >
        {/* <img */}
        {/*  src={pythonImage} */}
        {/*  alt="pythonImage" */}
        {/*  style={{ width: '150px', height: '150px' }} */}
        {/* /> */}
        <img
          src="https://img.icons8.com/ios-filled/50/000000/python.png"
          alt="pythonImage"
        />
        <br />
        <br />
        <Link to="/python">Python</Link>
      </Paper>
    </Row>
  </div>
);

export default Home;
