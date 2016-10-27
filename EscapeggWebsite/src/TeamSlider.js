import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick';
import './Teams.css';
import TeamHover from './TeamHover'


class TeamSlider extends Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 5,
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
      <container id={team.name}>
        <h1> {team.name} </h1>
      </container>
    )

    return (
      <Slider {...settings}>
        {teamDivs}
      </Slider>
    );

  }
}

export default TeamSlider;