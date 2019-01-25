import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CharacterCard extends Component {
    render() {
        const { name, image, house } = this.props;
        return (
            <div className="wizard__item-container">
                <img className="wizard__item-image" src={image} alt={name}></img>
                <h2 className="wizard__item-name">{name}</h2>
                <p className="wizard__item-house">{house}</p>
            </div>
        )
    }
}

CharacterCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    house: PropTypes.string
}

export default CharacterCard;