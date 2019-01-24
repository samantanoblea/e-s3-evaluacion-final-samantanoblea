import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CharacterDetail extends Component {
    render(){ 
        const {characters} = this.props;
        const characterId = this.props.match.params.id;

        if (characters.length > 0 && characterId < characters.length)  {
            const character = characters[characterId];

            // const {name, image, house, birth, patronus, alive} = this.props.characters;
            const {name, image, house, dateOfBirth, patronus, alive} = character;

            return (
                <div className="wizard__details">
                    <h2 className="wizard__details-name">{name}</h2>
                    <img className="wizard__details-image" src={image} alt={name}></img>
                    <p className="wizard__details-house">{`Casa: ${house}`}</p>
                    <p className="wizard__details-birth">{`Nacimiento: ${dateOfBirth}`}</p>
                    <p className="wizard__details-patronus">{`Patronus: ${patronus}`}</p>
                    <p className="wizard__details-alive">{`Estado: ${alive}`}</p>

                    <Link to="/">Volver</Link>
                </div>
            );
        }else{
            return (
                <Fragment>
                   <p>Aún no tenemos datos</p> 
                   <Link to="/">Volver</Link>
                </Fragment>
            );
        }
    }
}

// CharacterList.propTypes = {
//     name: PropTypes.string,
//     image: PropTypes.string,
//     house: PropTypes.string,
//     birth: PropTypes.number,  
//     patronus: PropTypes.string,
//     alive: PropTypes.string
// }

export default CharacterDetail;