import React from "react";
import { withAuthorization } from "../hocs/Session";

class Account extends React.Component {
    signOut() {
        let { firebase } = this.props;
        firebase.signOut();
    }

    render() {
        let { authUser } = this.props;

        return(
            <div className="page">
                <p>This is the account page for user: {authUser.email}</p>
                <button onClick={this.signOut.bind(this)}>Log Out</button>
            </div>
        );
    }
}

const authCheck = (authUser) => !!authUser;

export default withAuthorization(authCheck)(Account);