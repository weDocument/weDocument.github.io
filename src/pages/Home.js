import React from 'react';
import { Paper } from '@material-ui/core';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <div
      className="jumbotron"
      style={{ textAlign: 'center', marginTop: '100px' }}
    >
      Home Page
    </div>
    <Row style={{ display: 'flex', justifyContent: 'center' }}>
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
        square
        className="col-lg-4"
        style={{
          textAlign: 'center',
          padding: '40px',
          marginRight: '10px',
          marginBottom: '10px',
        }}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/python.png"
          alt="pythonImage"
        />
        <br />
        <br />
        <Link to="/python">Python</Link>
      </Paper>
      <Paper
        variant="outlined"
        square
        className="col-lg-4"
        style={{
          textAlign: 'center',
          padding: '40px',
          marginRight: '10px',
          marginBottom: '10px',
        }}
      >
        <img
          src="https://img.icons8.com/ios/50/000000/html-5.png"
          alt="htmlImage"
        />
        <br />
        <br />
        <Link to="/html">HTML</Link>
      </Paper>
      <Paper
        variant="outlined"
        square
        className="col-lg-4"
        style={{
          textAlign: 'center',
          padding: '40px',
          marginRight: '10px',
          marginBottom: '10px',
        }}
      >
        <img
          src="https://img.icons8.com/wired/64/000000/css3.png"
          alt="cssImage"
        />
        <br />
        <br />
        <Link to="/css">CSS</Link>
      </Paper>
    </Row>
  </div>
);

export default Home;
