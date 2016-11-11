import React, { Component } from 'react';
import './App.css';
import './Teams.css';


class Player extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      player: props.player,
      xposition: props.mousePosition
    }
  }

  onMouseOut(event) {
    console.log("here")
  }

  onMouseMove(event) {
    console.log("here")
  }
  onHoverOverPlayer(event) {
    console.log("here")
  }

  render() {
    return (
      <div className="player" 
        style={
          {
            left: ((this.state.player.locationMin+this.state.player.locationMax)/2)+"%", 
            display: (this.state.player.locationMin < this.props.mousePosition && this.props.mousePosition < this.state.player.locationMax) ? 'inline-block' : 'none' 
          }
        }>
      </div>
    );
  }
}
export default Player;
