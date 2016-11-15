import React, { Component } from 'react';


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
            left: (((this.state.player.locationMin+this.state.player.locationMax)/2)-7)+"%", 
            display: (this.state.player.locationMin < this.props.mousePosition && this.props.mousePosition < this.state.player.locationMax) ? 'inline-block' : 'none' 
          }
        }>
        <h> {this.props.player.firstname + " \"" + this.props.player.handle + "\" " + this.props.player.lastname} </h>
        <a className="twitter" herf={this.props.player.twitterUrl}></a>
        <a className="twitch" herf={this.props.player.twitchUrl}></a>

      </div>
    );
  }
}
export default Player;
