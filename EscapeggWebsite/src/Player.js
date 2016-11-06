import React, { Component } from 'react';
import './App.css';
import './Teams.css';


class Player extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      player: props.player
    }
  }

  mouseOut() {
      this.setState({hover:false});
  }

  mouseOver() {
      this.setState({hover:true});
  }

  render() {
    return (
      <div className="player" style={{marginLeft: this.state.player.location+"%"}}>
      </div>
    );
  }
}
export default Player;
