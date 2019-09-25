import React from 'react';
import { PlanetDetails } from "./PlanetDetails";
import { PlanetSmall, StarField } from '../components';
import { planets } from '../data';
import './StarMap.css';

export class StarMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusPlanet: undefined,
            isSkywalker: false
        }
    }

    setFocusPlanet(planet) {
        let focusPlanet = planet || undefined;
        this.setState({ focusPlanet });
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
        let { isSkywalker } = this.state;

        let planetElements = planets.map(planet => 
            <PlanetSmall 
                planet={planet} 
                localFleet={undefined} 
                bases={undefined} 
                isSkywalker={isSkywalker} 
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
        let { isSkywalker } = this.state;

        let toggleSkywalker = () => {
            this.setState({
                isSkywalker: !isSkywalker
            });
        }

        return(
            <div className="campaignToggle">
                <button onClick={toggleSkywalker}>{isSkywalker ? "Skywalker Campaign" : "Corellian Conflict"}</button>
            </div>
        )
    }

    render() {
        let planetElements = this.renderPlanets();
        let grid = this.renderGrid();
        let hyperlaneElements = this.renderHyperlanes();
        let campaignToggle = this.renderCampaignRulesToggle();

        return(
            <div className="starMap">
                <StarField />
                <PlanetDetails focusPlanet={this.state.focusPlanet} isSkywalker={this.state.isSkywalker} setFocusPlanet={this.setFocusPlanet.bind(this)} />
                {campaignToggle}
                {grid}
                {hyperlaneElements}
                {planetElements}
            </div>
        );
    }
}