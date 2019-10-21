import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//import firebase from "firebase";
//import 'firebase/auth';
//import "firebase/firestore";
import { withAuthentication } from "./hocs/Session";
import { Home, StarMap, Register, Landing, Login, Account, ForgotPassword, Admin, UpdatePassword, ObjectiveManager, PlanetManager } from "./views";
import { NavBar } from "./components";


// firebase.initializeApp({
//   apiKey: 'AIzaSyDBX-B7vQIB2orhJfi6YILozwkkOMFEEsY',
//   authDomain: 'armada-campaign-app.firebaseapp.com',
//   projectId: 'armada-campaign-app',
//   databaseURL: 'https://armada-campaign-app.firebaseio.com',
//   storageBucket: 'armada-campaign-app.appspot.com',
//   messaageSenderId: '677369895739'
// });

// var db = firebase.firestore();
// var auth = firebase.auth();
// var provider = new firebase.auth.GoogleAuthProvider();

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return(
      <Router history={history}>
        <NavBar />

        <Route exact path="/" render={props => <Landing />}/>
        <Route path="/register" render={props => <Register />}/>
        <Route path="/login" render={props => <Login /> }/>
        <Route path="/account" render={props => <Account />}/>
        <Route path="/admin" render={props => <Admin />}/>
        <Route path="/forgot-password" render={props => <ForgotPassword />}/>
        <Route path="/update-password" render={props => <UpdatePassword />}/>
        <Route path="/planet-manager" render={props => <PlanetManager />}/>
        <Route path="/objective-manager" render={props => <ObjectiveManager/>}/>
        <Route path="/campaign-map" render={props => <StarMap />} />
        {
        // <Route path="/objectives" render={props => <Home db={db} auth={auth} provider={provider} {...props}/>}/>
        // <Route path="/planets" render={props => <Home db={db} auth={auth} provider={provider} {...props}/>}/>
        // <Route path="/campaign-map" render={props => <StarMap db={db} auth={auth} provider={provider} {...props}/>}/>
        }
      </Router>
    );
  };
}

export default withAuthentication(App);