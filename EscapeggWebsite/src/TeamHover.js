import React, { Component } from 'react';

class TeamHover extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const teams = [{name : "Dota", players : ["Marek","Jake","Milk"]},{name : "Hearthstone", players : ["Bob","Grafiti"]}];

    var players = teams.players((name) =>
        <div id={name}>
        </div>
    )
    

    return (
      <container id={teams.name}>
        {players}
      </container>
    );

  }
}

export default TeamHover;
