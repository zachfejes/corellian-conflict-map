import React from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../hocs/Firebase";
import { Card, CardContent, CardFooter, Loader } from "../components";
import "./UpdatePassword.css";

class UpdatePassword extends React.Component {
    constructor() {
        super();

        this.state = {
            password1: "",
            password2: "",
            error: "",
            loading: false,
            success: false
        }
    }

    setPassword1(e) {
        this.setState({ password1: e.target.value });
    }

    setPassword2(e) {
        this.setState({ password2: e.target.value });
    }

    setError(e) {
        this.setState({ error: e.target.value });
    }

    validateInputs() {
        let { password1, password2 } = this.state;
        let error = "";

        if(!password1) {
            error = "Please enter a new Password.";
        }
        else if(password1 !== password2) {
            error = "The Passwords you entered do not match.";
        }

        this.setState({ error });

        return !error
    }

    onClick(e) {
        let { firebase } = this.props;
        let { password1 } = this.state;
        let inputsAreValid = this.validateInputs();

        if(inputsAreValid) {
            this.setState({ loading: true });

            firebase.updatePassword(password1).then(user => {
                this.setState({ loading: false, success: true });
            })
            .catch(error => {
                this.setState({ loading: false, error: error.message });
            });
        }
    }

    render() {
        let { history } = this.props;
        let { password1, password2, error, loading, success } = this.state;
        let content = "";

        if(loading) {
            content = (  
                <CardContent className="updatePasswordCardContent">
                    <h4>UPDATING PASSWORD</h4>
                    <Loader />
                </CardContent>
            );
        }
        else if(success) {
            content = (
                <CardContent className="updatePasswordCardContent">
                    <h4>PASSWORD UPDATED</h4>
                    <p>Your password has been successfully updated!</p>
                    <button onClick={() => { history.push("/"); }}>Back to Home</button>
                </CardContent>
            );
        }
        else {
            content = (
                <CardContent className="updatePasswordCardContent">
                    <h4>UPDATE PASSWORD</h4>
                    <p className="error">{error}</p> 
                    <input type="text" onChange={this.setPassword1.bind(this)} value={password1} placeholder="New Password" />
                    <input type="text" onChange={this.setPassword2.bind(this)} value={password2} placeholder="Confirm New Password" />
                    <button onClick={this.onClick.bind(this)} >Update</button>
                </CardContent>
            );
        }

        return (
            <div className="page">
                <Card className="updatePasswordCard">
                    {content}
                    <CardFooter />
                </Card>
            </div>
        );
    }
}

export default withRouter(withFirebase(UpdatePassword));