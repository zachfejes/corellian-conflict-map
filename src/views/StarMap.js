import React from 'react';
import { PlanetSmall } from '../components';
import { PLANET_CORELLIA, PLANET_FORVAND, PLANET_XYQUINE_II, PLANET_SABERHING_ASTEROID_BELT, PLANET_CRASHS_DRIFT } from '../data';
import './StarMap.css';

export class StarMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusIndex: -1,
            isSkywalker: false
        }
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

        return(
            <PlanetSmall 
                planet={PLANET_FORVAND} 
                localFleet={undefined} 
                bases={undefined} 
                isSkywalker={isSkywalker} 
            />
        );
    }

    render() {
        let starField = this.renderStarField();
        let planetElements = this.renderPlanets();

        return(
            <div className="starMap">
                {starField}
                {planetElements}
            </div>
        );
    }
}