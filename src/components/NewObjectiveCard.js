import React from "react";
import "./NewObjectiveCard.css";

class NewObjectiveCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            key: "",
            type: -1,
            setup: "",
            specialRule: "",
            endOfRound: "",
            endOfGame: "",
            victoryPoints: 0, 
            skywalkerRules: "",
            clarifications: "",
            isLoading: false
        }
    }

    setName(e) {
        this.setState({ name: e.target.value });
    }

    setKey(e) {
        let key = e.target.value;
        let badCharacters = new RegExp(/[^a-z_]/g);

        if(!key || badCharacters.test(key)) {
            console.log("Key must contain only lower case letters and underscores");
        }

        this.setState({ key: e.target.value });
    }

    setType(e) {
        this.setState({ type: e.target.value });
    }

    setSetup(e) {
        this.setState({ setup: e.target.value });
    }

    setSpecialRule(e) {
        this.setState({ specialRule: e.target.value });
    }

    setEndOfRound(e) {
        this.setState({ endOfRound: e.target.value });
    }

    setEndOfGame(e) {
        this.setState({ endOfGame: e.target.value });
    }

    setVictoryPoints(e) {
        this.setState({ victoryPoints: parseInt(e.target.value) });
    }

    setSkywalkerRules(e) {
        this.setState({ skywalkerRules: e.target.value });
    }

    setClarifications(e) {
        this.setState({ clarifications: e.target.value });
    }

    createObjective() {
        let db = this.props.db;
        let { name, key, type, setup, specialRule, endOfRound, endOfGame, victoryPoints, skywalkerRules, clarifications } = this.state;

        if(!name || !key || !type) {
            throw new Error("One or more required field is missing.");
        }

        this.setState({ isLoading: true });

        db.collection("objectives").doc(key).set({ name, type, setup, specialRule, endOfRound, endOfGame, victoryPoints, skywalkerRules, clarifications }).then(ref => {
            console.log("created new objective: ", ref);
            this.setState({
                name: "",
                key: "",
                type: -1,
                setup: "",
                specialRule: "",
                endOfRound: "",
                endOfGame: "",
                victoryPoints: 0, 
                skywalkerRules: "",
                clarifications: "", 
                isLoading: false
            });
        }).catch(error => {
            console.log("error: ", error);
            this.setState({
                isLoading: false
            });
        })
    }

    render() {
        let { isLoading, name, key, type, setup, specialRule, endOfRound, endOfGame, victoryPoints,  skywalkerRules, clarifications } = this.state;

        return(
            <div className="newObjectiveCard">
                <p><b>NEW OBJECTIVE</b></p>

                <input type="text" placeholder="Objective Name" onChange={this.setName.bind(this)} value={name}/>
                <input type="text" placeholder="Key" onChange={this.setKey.bind(this)} value={key}/>
                <select onChange={this.setType.bind(this)} value={type}>
                    <option disabled value={-1}>Objective Type...</option>
                    <option value="Assault">Assault</option>
                    <option value="Defense">Defense</option>
                    <option value="Navigation">Navigation</option>
                    <option value="Campaign">Campaign</option>
                </select>
                <textarea type="text" placeholder="Setup" onChange={this.setSetup.bind(this)} value={setup}/>
                <textarea type="text" placeholder="Special Rule" onChange={this.setSpecialRule.bind(this)} value={specialRule}/>
                <textarea type="text" placeholder="End of Round" onChange={this.setEndOfRound.bind(this)} value={endOfRound}/>
                <textarea type="text" placeholder="End of Game" onChange={this.setEndOfGame.bind(this)} value={endOfGame}/>
                <textarea type="text" placeholder="Skywalker Rules" onChange={this.setSkywalkerRules.bind(this)} value={skywalkerRules}/>
                <textarea type="text" placeholder="Clarifications" onChange={this.setClarifications.bind(this)} value={clarifications}/>
                <input type="number" placeholder="Victory Points" onChange={this.setVictoryPoints.bind(this)} value={victoryPoints}/>

                <button onClick={this.createObjective.bind(this)} disabled={isLoading ? "disabled" : false}>{isLoading ? "..." : "CREATE"}</button>
            </div>
        );
    }
}

export default NewObjectiveCard;