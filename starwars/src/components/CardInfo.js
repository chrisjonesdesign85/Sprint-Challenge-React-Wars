import React from  'react'
import Card from './Card';
import './StarWars.css'

class CardInfo extends React.Component {

    render() {
        return (
            <div className="cardInfo">
                {this.props.starWarsInfo.map(obj => {
                    return (
                        <div key={obj.created}>
                            <Card starWarsInfo={obj} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CardInfo