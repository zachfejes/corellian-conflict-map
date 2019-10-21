import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../hocs/Firebase";
import { Card, CardContent, CardFooter, Loader } from "../components";
import "./Login.css";

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false
        }
    }

    setEmail(e) {
        this.setState({ email: e.target.value });
    }

    setPassword(e) {
        this.setState({ password: e.target.value });
    }

    setError(e) {
        this.setState({ error: e.target.value });
    }

    validateInputs() {
        let { email, password } = this.state;
        let error = "";

        if(!email) {
            error = "Please enter your Email Address";
        }
        else if(!password) {
            error = "Please enter a Password";
        }

        this.setState({ error });

        return !error
    }

    onClick(e) {
        let { firebase, history } = this.props;
        let { email, password } = this.state;
        let inputsAreValid = this.validateInputs();

        if(inputsAreValid) {
            this.setState({ loading: true });

            firebase.signInWithEmailAndPassword(email, password).then(user => {
                history.push("/home");
            })
            .catch(error => {
                this.setState({ loading: false, error: error.message });
            });
        }
    }

    render() {
        let { email, password, error, loading } = this.state;
        let content = "";

        if(loading) {
            content = (
                <CardContent className="loginCardContent">
                    <h4>SIGN IN</h4>
                    <Loader />
                </CardContent>
            );
        }
        else {
            content = (
                <CardContent className="loginCardContent">
                    <h4>SIGN IN</h4>
                        
                    <p className="error">{error}</p> 

                    <input type="text" onChange={this.setEmail.bind(this)} value={email} placeholder="Email Address" />
                    <input type="text" onChange={this.setPassword.bind(this)} value={password} placeholder="Password" />
                    <button onClick={this.onClick.bind(this)} >SIGN IN</button>
                </CardContent>
            )
        }

        return(
            <div className="page">
                <Card className="loginCard">
                    {content}
                    <CardFooter>
                        <p>Forgot your password? <Link to="/forgot-password">Reset It</Link></p>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </CardFooter>
                </Card>

            </div>
        );
    }
}

export default withRouter(withFirebase(Login));