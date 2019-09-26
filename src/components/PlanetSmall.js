import React from 'react';
import { withRouter } from 'react-router-dom';
import { CAMPAIGN_CORELLIAN_CONFLICT, CAMPAIGN_REBELLION_IN_THE_RIM, CAMPAIGN_SKYWALKER, NO_PRESENCE, REBEL_PRESENCE, REBEL_OUTPOST, REBEL_BASE, IMPERIAL_BASE, BASE_DESTROYED } from '../data';
import './PlanetSmall.css';

class PlanetSmall extends React.Component {
    createObjectiveString(planet, campaign) {
        let objectiveString;

        if(campaign === CAMPAIGN_SKYWALKER) {
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

    createPresenceClass(presence) {
        let presenceIcon = "presenceIcon", dynamicRing = "dynamicRing";

        switch(presence) {
            case REBEL_PRESENCE:
                presenceIcon += " rebelPresence";
                dynamicRing += " rebel";
                break;
            case REBEL_OUTPOST:
                presenceIcon += " rebelOutpost";
                dynamicRing += " rebel";
                break;
            case REBEL_BASE:
                presenceIcon += " rebelBase";
                dynamicRing += " rebel";
                break;
            case IMPERIAL_BASE:
                presenceIcon += " imperialBase";
                dynamicRing += " imperial";
                break;
            case BASE_DESTROYED:
                presenceIcon += " baseDestroyed";
                break;
            default:
                break;
        }

        return { presenceClass: presenceIcon, dynamicRingClass: dynamicRing };
    }

    render(props) {
        let { planet, campaign, status } = this.props;
        let objectiveString = this.createObjectiveString(planet, campaign);
        let { presenceClass, dynamicRingClass } = this.createPresenceClass(status.presence);

        return (
            <div className="planetSmall" style={{ top: planet.mapY, left: planet.mapX }}>
                <div className="ringIcon" onClick={() => { this.props.setFocusPlanet(planet) }}>
                    <img src={planet.imageSmall} alt={planet.imageAlt} />
                    <div className={dynamicRingClass}/>
                </div>

                <div className={"leftBox" + (campaign === CAMPAIGN_SKYWALKER ? " hidden" : "")}>
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
                        <p>{campaign !== CAMPAIGN_SKYWALKER && planet.ccStrategicEffect}</p>
                        <p>{objectiveString}</p>
                    </div>
                </div>

                <div className={presenceClass} />
            </div>
        );
    }
}

export default withRouter(PlanetSmall);