import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StarMap, PlanetDetails } from "./views";

function App() {
  return (
    <Router>
      <Route exact path="/" render={props => <StarMap {...props}/>}/>
      <Route exact path="/planet" render={props => <PlanetDetails {...props}/>}/>
    </Router>
  );
}

export default App;
