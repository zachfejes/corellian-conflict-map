import React from 'react';
import { withRouter } from 'react-router-dom';
import './PlanetSmall.css';

class PlanetSmall extends React.Component {
    createObjectiveString(planet, isSkywalker) {
        let objectiveString;

        if(isSkywalker) {
            objectiveString = planet.skywalkerObjective.name;
        }
        else {
            objectiveString = planet.ccObjectives.reduce((acc, x, index) => acc + x.name + (index < planet.ccObjectives.length - 1 ? ", " : ""), "");
    
            if(objectiveString && planet.ccOtherObjectives > 0) {
                objectiveString = objectiveString + ", +" + planet.ccOtherObjectives + " Objective Cards";
            }
            else if(planet.ccOtherObjectives > 0) {
                objectiveString = "+ " + planet.ccOtherObjectives + " Objective Cards";
            }
        }

        return objectiveString;
    }

    render(props) {
        let { planet, isSkywalker } = this.props;
        let objectiveString = this.createObjectiveString(planet, isSkywalker);

        return (
            <div className="planetSmall" style={{ top: planet.mapY, left: planet.mapX }}>
                <div className="ringIcon" onClick={() => { this.props.setFocusPlanet(planet) }}>
                    <img src={planet.imageSmall} alt={planet.imageAlt} />
                    <div className="dynamicRing"/>
                </div>

                <div className={"leftBox" + (isSkywalker ? " hidden" : "")}>
                    <div>
                        <p><small>+</small>{planet.ccResourceBonusValue}</p>
                    </div>
                    <div>
                        <p><small>+</small>{planet.ccVictoryBonusValue}</p>
                    </div>
                </div>

                <div className="rightBox">
                    <p>{planet.name.toUpperCase()}</p>
                    <div className="slideLine"/>
                    <div className="details">
                        <p>{!isSkywalker && planet.ccStrategicEffect}</p>
                        <p>{objectiveString}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PlanetSmall);