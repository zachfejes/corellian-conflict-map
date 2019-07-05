import React from 'react';
import { PlanetSmall } from '../components';
import './StarMap.css';

export class StarMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusIndex: -1
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

    }

    render() {
        let starField = this.renderStarField();

        return(
            <div className="starMap">
                {starField}
                <PlanetSmall/>
            </div>
        );
    }
}