import React from 'react';
import { withRouter } from 'react-router-dom';
import './PlanetSmall.css';

class PlanetSmall extends React.Component {

    renderStandard(props) {
        let { planet } = this.props;
        let objectiveString = planet.ccObjectives.reduce((acc, x, index) => acc + x.name + (index < planet.ccObjectives.length - 1 ? ", " : ""), "");

        if(objectiveString && planet.ccOtherObjectives > 0) {
            objectiveString = objectiveString + ", +" + planet.ccOtherObjectives + " Objective Cards";
        }
        else if(planet.ccOtherObjectives > 0) {
            objectiveString = "+ " + planet.ccOtherObjectives + " Objective Cards";
        }

        return(
            <div className="planetSmall" style={{ top: planet.mapY, left: planet.mapX }}>
                <div className="ringIcon" onClick={() => { this.props.history.push("/planet"); }}>
                    <img src={planet.imageSmall} alt={planet.imageAlt} />
                    <div className="dynamicRing"/>
                </div>

                <div className="leftBox">
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
                        <p>{planet.ccStrategicEffect}</p>
                        <p>{objectiveString}</p>
                    </div>
                </div>
            </div>
        );

    }

    renderSkywalker() {
        let { planet } = this.props;
        let objectiveString = planet.skywalkerObjective.name;

        return(
            <div className="planetSmall" style={{ top: planet.mapY, left: planet.mapX }}>
                <div className="ringIcon">
                    <img src={planet.imageSmall} alt={planet.imageAlt} />
                    <div className="dynamicRing"/>
                </div>

                <div className="rightBox">
                    <p>{planet.name.toUpperCase()}</p>
                    <div className="slideLine"/>
                    <div className="details">
                        <p>{objectiveString}</p>
                    </div>
                </div>
            </div>
        );
    }

    render(props) {
        let { isSkywalker } = this.props;

        if(isSkywalker) {
            return this.renderSkywalker();
        }
        else {
            return this.renderStandard();
        }
    }
}

export default withRouter(PlanetSmall);