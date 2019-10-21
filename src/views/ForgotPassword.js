import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../hocs/Firebase";
import { Card, CardContent, CardFooter, Loader } from "../components";
import "./ForgotPassword.css";

class ForgotPassword extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            error: "",
            loading: false,
            success: false
        }
    }

    setEmail(e) {
        this.setState({ email: e.target.value });
    }

    setError(e) {
        this.setState({ error: e.target.value });
    }

    validateInputs() {
        let { email } = this.state;
        let error = "";

        if(!email) {
            error = "Please enter your Email Address";
        }

        this.setState({ error });

        return !error
    }

    onClick(e) {
        let { firebase } = this.props;
        let { email } = this.state;
        let inputsAreValid = this.validateInputs();

        if(inputsAreValid) {
            this.setState({ loading: true });

            firebase.requestPasswordResetEmail(email).then(user => {
                this.setState({ loading: false, success: true });
            })
            .catch(error => {
                this.setState({ loading: false, error: error.message });
            });
        }
    }

    render() {
        let { history } = this.props;
        let { email, error, loading, success } = this.state;
        let content = "";

        if(loading) {
            content = (
                <CardContent className="forgotPasswordCardContent">
                    <h4>SENDING PASSWORD RESET EMAIL</h4>
                    <Loader />
                </CardContent>
            );
        }
        else if(success) {
            content = (
                <CardContent className="forgotPasswordCardContent">
                    <h4>PASSWORD RESET EMAIL SENT</h4>
                    <p>Don't worry, this happens to everyone!</p>
                    <p>You should be recieving an email with password reset instructions.</p>
                    <button onClick={() => { history.push("/") }}>Back to Landing</button>
                </CardContent>
            );
        }
        else {
            content = (
                <CardContent className="forgotPasswordCardContent">
                    <h4>FORGOT PASSWORD</h4>
                    <p className="error">{error}</p> 
                    <input type="text" onChange={this.setEmail.bind(this)} value={email} placeholder="Email Address" />
                    <button onClick={this.onClick.bind(this)} >Send Reset Email</button>
                </CardContent>
            );
        }

        return(
            <div className="page">
                <Card className="forgotPasswordCard">   
                    {content}
                    <CardFooter>
                        <p>Remembered your password? <Link to="/login">Log In</Link></p>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default withRouter(withFirebase(ForgotPassword));