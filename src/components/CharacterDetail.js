import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class CharacterDetail extends Component {
 
    render(){ 
        const {characters} = this.props;
        const characterId = this.props.match.params.id;

        if (characters.length > 0 && characterId < characters.length)  {
            const character = characters[characterId];

            const {name, image, house, yearOfBirth, patronus, alive} = character;

            return (
                <div className="wizard__details-container">
                    <h2 className="wizard__details-name">{name}</h2>
                    <img className="wizard__details-image" src={image} alt={name}></img>
                    <p className="wizard__details-house">{`Casa: ${house}`}</p>
                    <p className="wizard__details-birth">{`Nacimiento: ${yearOfBirth}`}</p>
                    <p className="wizard__details-patronus">{`Patronus: ${patronus}`}</p>
                    <p className="wizard__details-alive">{`Estado: ${alive ? 'vivo' : 'muerto 💀'}`}</p>
                    
                    <Link to="/" className="link__return">Volver</Link>
                </div>
            );
        }else{
            return (
                <Fragment>
                   <p>Aún no tenemos datos</p> 
                   <Link to="/" className="link__return">Volver</Link>
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