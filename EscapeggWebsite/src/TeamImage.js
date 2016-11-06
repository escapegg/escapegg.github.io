import React, { Component } from 'react';
import './App.css';
import './Teams.css';
import Player from './Player';


class TeamImage extends Component {

  constructor(props) {
    super(props);
    this.onHoverOverPlayer = this.onHoverOverPlayer.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.state = {
      hover: false,
      player: props.player
    }
  }

  onMouseOut(event) {
    console.log("-out-");
    this.setState(prevState => ({
      hover: false,
      player: prevState.player
    }));
  }

  onHoverOverPlayer(event) {
    console.log("------------++++++++++++++++==============++++++++++++++++++----------------");
    this.setState(prevState => ({
      hover: true,
      player: prevState.player
    }));
  }

  render() {  
 
    //const teams = [{name : "Dota", players : ["Marek","Jake","Milk"]},{name : "Hearthstone", players : ["Bob","Grafiti"]}];
    
    var playerDivs = this.props.team.players.map((playerDef) =>
      <div key={playerDef.name}>
        <Player player={playerDef} />
      </div>
    )

    return (
      <div className="team" onMouseOver={this.onHoverOverPlayer} onMouseOut={this.onMouseOut}>
        <img src={this.props.team.image}/>
        {this.state.hover ? playerDivs : ''}
      </div>
    );

  }
}

export default TeamImage;
