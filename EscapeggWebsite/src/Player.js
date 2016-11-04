import React, { Component } from 'react';
import './App.css';
import './Teams.css';


class Player extends Component {
getInitialState() {
    return {hover:false};
}

mouseOut() {
    this.setState({hover:false});
}

mouseOver() {
    this.setState({hover:true});
}

  render() {
 
    //const teams = [{name : "Dota", players : ["Marek","Jake","Milk"]},{name : "Hearthstone", players : ["Bob","Grafiti"]}];

    return (
      <div className="player">
        <img src={this.props.team.image}/>
        {playerDivs}
      </div>
    );

  }
}

export default Player;
