import React, { Component } from 'react';
import './App.css';
import './Teams.css';


class TeamImage extends Component {


  render() {  
 
    //const teams = [{name : "Dota", players : ["Marek","Jake","Milk"]},{name : "Hearthstone", players : ["Bob","Grafiti"]}];
    
    var playerDivs = this.props.team.players.map((player) =>
      <div id={player.name} className="popup">
        <a href="#" class="expand">+</a>
        <a class="close-overlay hidden">x</a>
      </div>
    )

    return (
      <div className="player">
        <img src={this.props.team.image}/>
        {playerDivs}
      </div>
    );

  }
}

export default TeamImage;
