import React from 'react';
import Loader from './Loader';
import './PlanetDetails.css';
import { CAMPAIGN_SKYWALKER, REBEL_PRESENCE, REBEL_OUTPOST, REBEL_BASE, IMPERIAL_BASE, BASE_DESTROYED, OBJECTIVE_TABS } from '../data';

class PlanetDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIndex: 0,
            objectiveDetails: undefined,
            loading: false
        }
    }

    componentDidUpdate(prevProps) {
        let { focusPlanet, campaignData } = this.props;
        let { campaign } = campaignData;

        //If we're turning off the modal, clear all local data and reset it
        if(!focusPlanet && !!prevProps.focusPlanet) {
            console.log("The modal has been turned off. Now clearing all state data in it.");
            this.resetState();
        }
        //If we're clicking a new planet from not having one selected, 
        //we need to ensure we have all of its correct data
        else if(!!focusPlanet && !prevProps.focusPlanet) {
            console.log("We've clicked on a planet from the map.");
            if(campaign === CAMPAIGN_SKYWALKER) {
                console.log("We are in the skywalker campaign.");
                this.fetchObjectiveDetails(focusPlanet);
            }
            else {
                console.log("We are not in the skywalker campaign.");
                this.fetchAllObjectiveDetails(focusPlanet);
            }
        }
    }

    resetState() {
        this.setState({
            loading: true,
            currentTabIndex: 0,
            objectiveDetails: undefined
        });
    }

    fetchObjectiveDetails(planet) {
        this.setState({ loading: true });
        return planet.skywalkerObjective.get().then(snapshot => {
            this.setState({
                objectiveDetails: snapshot.data(),
                loading: false
            });
        })
    }

    async fetchAllObjectiveDetails(planet) {
        this.setState({ loading: true });
        let objectiveDetails = [];

        if(planet.ccObjectives.length === 0) {
            this.setState({
                loading: false,
                objectiveDetails: undefined
            });
        }
        else {
            objectiveDetails = await Promise.all(planet.ccObjectives.map(objective => {
                return objective.get().then(snapshot => snapshot.data())
            }));

            this.setState({
                loading: false,
                objectiveDetails
            })

        }
    }

    setCurrentTabIndex(currentTabIndex) {
        this.setState({ currentTabIndex });
    }

    clearFocusPlanet() {
        this.resetState();
        this.props.setFocusPlanet();
    }

    isLoading() {
        let { loading, objectiveDetails } = this.state;
        let { focusPlanet, campaignData } = this.props;

        if(campaignData.campaign === CAMPAIGN_SKYWALKER || (focusPlanet && focusPlanet.ccObjectives.length > 0)) {
            return loading || !objectiveDetails || !focusPlanet;
        }
        else {
            return loading || !focusPlanet
        }
    }

    /* CLASS LOGIC */

    generateLightboxClass() {
        let { focusPlanet } = this.props;
        return `lightbox ${!!focusPlanet ? "show" : ""}`;
    }

    /* RENDER METHODS */

    renderBackgroundImage() {
        let { focusPlanet } = this.props;
        return(
            <div className="imageContainer">
                <img className="location" src={focusPlanet && focusPlanet.imageLarge} alt={focusPlanet && focusPlanet.name} />
                <div className="gradient"/>
            </div>
        );
    }

    renderTitleElements() {
        let { focusPlanet } = this.props;
        return([
                <h3 key="planetName">{focusPlanet && focusPlanet.name.toUpperCase()}</h3>,
                <p key="planetNameAurebesh" className="aurebesh">{focusPlanet && focusPlanet.name.toUpperCase()}</p>
        ]);
    }

    renderStatusElements() {
        let { focusPlanet, campaignData, planets } = this.props;
        let { planetStatus } = campaignData;
        let status = planetStatus[planets.indexOf(focusPlanet)];
        let presenceString = "", presenceClass = "";

        switch(status.presence) {
            case REBEL_PRESENCE:
                presenceString = "REBEL PRESENCE";
                presenceClass = "rebelPresence";
                break;
            case REBEL_OUTPOST:
                presenceString = "REBEL OUTPOST";
                presenceClass = "rebelOutpost";
                break;
            case REBEL_BASE:
                presenceString = "REBEL BASE";
                presenceClass = "rebelBase"
                break;
            case IMPERIAL_BASE:
                presenceString = "IMPERIAL BASE";
                presenceClass = "imperialBase";
                break;
            case BASE_DESTROYED:
                presenceString = "DEBRIES";
                presenceClass = "baseDestroyed";
                break;
            default:
                break;
        }

        return(
            <div className="status">
                <div className={presenceClass}/>
                <h4>{presenceString}<br/>{presenceString ? "DETECTED" : ""}</h4>
            </div>
        );
    }

    renderObjectiveElements() {
        let { campaignData, focusPlanet } = this.props;
        let { currentTabIndex, objectiveDetails } = this.state;
        let objectiveString = "", tabContent, tabs;

        //If we're in the skywalker campaign, we should display the objective with detail tabs
        if(campaignData.campaign === CAMPAIGN_SKYWALKER) {
            objectiveString = objectiveDetails.name;
            tabContent = OBJECTIVE_TABS.map(x => objectiveDetails[x.id]);
            tabs = [];
            
            OBJECTIVE_TABS.map((x, i) => {
                let classes = "";

                if(currentTabIndex === i) {
                    classes = "active";
                }

                if(tabContent[i]) {
                    tabs.push(<button key={`tab_${i}`} className={classes} onClick={() => this.setCurrentTabIndex(i)}>{x.name}</button>);
                } 
            });

            return([
                <h4 key="objectivesTitle">OBJECTIVE: {objectiveString}</h4>,
                <div key="objectivesTabList" className="planetObjective">
                    <div>{tabs}</div>
                    <p>{tabContent[currentTabIndex]}</p>
                </div>
            ])
        }
        //If we're not in the skywalker campaign, we should just list all objectives provieded by the planet

        console.log("focusPlanet.ccObjectives: ", objectiveDetails);
        
        if(objectiveDetails && objectiveDetails.length > 0) {
            objectiveString = objectiveDetails.reduce((acc, x, index) => acc + x.name + (index < objectiveDetails.length - 1 ? ", " : ""), "");
        }

        if(objectiveString && focusPlanet.ccOtherObjectives > 0) {
            objectiveString = objectiveString + ", +" + focusPlanet.ccOtherObjectives + " Objective Cards";
        }
        else if(focusPlanet.ccOtherObjectives > 0) {
            objectiveString = "+ " + focusPlanet.ccOtherObjectives + " Objective Cards";
        }

        return(<h4>OBJECTIVES: {objectiveString}</h4>)
    }

    renderStrategicEffectElements() {
        return([
            <h4 key="strategicEffects">STRATEGIC EFFECTS</h4>,
            <p key="temp">Skilled Spacers</p>
        ])
    }

    renderBonusElements() {
        let { campaignData, focusPlanet } = this.props;
        let { campaign } = campaignData;

        return(
            <div className={"bonuses" + (campaign === CAMPAIGN_SKYWALKER ? " hidden" : "")}>
                <div className="resourceBonusCard">
                    <p><small>+</small>{focusPlanet && focusPlanet.ccResourceBonusValue}</p>
                    <p>Resource Bonus</p>
                </div>
                <div className="victoryBonusCard">
                    <p><small>+</small>{focusPlanet && focusPlanet.ccVictoryBonusValue}</p>
                    <p>Victory Bonus</p>
                </div>
            </div>
        );
    }

    render() {
        let lightboxClass = this.generateLightboxClass();
        let backgroundElement = this.renderBackgroundImage();
        let statusElement, objectiveElement, effectElement, titleElement, bonusElement;

        if(this.isLoading()) {
            return(
                <div className={lightboxClass}>
                    <div className="planetDetailsModal">
                        {backgroundElement}
                        <Loader />
                        <button className="exit" onClick={this.clearFocusPlanet.bind(this)}>X</button>
                    </div>
                </div>
            );
        }

        statusElement = this.renderStatusElements();
        titleElement = this.renderTitleElements();
        objectiveElement = this.renderObjectiveElements();
        effectElement = this.renderStrategicEffectElements();
        bonusElement = this.renderBonusElements();

        return(
            <div className={lightboxClass}>
                <div className="planetDetailsModal">
                    {backgroundElement}
                    {statusElement}
                    
                    <div className="content">
                        {titleElement}
                        {objectiveElement}
                        {effectElement}
                        {bonusElement}
                    </div>
                    <button className="exit" onClick={this.clearFocusPlanet.bind(this)}>X</button>
                </div>
            </div>
        );
    }
}

export default PlanetDetails;