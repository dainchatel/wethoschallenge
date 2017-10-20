import React, { Component, PropTypes } from 'react';

export default class Button extends Component {

    // this is the button class
    // it takes one or two props, "text" & "black"
    // text tells the button what text to have
    // black tells it whether or not it's on a dark background (so it can have white font and outline)

    render() {
        return (
          <button className={this.props.black ? 'wethos-button' : 'wethos-button black'}>{this.props.text}</button>
        );
    }
}


