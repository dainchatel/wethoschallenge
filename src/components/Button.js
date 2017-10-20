import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
    // static propTypes = {
    //     text: PropTypes.string,
    // };

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <button className={this.props.black ? 'wethos-button' : 'wethos-button black'}>{this.props.text}</button>
        );
    }
}


