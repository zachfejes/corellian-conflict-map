import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { withAuthorization } from "../hocs/Session";
import { planets, objectives, NO_PRESENCE } from "../data";
import NewObjectiveCard from "../components/NewObjectiveCard";
import NewPlanetCard from "../components/NewPlanetCard";
import "./Home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameTypes: {},
            selectedGame: undefined,
            user: {}
        }
    }

    componentDidMount() {
        let { db } = this.props;
        let { user } = this.state;
        let gameTypes = {};

        db.collection('gameTypes').get().then(querySnapshot => {
            querySnapshot.forEach(ref => {
                gameTypes[ref.id] = ref;
            })

            this.setState({ gameTypes });
        }).catch(error => {
            console.log("error: ", error);
        });
    }

    onChange(e) {
        this.setState({ selectedGame: e.target.value });
    }

    async createCampaign() {
        let { db } = this.props;
        let { selectedGame, gameTypes } = this.state;
        await db.collection('campaigns').add({
            campaign: gameTypes[selectedGame].ref,
            currentRound: -1,
            players: [],
            fleets: [],
            planetStatus: gameTypes[selectedGame].data().planetList.map(x => {
                return({
                    planet: x,
                    presence: NO_PRESENCE,
                    localFleetIndex: -1,
                    battleImminent: false,
                });
            })
        })
    }

    render() {
        let { db, auth, provider } = this.props;
        let { gameTypes, user } = this.state;

        return(
            <div className="page">
            
                <Switch>
                    <Route exact path="/objectives" render={props => <NewObjectiveCard db={db} {...props}/>}/>
                    <Route exact path="/planets" render={props => <NewPlanetCard db={db} {...props}/>}/>
                </Switch>
            </div>
        );
    }
}

const authCheck = (authUser) => !!authUser;

export default withAuthorization(authCheck)(Home);