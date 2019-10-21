import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../hocs/Firebase";
import { Card, CardContent, CardFooter, Loader } from "../components";
import "./Register.css";

class Register extends React.Component {
    constructor() {
        super();

        this.state = {
            title: -1,
            firstName: "",
            lastName: "",
            email: "",
            password1: "",
            password2: "",
            error: "",
            loading: false
        }
    }

    setTitle(e) {
        this.setState({ title: e.target.value });
    }

    setFirstName(e) {
        this.setState({ firstName: e.target.value });
    }

    setLastName(e) {
        this.setState({ lastName: e.target.value });
    }

    setEmail(e) {
        this.setState({ email: e.target.value });
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
        let { title, firstName, lastName, email, password1, password2 } = this.state;
        let error = "";

        if(title === -1) {
            error = "Please select a Title";
        }
        else if(!firstName || !lastName) {
            error = "Please enter your First and Last Names";
        }
        else if(!email) {
            error = "Please enter your Email Address";
        }
        else if(!password1) {
            error = "Please enter a Password";
        }
        else if(password1 !== password2) {
            error = "The Passwords you entered do not match";
        }

        this.setState({ error });

        return !error
    }

    onClick(e) {
        let { firebase, history } = this.props;
        let { title, firstName, lastName, email, password1 } = this.state;
        let inputsAreValid = this.validateInputs();

        if(inputsAreValid) {
            this.setState({ loading: true });

            firebase.createUserWithEmailAndPassword(email, password1).then(authUser => {
                return firebase.user(authUser.user.uid).set({
                    title,
                    firstName,
                    lastName,
                    email,
                    campaigns: [],
                    fleets: []
                });
            })
            .then(ref => {
                console.log("Created new user: ", ref);
                history.push("/home");
            })
            .catch(error => {
                this.setState({ loading: false, error: error.message });
            });
        }
    }

    render() {
        let { title, firstName, lastName, email, password1, password2, error, loading } = this.state;
        let content = "";

        if(loading) {
            content = (  
                <CardContent className="registerCardContent">
                    <h4>REGISTER</h4>
                    <Loader />
                </CardContent>
            );
        }
        else {
            content = (
                <CardContent className="registerCardContent">
                    <h4>REGISTER</h4>
                        
                    <p className="error">{error}</p> 

                    <select onChange={this.setTitle.bind(this)} value={title}>
                        <option disabled value={-1}>Preferred Title...</option>
                        <option value="">No titles, thank you.</option>
                        <option value="M.">M.</option>
                        <option value="Mr.">Mr</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Miss.">Miss.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Mx.">Mx.</option>
                        <option value="Misc.">Misc.</option>
                        <option value="Ind.">Ind.</option>
                        <option value="Esq.">Esq.</option>
                        <option value="Master">Master</option>
                        <option value="Sir">Sir</option>
                        <option value="Madam">Madam</option>
                        <option value="Dame">Dame</option>
                        <option value="Lord">Lord</option>
                        <option value="Lady">Lady</option>
                        <option value="Mon">Mon</option>
                        <option value="Moff">Moff</option>
                        <option value="Ensign">Ensign</option>
                        <option value="Junior Lieutenant">Junior Lieutenant</option>
                        <option value="Lieutenant">Lieutenant</option>
                        <option value="Senior Lieutenant">Senior Lieutenant</option>
                        <option value="Captain">Captain</option>
                        <option value="Lieutenant Commander">Lieutenant Commander</option>
                        <option value="Commander">Commander</option>
                        <option value="Commodore">Commodore</option>
                        <option value="Rear Admiral">Rear Admiral</option>
                        <option value="Admiral">Admiral</option>
                        <option value="Fleet Admiral">Fleet Admiral</option>
                        <option value="Grand Admiral">Grand Admiral</option>
                        <option value="Grand Moff">Grand Moff</option>
                        <option value="Major">Major</option>
                        <option value="Colonel">Colonel</option>
                        <option value="General">General</option>
                        <option value="Supreme Commander">Supreme Commander</option>
                        <option value="Chancellor">Chancellor</option>
                        <option value="Supreme Chancellor">Supreme Chancellor</option>
                        <option value="Their Holiness">Their Holiness</option>
                        <option value="President">President</option>
                        <option value="Prime Minister">Prime Minister</option>
                        <option value="Minister">Minister</option>
                        <option value="Officer">Officer</option>
                        <option value="Their Highness">Their Highness</option>
                        <option value="Excellency">Excellency</option>
                        <option value="The Honourable">The Honourable</option>
                        <option value="The Right Honourable">The Right Honourable</option>
                        <option value="The Most Honourable">The Most Honourable</option>
                    </select>

                    <input type="text" onChange={this.setFirstName.bind(this)} value={firstName} placeholder="First Name" />
                    <input type="text" onChange={this.setLastName.bind(this)} value={lastName} placeholder="Last Name" />
                    <input type="text" onChange={this.setEmail.bind(this)} value={email} placeholder="Email Address" />
                    <input type="text" onChange={this.setPassword1.bind(this)} value={password1} placeholder="Password" />
                    <input type="text" onChange={this.setPassword2.bind(this)} value={password2} placeholder="Confirm Password" />
                    <button onClick={this.onClick.bind(this)} >Register</button>
                </CardContent>
            );
        }

        return (
            <div className="page">
                <Card className="registerCard">
                    {content}
                    <CardFooter>
                        <p>Already have an account? <Link to="/login">Log In</Link></p>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default withRouter(withFirebase(Register));