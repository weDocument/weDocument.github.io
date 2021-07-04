import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Java from './languages/Java';
import Python from './languages/Python';
import Html from './languages/Html';
import Css from './languages/Css';
import Tools from './languages/Tools';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/java">
          <Java />
        </Route>
        <Route exact path="/python">
          <Python />
        </Route>
        <Route exact path="/html">
          <Html />
        </Route>
        <Route exact path="/css">
          <Css />
        </Route>
        <Route exact path="/tools">
          <Tools />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
