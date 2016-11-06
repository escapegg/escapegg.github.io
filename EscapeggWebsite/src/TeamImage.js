import React, { Component } from 'react';
import './App.css';
import './Teams.css';
import Player from './Player';


class TeamImage extends Component {

  constructor(props) {
    super(props);
    this.onHoverOverPlayer = this.onHoverOverPlayer.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onRef = this.onRef.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.state = {
      hover: false,
      location: 0,
      player: props.player,
      width: 0
    }
  }

  onMouseOut(event) {
    console.log("-out-");
    this.setState(prevState => ({
      hover: false,
      location: 0,
      player: prevState.player,
      widht: prevState.width
    }));
  }

  onMouseMove(event) {
    console.log("------------++++++++++++++++==============++++++++++++++++++----------------");
    console.log(event.clientX);
    var x = event.clientX;
    this.setState(prevState => ({
      hover: true,
      location: x,
      player: prevState.player,
      width: prevState.width
    }));
  }

  onHoverOverPlayer(event) {
    console.log("------------++++++++++++++++==============++++++++++++++++++----------------");
    console.log(event.clientX);
    var x = event.clientX;
    this.setState(prevState => ({
      hover: true,
      location: x,
      player: prevState.player,
      width: prevState.width
    }));
  }

  onRef(settings) {
    this.setState(prevState => ({
      hover: true,
      location: prevState.location,
      player: prevState.player,
      width: settings.clientWidth
    }));
  }

  render() {  
 
    //const teams = [{name : "Dota", players : ["Marek","Jake","Milk"]},{name : "Hearthstone", players : ["Bob","Grafiti"]}];
    
    var playerDivs = this.props.team.players.map((playerDef) =>
      {
        console.log((this.state.location/this.state.width)*100);
        var xpercent = ((this.state.location/this.state.width)*100);
      if(
        xpercent < playerDef.locationMax && xpercent > playerDef.locationMin) {
        return (
          <div key={playerDef.name}>
            <Player player={playerDef} />
          </div>
        )
      } else {
        return null;
      }
      }
    )

    return (
      <div className="team" onMouseOver={this.onHoverOverPlayer} onMouseOut={this.onMouseOut} ref={this.onRef} onMouseMove={this.onMouseMove}>
        <img src={this.props.team.image}/>
        {this.state.hover ? playerDivs : ''}
      </div>
    );

  }
}

export default TeamImage;
