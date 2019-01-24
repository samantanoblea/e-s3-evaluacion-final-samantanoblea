import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CharacterCard extends Component {
    render() {
        const {name, image, house} = this.props;
        return (
            <div className="">
                <h2 className="wizard__name">{name}</h2>
                <img className="wizard__image" src={image} alt={name}></img>
                <p className="wizard__house">{house}</p>
            </div>
        )
    }
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired
}

export default CharacterCard;