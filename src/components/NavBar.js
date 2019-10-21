import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withAuthentication } from "../hocs/Session";
import "./NavBar.css";

class NavBar extends React.Component {
    generateClassName() {
        let { location } = this.props;
        let className = "navBar ";

        console.log("location: ", location);

        if(location.pathname === "/campaign-map") {
            className += "hide";
        }

        return className;
    }

    render() {
        let { authUser } = this.props;
        let className = this.generateClassName();

        return(
            <div className={className}>
                <div>
                    <Link to={!!authUser ? "/home" : "/"}><h4>CAMPAIGN MANAGER</h4></Link>
                </div>
                <div>
                    { !!authUser ? <Link to="/objectives">OBJECTIVES</Link> : undefined }
                    { !!authUser ? <Link to="/planets">PLANETS</Link> : undefined }
                    { !!authUser ? <Link to="/admin">ADMIN</Link> : undefined }
                    { !!authUser ? <Link to="/campaign-map">CAMPAIGN MAP</Link> : undefined }
                    { !!authUser ? <Link to="/account">ACCOUNT</Link> : <Link to="/login">SIGN IN</Link> }
                </div>
            </div>
        );
    }
}

export default withRouter(withAuthentication(NavBar));