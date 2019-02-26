import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filter extends Component {
    render() {
        return (
            <div>
                <input className="header__filter" type="text" placeholder="search a character" onKeyUp={this.props.action} />
            </div>
        )
    }
}

Filter.propTypes = {
    action: PropTypes.func.isRequired
}

export default Filter;