import React from "react";
import { withAuthorization } from "../hocs/Session";

class PlanetManager extends React.Component {
    render() {
        return(
            <div className="page">
                <p>This is the planet manaager.</p>
            </div>
        );
    }
}

const authCheck = (authUser) => !!authUser && authUser.roles && !!authUser.roles.admin;

export default withAuthorization(authCheck)(PlanetManager);