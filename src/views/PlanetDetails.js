import React from 'react';
import './PlanetDetails.css';


export class PlanetDetails extends React.Component {

    render() {
        let { focusPlanet, setFocusPlanet } = this.props;
        let lightboxClass = "lightbox", objectiveString = "";


        if(focusPlanet) {
            lightboxClass = `lightbox ${!!focusPlanet ? "show" : ""}`;

            objectiveString = focusPlanet.ccObjectives.reduce((acc, x, index) => acc + x.name + (index < focusPlanet.ccObjectives.length - 1 ? ", " : ""), "");

            if(objectiveString && focusPlanet.ccOtherObjectives > 0) {
                objectiveString = objectiveString + ", +" + focusPlanet.ccOtherObjectives + " Objective Cards";
            }
            else if(focusPlanet.ccOtherObjectives > 0) {
                objectiveString = "+ " + focusPlanet.ccOtherObjectives + " Objective Cards";
            }
        }

        return(
            <div className={lightboxClass}>
                <div className="planetDetailsModal">
                    <div className="imageContainer">
                        <img className="location" src={focusPlanet && focusPlanet.imageLarge} alt={focusPlanet && focusPlanet.name} />
                        <div className="gradient"/>
                    </div>

                    <div className="content">
                        <h3>{focusPlanet && focusPlanet.name.toUpperCase()}</h3>
                        <p className="aurebesh">{focusPlanet && focusPlanet.name.toUpperCase()}</p>

                        <h4>OBJECTIVES</h4>
                        <p>{objectiveString}</p>

                        <h4>STRATEGIC EFFECTS</h4>
                        <p>Skilled Spacers</p>

                        <div className="resourceBonusCard">
                            <p><small>+</small>{focusPlanet && focusPlanet.ccResourceBonusValue}</p>
                            <p>Resource Bonus</p>
                        </div>
                        <div className="victoryBonusCard">
                            <p><small>+</small>{focusPlanet && focusPlanet.ccVictoryBonusValue}</p>
                            <p>Victory Bonus</p>
                        </div>

                    </div>

                    <button className="exit" onClick={() => { setFocusPlanet(); }}>X</button>
                </div>
            </div>
        );
    }
}