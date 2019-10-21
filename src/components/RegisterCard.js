import React from "react";
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Loader from "./Loader";
import "./RegisterCard.css";

class RegisterCard extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            loading: false
        };
    }

    signInWithGoogle() {
        
    }

    render() {
        let { loading } = this.state;

        if(loading) {
            return(
                <div className="registerCard">
                    <Loader />
                </div>
            );
        }
 
        return (
            <div className="registerCard">
                <h4>Register</h4>
                <p>You can register by linking your Google Account.</p>

                <button onClick={this.signInWithGoogle.bind(this)} />

                <p>Already have an account? <Link to="/login">Click here to sign in.</Link></p>
            </div>
        );
    }
}

export default withRouter(RegisterCard);