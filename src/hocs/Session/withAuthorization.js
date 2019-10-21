import React from 'react';
import { withRouter } from 'react-router-dom';

import { AuthUserContext } from "../Session";
import { withFirebase } from '../Firebase';

const withAuthorization = authCheck => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if(!authCheck(authUser)) {
                        this.props.history.push("/login");
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            let { authUser } = this.props;

            return (
                <AuthUserContext.Consumer value={authUser}>
                    { authUser => authCheck(authUser) ? <Component {...this.props} authUser={authUser} /> : null }
                </AuthUserContext.Consumer>
            );
        }
    }

    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;