import React from 'react';
import './PlanetSmall.css';

export class PlanetSmall extends React.Component {

    renderStandard() {
        let { planet } = this.props;

        return(
            <div className="planetSmall">
                <div className="ringIcon">
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
                        <p>{planet.ccObjectives.reduce((acc, x) => acc + (!acc ? "" : ", ") + x.name, "") + (planet.ccOtherObjectives > 0 ? "+" + planet.ccOtherObjectives + " Objective Cards" : "")}</p>
                    </div>
                </div>
            </div>
        );

    }

    renderSkywalker() {
        let { planet } = this.props;

        return(
            <div className="planetSmall">
                <div className="ringIcon"/>

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