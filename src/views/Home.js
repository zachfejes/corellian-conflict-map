import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import firebase from "firebase";
import 'firebase/auth';
import "firebase/firestore";
import { planets, objectives, NO_PRESENCE } from "../data";
import NewObjectiveCard from "../components/NewObjectiveCard";
import NewPlanetCard from "../components/NewPlanetCard";
import "./Home.css";

export class Home extends React.Component {
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

    signIn() {
        let { auth, provider } = this.props;

        auth.signInWithPopup(provider).then(result => {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log("user: ", {
                displayName: user.displayName,
                email: user.email,
                uid: user.uid,
                token: token
            });

            this.setState({ 
                user: {
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    token: token
                }
            });
        }).catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;

            console.log("error: ", { errorCode, errorMessage, email, credential })
        })
    }

    signOut() {
        let { auth } = this.props;
        auth.signOut();
    }

    resetPassword(email) {
        let { auth } = this.props;
        auth.sendPasswordResetEmail(email);
    }

    updatePassword(password) {
        let { auth } = this.props;
        auth.currentUser.updatePassword(password);
    }

    render() {
        let { db } = this.props;
        let { gameTypes, user } = this.state;

        return(
            <div className="home">
                <div className="header">
                    <div>
                        <h4>CAMPAIGN MANAGER</h4>
                    </div>
                    <div>
                        <Link to="/objectives">OBJECTIVES</Link>
                        <Link to="/planets">PLANETS</Link>
                        <Link to="/campaign-map">CAMPAIGN MAP</Link>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/objectives" render={props => <NewObjectiveCard db={db} {...props}/>}/>
                    <Route exact path="/planets" render={props => <NewPlanetCard db={db} {...props}/>}/>
                </Switch>
            </div>
        );
    }
}