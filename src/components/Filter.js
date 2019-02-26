import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filter extends Component{
    render(){
        return(
            <input className="header__filter" type="text"  placeholder="Search a character" onKeyUp={this.props.action}/>
        )
    }
}

Filter.propTypes = {
    action: PropTypes.func.isRequired}

export default Filter;