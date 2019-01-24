import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class CharacterList extends Component{
    render(){
        return(
            <ul className="wizards__list">
            {this.props.characters.map(item =>{
              return(
                <li className="wizard__item" key={item.id}>
                <Link to={`/characters/${item.id}`}>
                  <CharacterCard name={item.name} image={item.image} house={item.house}/>
                </Link>
                </li>
              )  
            })}
          </ul>
        )
    }
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterList;