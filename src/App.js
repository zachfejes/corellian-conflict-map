import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { StarMap } from "./views";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" render={props => <StarMap {...props}/>}/>
    </Router>
  );
}

export default App;
