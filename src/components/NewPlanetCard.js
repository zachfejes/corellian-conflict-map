import React from 'react';
import "./NewPlanetCard.css";
import { 
    STRATEGIC_EFFECT_DIPLOMATS, STRATEGIC_EFFECT_SPYNET, STRATEGIC_EFFECT_REPAIR_YARDS, 
    STRATEGIC_EFFECT_SKILLED_SPACERS, STRATEGIC_EFFECT_ASSASSINS, STRATEGIC_EFFECT_HYPERSPACE_SPECIALISTS } from "../data/planetData";
import { 
    UPGRADE_TYPE_COMMANDER, UPGRADE_TYPE_DEFENSIVE_RETROFIT, UPGRADE_TYPE_EXPERIMENTAL_RETROFIT, 
    UPGRADE_TYPE_FLEET_COMMAND, UPGRADE_TYPE_FLEET_SUPPORT, UPGRADE_TYPE_ION_CANNON, 
    UPGRADE_TYPE_OFFENSIVE_RETROFIT, UPGRADE_TYPE_OFFICER, UPGRADE_TYPE_ORDNANCE, UPGRADE_TYPE_SUPPORT_TEAM, 
    UPGRADE_TYPE_TITLE, UPGRADE_TYPE_TURBOLASER, UPGRADE_TYPE_WEAPONS_TEAM, 
    UPGRADE_TYPE_WEAPONS_TEAM_AND_OFFENSIVE_RETROFIT } from "../data/enums";
import { thisExpression } from '@babel/types';

class NewPlanetCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            allObjectives: {},
            objectives: [],
            additionalObjectives: undefined,
            resourceBonuses: [],
            strategicEffects: [],
            victoryBonusValue: 0,
            imageAlt: "",
            imageLarge: "",
            imageSmall: "",
            mapX: "",
            mapY: "",
            skywalkerImperialEffect: "",
            skywalkerObjective: "",
            skywalkerRebelEffect: "",
            isLoading: true
        }
    }

    componentDidMount() {
        console.log("componentDidMount...");

        let { db } = this.props;

        db.collection('objectives').get().then(querySnapshot => {
            let objectiveRefs = [];

            querySnapshot.forEach(x => {
                objectiveRefs[x.id] = x;
            });

            this.setState({
                allObjectives: objectiveRefs,
                isLoading: false
            });
        }).catch(error => {
            console.log("Error: ", error);
        })
    }

    setName(e) {
        this.setState({ name: e.target.value });
    }

    addObjective(e) {
        let { objectives } = this.state;
        objectives.push(e.target.value);
        this.setState({ objectives });
    }

    removeObjective(e) {
        let { objectives } = this.state;
        let index = objectives.indexOf(e.target.value);
        objectives.splice(index, 1);
        this.setState({ objectives });
    }

    setAdditionalObjectives(e) {
        this.setState({ additionalObjectives: parseInt(e.target.value) });
    }

    addStrategicEffect(e) {
        let { strategicEffects } = this.state;
        strategicEffects.push(e.target.value);
        this.setState({ strategicEffects });
    }

    removeStrategicEffect(e) {
        let { strategicEffects } = this.state;
        let index = strategicEffects.indexOf(e.target.value);
        strategicEffects.splice(index, 1);
        this.setState({ strategicEffects });
    }

    addResourceBonus(e) {
        let { resourceBonuses } = this.state;
        resourceBonuses.push({
            name: e.target.value,
            win: 0,
            loss: 0
        });
        this.setState({ resourceBonuses });
    }

    removeResourceBonus(e) {
        let { resourceBonuses } = this.state;
        let index = resourceBonuses.findIndex(x => x.name === e.target.value);
        resourceBonuses.splice(index, 1);
        this.setState({ resourceBonuses });
    }

    setResourceWin(e) {
        let { resourceBonuses } = this.state;
        let index = resourceBonuses.findIndex(x => x.name === e.target.refIndex);

        console.log("resourceBonuses[index]: ", resourceBonuses[index]);

        resourceBonuses[index].win = parseInt(e.target.value);
        this.setState({ resourceBonuses });
    }

    setResourceLose(e) {
        let { resourceBonuses } = this.state;
        let index = resourceBonuses.findIndex(x => x.name === e.target.refIndex);

        console.log("resourceBonuses[index]: ", resourceBonuses[index]);

        resourceBonuses[index].lose = parseInt(e.target.value);
        this.setState({ resourceBonuses });
    }

    setVictoryBonusValue(e) {
        this.setState({ victoryBonusValue: parseInt(e.target.value) });
    }

    setImageAlt(e) {
        this.setState({ imageAlt: e.target.value });
    }

    setImageLarge(e) {
        this.setState({ imageLarge: e.target.value });
    }

    setImageSmall(e) {
        this.setState({ imageSmall: e.target.value });
    }

    setSkywalkerImperialEffect(e) {
        this.setState({ skywalkerImperialEffect: e.target.value });
    }

    setSkywalkerRebelEffect(e) {
        this.setState({ skywalkerRebelEffect: e.target.value });
    }

    setSkywalkerObjective(e) {
        this.setState({ skywalkerObjective: e.target.value });
    }

    setMapX(e) {
        this.setState({ mapX: parseInt(e.target.value) });
    }

    setMapY(e) {
        this.setState({ mapY: parseInt(e.target.value) });
    }

    createPlanet() {
        let { name, selectedObjective } = this.state;

        console.log("Creating a planet: ", name, selectedObjective);
    }

    render() {
        let { isLoading, allObjectives, objectives, name, additionalObjectives, imageSmall, imageLarge, imageAlt, mapX, mapY, strategicEffects, resourceBonuses, skywalkerImperialEffect, skywalkerRebelEffect, skywalkerObjective } = this.state;
        let loader = <p>...</p>;
        let options = Object.keys(allObjectives).map((key,i) => <option key={i} value={key}>{allObjectives[key].data().name}</option>);
        let selectedObjectiveTags = objectives.map((x, i) => <div className="objectiveTag" key={i}><p>{allObjectives[x].data().name}</p><button value={x} onClick={this.removeObjective.bind(this)}>X</button></div>)
        let selectedStrategicEffects = strategicEffects.map((x,i) => <div className="objectiveTag" key={i}><p>{x}</p><button value={x} onClick={this.removeStrategicEffect.bind(this)}>X</button></div>);
        let selectedResourceBonuses = resourceBonuses.map((x,i) => <div className="resourceBonusTag" key={i}><p>{x.name}</p><input type="number" value={x.win} refIndex={x.name} onChange={this.setResourceWin.bind(this)} defaultValue="Win Value" /><input type="number" value={x.lose} refIndex={x.name} onChange={this.setResourceLose.bind(this)} defaultValue="Lose Value" /><button value={x.name} onClick={this.removeResourceBonus.bind(this)}>X</button></div>);


        return(
            <div className="newPlanetCard">
                <p>NEW PLANET</p>

                { isLoading ? loader : undefined }

                <input type="text" placeholder="Planet Name" onChange={this.setName.bind(this)} value={name}/>

                {selectedObjectiveTags}

                <select onChange={this.addObjective.bind(this)} defaultValue={-1}>
                    <option disabled value={-1}>Add Objective...</option>
                    {options}
                </select>
                <input type="number" placeholder="Additional Objectives" onChange={this.setAdditionalObjectives.bind(this)} value={additionalObjectives}/>

                {selectedStrategicEffects}

                <select onChange={this.addStrategicEffect.bind(this)} defaultValue={-1}>
                    <option key={0} value={-1} disabled>Add Strategic Effect...</option>
                    <option key={STRATEGIC_EFFECT_ASSASSINS} value={STRATEGIC_EFFECT_ASSASSINS}>{STRATEGIC_EFFECT_ASSASSINS}</option>
                    <option key={STRATEGIC_EFFECT_DIPLOMATS} value={STRATEGIC_EFFECT_DIPLOMATS}>{STRATEGIC_EFFECT_DIPLOMATS}</option>
                    <option key={STRATEGIC_EFFECT_HYPERSPACE_SPECIALISTS} value={STRATEGIC_EFFECT_HYPERSPACE_SPECIALISTS}>{STRATEGIC_EFFECT_HYPERSPACE_SPECIALISTS}</option>
                    <option key={STRATEGIC_EFFECT_REPAIR_YARDS} value={STRATEGIC_EFFECT_REPAIR_YARDS}>{STRATEGIC_EFFECT_REPAIR_YARDS}</option>
                    <option key={STRATEGIC_EFFECT_SKILLED_SPACERS} value={STRATEGIC_EFFECT_SKILLED_SPACERS}>{STRATEGIC_EFFECT_SKILLED_SPACERS}</option>
                    <option key={STRATEGIC_EFFECT_SPYNET} value={STRATEGIC_EFFECT_SPYNET}>{STRATEGIC_EFFECT_SPYNET}</option>
                </select>

                {selectedResourceBonuses}
                
                <select onChange={this.addResourceBonus.bind(this)} defaultValue={-1}>
                    <option key={0} value={-1} disabled>Add Resource Bonus Type...</option>
                    <option key={UPGRADE_TYPE_COMMANDER} value={UPGRADE_TYPE_COMMANDER}>{UPGRADE_TYPE_COMMANDER}</option>
                    <option key={UPGRADE_TYPE_DEFENSIVE_RETROFIT} value={UPGRADE_TYPE_DEFENSIVE_RETROFIT}>{UPGRADE_TYPE_DEFENSIVE_RETROFIT}</option>
                    <option key={UPGRADE_TYPE_EXPERIMENTAL_RETROFIT} value={UPGRADE_TYPE_EXPERIMENTAL_RETROFIT}>{UPGRADE_TYPE_EXPERIMENTAL_RETROFIT}</option>
                    <option key={UPGRADE_TYPE_FLEET_COMMAND} value={UPGRADE_TYPE_FLEET_COMMAND}>{UPGRADE_TYPE_FLEET_COMMAND}</option>
                    <option key={UPGRADE_TYPE_FLEET_SUPPORT} value={UPGRADE_TYPE_FLEET_SUPPORT}>{UPGRADE_TYPE_FLEET_SUPPORT}</option>
                    <option key={UPGRADE_TYPE_ION_CANNON} value={UPGRADE_TYPE_ION_CANNON}>{UPGRADE_TYPE_ION_CANNON}</option>
                    <option key={UPGRADE_TYPE_OFFENSIVE_RETROFIT} value={UPGRADE_TYPE_OFFENSIVE_RETROFIT}>{UPGRADE_TYPE_OFFENSIVE_RETROFIT}</option>
                    <option key={UPGRADE_TYPE_OFFICER} value={UPGRADE_TYPE_OFFICER}>{UPGRADE_TYPE_OFFICER}</option>
                    <option key={UPGRADE_TYPE_ORDNANCE} value={UPGRADE_TYPE_ORDNANCE}>{UPGRADE_TYPE_ORDNANCE}</option>
                    <option key={UPGRADE_TYPE_SUPPORT_TEAM} value={UPGRADE_TYPE_SUPPORT_TEAM}>{UPGRADE_TYPE_SUPPORT_TEAM}</option>
                    <option key={UPGRADE_TYPE_TITLE} value={UPGRADE_TYPE_TITLE}>{UPGRADE_TYPE_TITLE}</option>
                    <option key={UPGRADE_TYPE_TURBOLASER} value={UPGRADE_TYPE_TURBOLASER}>{UPGRADE_TYPE_TURBOLASER}</option>
                    <option key={UPGRADE_TYPE_WEAPONS_TEAM} value={UPGRADE_TYPE_WEAPONS_TEAM}>{UPGRADE_TYPE_WEAPONS_TEAM}</option>
                    <option key={UPGRADE_TYPE_WEAPONS_TEAM_AND_OFFENSIVE_RETROFIT} value={UPGRADE_TYPE_WEAPONS_TEAM_AND_OFFENSIVE_RETROFIT}>{UPGRADE_TYPE_WEAPONS_TEAM_AND_OFFENSIVE_RETROFIT}</option>
                </select>

                <input type="text" placeholder="Planet Icon URL" onChange={this.setImageSmall.bind(this)} value={imageSmall} />
                <input type="text" placeholder="Planet Background URL" onChange={this.setImageLarge.bind(this)} value={imageLarge} />
                <input type="text" placeholder="Planet Image Alt Text" onChange={this.setImageAlt.bind(this)} value={imageAlt} />
                <input type="number" placeholder="X%" onChange={this.setMapX.bind(this)} value={mapX} />
                <input type="number" placeholder="Y%" onChange={this.setMapY.bind(this)} value={mapY} />

                <hr />
                <p><small>Skywalker Campaign Only</small></p>

                <select onChange={this.setSkywalkerObjective.bind(this)} defaultValue={-1}>
                    <option disabled value={-1}>Add Skywalker Objective...</option>
                    {options}
                </select>

                <input type="text" placeholder="Imperial Victory Effects" onChange={this.setSkywalkerImperialEffect.bind(this)} value={skywalkerImperialEffect} />
                <input type="text" placeholder="Rebel Victory Effects" onChange={this.setSkywalkerRebelEffect.bind(this)} value={skywalkerRebelEffect} />

                <hr />
                <button onClick={this.createPlanet.bind(this)} disabled={isLoading ? "disabled" : false}>{isLoading ? "..." : "CREATE"}</button>

            </div>
        );
    }
}

export default NewPlanetCard;