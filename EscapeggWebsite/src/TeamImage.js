import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick';
import './Teams.css';
import TeamHover from './TeamHover'


class TeamImage extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    var dotaTeam = {name : "Dota", players : ["Marek","Jake"]};
    var hearthstoneTeam = {name : "Hearthstone", players : ["Jammie"]};

    var teams = [];
    teams.push(dotaTeam);
    teams.push(hearthstoneTeam);
    //const teams = [{name : "Dota", players : ["Marek","Jake","Milk"]},{name : "Hearthstone", players : ["Bob","Grafiti"]}];
    
    var teamDivs = teams.map((team) =>
      <container id={team.name}/>
    )

    return (
      <Slider {...settings}>
        {teamDivs}
      </Slider>
    );

  }
}

export default TeamImage;
