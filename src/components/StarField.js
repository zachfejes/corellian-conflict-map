import React from 'react';
import './StarField.css';

export class StarField extends React.PureComponent {

    render() {
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
}