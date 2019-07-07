import React from 'react';
import { PlanetSmall } from '../components';
import { planets } from '../data';
import './StarMap.css';

export class StarMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusIndex: -1,
            isSkywalker: false
        }
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
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    renderStarField() {
        let smallStars = [], mediumStars = [], largeStars = [];

        for(let i = 0; i < 300; i++) {
            if(i < 15) {
                largeStars.push(<div className="largeStar" style={{
                    left: (Math.random()*97 + '%'), 
                    top: (Math.random()*97 + '%'),
                    'animation-delay': (Math.random()*8 + 's')
                }}/>);
            }

            if(i < 100) {
                mediumStars.push(<div className="mediumStar" style={{
                    left: (Math.random()*98 + '%'), 
                    top: (Math.random()*98 + '%'),
                    'animation-delay': (Math.random()*8 + 's')
                }}/>);
            }

            smallStars.push(<div className="smallStar" style={{
                left: (Math.random()*99 + '%'), 
                top: (Math.random()*99 + '%'),
                'animation-delay': (Math.random()*8 + 's') 
            }}/>);
        }

        return(
            <div className="starField">
                {smallStars}
                {mediumStars}
                {largeStars}
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

    render() {
        let starField = this.renderStarField();
        let planetElements = this.renderPlanets();
        let grid = this.renderGrid();
        let hyperlaneElements = this.renderHyperlanes();

        return(
            <div className="starMap">
                {grid}
                {starField}
                {hyperlaneElements}
                {planetElements}
            </div>
        );
    }
}