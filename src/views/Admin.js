import React, { Component } from 'react';
import { withFirebase } from '../hocs/Firebase';
import { Loader } from "../components";

class AdminPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: []
        };
    }

    componentDidMount() {
        let { firebase } = this.props;

        this.setState({ loading: true });

        firebase.users().get().then(async querySnapshot => {
            let userRefs = [];

            await querySnapshot.forEach(async doc => {
                let data = await doc.data();
                userRefs.push(data);
            });

            return this.setState({
                users: userRefs,
                loading: false
            });
        }).catch(error => {
            console.log("Error: ", error);
        })
    }

    createUserList() {
        let { users } = this.state;
        let userListElements;
        
        if(users) {
            userListElements = users.map((user, i) => <li key={i}>{user.firstName}</li>);
            return(<ul>{userListElements}</ul>);
        }

        return <p>Couldn't find any.</p>
    }

    render() {
        let { loading } = this.state;
        let userList = this.createUserList();

        if(loading) {
            return(
                <div className="page">
                    <Loader />
                </div>
            )
        }

        return (
            <div className="page">
                <h1>Admin</h1>
                {userList}
            </div>
        );
    }
}

export default withFirebase(AdminPage);