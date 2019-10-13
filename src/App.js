import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import firebase from "firebase";
import 'firebase/auth';
import "firebase/firestore";
import { Home, StarMap } from "./views";

firebase.initializeApp({
  apiKey: 'AIzaSyDBX-B7vQIB2orhJfi6YILozwkkOMFEEsY',
  authDomain: 'armada-campaign-app.firebaseapp.com',
  projectId: 'armada-campaign-app',
  databaseURL: 'https://armada-campaign-app.firebaseio.com',
  storageBucket: 'armada-campaign-app.appspot.com',
  messaageSenderId: '677369895739'
});

var db = firebase.firestore();
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" render={props => <Home db={db} auth={auth} provider={provider} {...props}/>}/>
      <Route exact path="/objectives" render={props => <Home db={db} auth={auth} provider={provider} {...props}/>}/>
      <Route exact path="/planets" render={props => <Home db={db} auth={auth} provider={provider} {...props}/>}/>
      <Route exact path="/campaign-map" render={props => <StarMap db={db} auth={auth} provider={provider} {...props}/>}/>
    </Router>
  );
}

export default App;
