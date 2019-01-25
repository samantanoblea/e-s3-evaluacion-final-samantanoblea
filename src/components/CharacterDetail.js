import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Gryffindor from './../images/gryffindor.jpeg';
import Slytherin from './../images/slytherin.jpeg';
import Ravenclaw from './../images/ravenclaw.jpeg';
import Hufflepuff from './../images/hufflepuff.jpeg';
import Hogwarts from './../images/Hogwarts.jpeg';


class CharacterDetail extends Component {

    getImgHouse(currentHouse) {
        if (currentHouse === 'Gryffindor') {
            return Gryffindor;
        } else if (currentHouse === 'Slytherin') {
            return Slytherin;
        } else if (currentHouse === 'Ravenclaw') {
            return Ravenclaw;
        } else if (currentHouse === 'Hufflepuff') {
            return Hufflepuff;
        } else {
            return Hogwarts;
        }
    }

    render() {
        const { characters } = this.props;
        const characterId = this.props.match.params.id;
        if (characters.length > 0 && characterId < characters.length) {
            const character = characters[characterId];
            const { name, image, house, yearOfBirth, patronus, alive } = character;

            return (
                <div className="wizard__details-container" >
                <img className="wizard__details-currentHouse" src={this.getImgHouse(house)} alt={name}></img>
                    <h2 className="wizard__details-name">{name}</h2>
                    <img className="wizard__details-image" src={image} alt={name}></img>
                    <p className="wizard__details-house">{`House: ${house}`}</p>
                    <p className="wizard__details-birth">{`Birth: ${yearOfBirth}`}</p>
                    <p className="wizard__details-patronus">{`Patronus: ${patronus}`}</p>
                    <p className="wizard__details-alive">{`State: ${alive ? 'alive' : 'dead 💀'}`}</p>

                    <Link to="/" className="link__return">Go Back</Link>
                </div>
            );
        } else {
            return (
                <Fragment>
                    <p>Still no results</p>
                    <Link to="/" className="link__return">Go Back</Link>
                </Fragment>
            );
        }
    }
}

CharacterDetail.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    house: PropTypes.string,
    birth: PropTypes.number,
    patronus: PropTypes.string
}

export default CharacterDetail;