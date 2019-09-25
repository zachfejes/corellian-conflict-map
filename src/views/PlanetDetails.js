import React from 'react';
import './PlanetDetails.css';


export class PlanetDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIndex: 0
        }
    }

    setCurrentTabIndex(currentTabIndex) {
        this.setState({ currentTabIndex });
    }

    setFocusPlanet() {
        this.setCurrentTabIndex(0);
        this.props.setFocusPlanet();
    }

    renderObjectiveDetails(objective) {
        let { currentTabIndex } = this.state;
        let tabList = [
            { name: "Setup", id: "setup" }, 
            { name: "Special Rule", id: "specialRule" },
            { name: "End of Game", id: "endOfGame" }, 
            { name: "Erratia", id: "clarification" }, 
            { name: "Skywalker Rules", id: "skywalkerRules" }];
        let tabContent = tabList.map(x => objective[x.id]);

        let tabs = [];
        
        tabList.map((x, i) => {
                let classes = "";

                if(currentTabIndex === i) {
                    classes = "active";
                }

                if(tabContent[i]) {
                    tabs.push(<button className={classes} onClick={() => this.setCurrentTabIndex(i)}>{x.name}</button>);
                } 
            })

        return(
            <div className="planetObjective">
                <div>{tabs}</div>
                <p>{tabContent[currentTabIndex]}</p>
            </div>
        );
    }

    render() {
        let { focusPlanet, isSkywalker } = this.props;
        let lightboxClass = "lightbox", objectiveString = "", objectiveDetails;

        if(focusPlanet) {
            lightboxClass = `lightbox ${!!focusPlanet ? "show" : ""}`;

            if(isSkywalker) {
                objectiveString = focusPlanet.skywalkerObjective.name;
                objectiveDetails = this.renderObjectiveDetails(focusPlanet.skywalkerObjective);
            }
            else {
                objectiveString = focusPlanet.ccObjectives.reduce((acc, x, index) => acc + x.name + (index < focusPlanet.ccObjectives.length - 1 ? ", " : ""), "");

                if(objectiveString && focusPlanet.ccOtherObjectives > 0) {
                    objectiveString = objectiveString + ", +" + focusPlanet.ccOtherObjectives + " Objective Cards";
                }
                else if(focusPlanet.ccOtherObjectives > 0) {
                    objectiveString = "+ " + focusPlanet.ccOtherObjectives + " Objective Cards";
                }
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

                        <h4>OBJECTIVES: {objectiveString}</h4>
                        {objectiveDetails}

                        <h4>STRATEGIC EFFECTS</h4>
                        <p>Skilled Spacers</p>

                        <div className={"bonuses" + (isSkywalker ? " hidden" : "")}>
                            <div className="resourceBonusCard">
                                <p><small>+</small>{focusPlanet && focusPlanet.ccResourceBonusValue}</p>
                                <p>Resource Bonus</p>
                            </div>
                            <div className="victoryBonusCard">
                                <p><small>+</small>{focusPlanet && focusPlanet.ccVictoryBonusValue}</p>
                                <p>Victory Bonus</p>
                            </div>
                        </div>

                    </div>

                    <button className="exit" onClick={this.setFocusPlanet.bind(this)}>X</button>
                </div>
            </div>
        );
    }
}