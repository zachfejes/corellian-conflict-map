import React from 'react';
import firebase from "firebase";
import "firebase/firestore";
import { PlanetDetails } from "./PlanetDetails";
import { PlanetSmall, StarField } from '../components';
import { NO_PRESENCE, REBEL_PRESENCE, REBEL_OUTPOST, REBEL_BASE, IMPERIAL_BASE, BASE_DESTROYED, CAMPAIGN_CORELLIAN_CONFLICT, CAMPAIGN_SKYWALKER, CAMPAIGN_REBELLION_IN_THE_RIM } from '../data';
import './StarMap.css';

export class StarMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            planets: [],
            focusPlanet: undefined,
            sessionData: {
                user: {
                    firstName: "Zach",
                    lastName: "Fejes",
                    email: "",
                    campaigns: []
                }
            },
            campaignData: {
                id: 1,
                campaign: CAMPAIGN_CORELLIAN_CONFLICT,
                players: [0, 1, 2, 3, 4, 5],
                planetStatus: [],
                fleets: [
                    {
                        playerID: 0,
                        name: "",
                        faction: "",
                        ships: [],
                        objectives: [],
                        squadrons: [],
                        points: {
                            shipPoints: 0,
                            squadronPoints: 0,
                            totalPoints: 0
                        }
                    }
                ],
                currentRound: 0
            }
        }
    }

    componentDidMount() {
        let { db } = this.props;
        let { campaignData } = this.state;
        let planets = [];

        db.collection('planets').get().then(querySnapshot => {
            querySnapshot.forEach(async (ref) => {
                planets.push(ref.data());
            });

            campaignData.planetStatus = planets.map((x, i) => ({
                presence: i%2===0 && i%5!==0 ? NO_PRESENCE : i%3===0 && i%5!==0 ? REBEL_PRESENCE : i%5===0 ? IMPERIAL_BASE : i%7===0 ? REBEL_OUTPOST : BASE_DESTROYED,
                localFleetIndex: -1,
                battleImminent: false,
            }));

            this.setState({ planets, campaignData, isLoading: false });
        })
    }

    setFocusPlanet(planet) {
        let focusPlanet = planet || undefined;
        this.setState({ focusPlanet });
    }

    setCampaign(campaign) {
        let { campaignData } = this.state;
        campaignData.campaign = campaign;
        this.setState({ campaignData });
    }

    renderGrid() {
        return(
            <div className="gridWrapper">
                <div className="corellianSector">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }

    renderPlanets() {
        let { planets, campaignData } = this.state;
        let { campaign, planetStatus } = campaignData;

        let planetElements = planets.map((planet, index) => 
            <PlanetSmall 
                planet={planet} 
                status={planetStatus[index]}
                campaign={campaign} 
                setFocusPlanet={this.setFocusPlanet.bind(this)}
            />);

        return(planetElements);
    }

    renderHyperlanes() {
        let hyperlaneElements = [];

        hyperlaneElements.push(<div className="hyperlane corellianRun" />);
        hyperlaneElements.push(<div className="hyperlane corellianTradeSpine" />);
        hyperlaneElements.push(<div className="hyperlane backChannel" />);

        return hyperlaneElements;
    }

    renderCampaignRulesToggle() {
        let { campaign } = this.state.campaignData; 

        return(
            <div className="campaignToggle">
                <select onChange={(e) => { this.setCampaign(e.target.value); }}>
                    <option key="0" value={CAMPAIGN_CORELLIAN_CONFLICT} selected={campaign === CAMPAIGN_CORELLIAN_CONFLICT}>{CAMPAIGN_CORELLIAN_CONFLICT}</option>
                    <option key="1" value={CAMPAIGN_SKYWALKER} selected={campaign === CAMPAIGN_SKYWALKER}>{CAMPAIGN_SKYWALKER}</option>
                    <option key="2" value={CAMPAIGN_REBELLION_IN_THE_RIM} selected={campaign === CAMPAIGN_REBELLION_IN_THE_RIM}>{CAMPAIGN_REBELLION_IN_THE_RIM}</option>
                </select>
            </div>
        );
    }

    render() {
        let { isLoading, planets } = this.state;
        let { db } = this.props;

        let planetElements = isLoading ? undefined : this.renderPlanets();
        let grid = this.renderGrid();
        let hyperlaneElements = this.renderHyperlanes();
        let campaignToggle = this.renderCampaignRulesToggle();

        return(
            <div className="starMap">
                <StarField />
                <PlanetDetails focusPlanet={this.state.focusPlanet} campaignData={this.state.campaignData} setFocusPlanet={this.setFocusPlanet.bind(this)} planets={planets} />
                {campaignToggle}
                {grid}
                {hyperlaneElements}
                {planetElements}
            </div>
        );
    }
}