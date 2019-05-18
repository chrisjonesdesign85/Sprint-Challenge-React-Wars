import React from 'react'
import './StarWars.css'

class Card extends React.Component {

    render() {
        return(
            <div className="cta">
            <p className="text">
                Name: {this.props.starWarsInfo.name} <br />
                Height: {this.props.starWarsInfo.height}cm<br />
                Mass: {this.props.starWarsInfo.mass}kg<br />
                Hair Color: {this.props.starWarsInfo.hair_color}<br />
                Skin Color: {this.props.starWarsInfo.skin_color}<br />
                Eye Color: {this.props.starWarsInfo.eye_color}<br />
                D.O.B: {this.props.starWarsInfo.birth_year}<br />
                Gender: {this.props.starWarsInfo.gender}<br />
            </p>
        </div>
        );
        
    }
}

export default Card