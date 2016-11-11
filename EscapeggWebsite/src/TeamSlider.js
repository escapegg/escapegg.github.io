import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick';
import './Teams.css';
import TeamImage from './TeamImage'


class TeamSlider extends Component {
  render() {
    var settings = {
      dots: false,
      autoplay: false,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 500,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    var dotaTeam = {
      name : "Dota", 
      players : [
        {
          name: "Marek",
          handle: "KlavenX",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 0,
          locationMax: 20
        },
        {
          name: "Jake",
          handle: "JakeX",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 20,
          locationMax: 35
        },
        {
          name: "Scott",
          handle: "Dark",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 35,
          locationMax: 55
        },
        {
          name: "Alex",
          handle: "Victain264",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 57,
          locationMax: 67
        },
        {
          name: "Derek",
          handle: "PooWillyPeeBum",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 67,
          locationMax: 92
        }],
      image: '/img/teams/dota.jpg'
    };
    var hearthstoneTeam = {
      name : "Hearthstone", 
      players : [,
        {
          name: "Chris",
          handle: "Chrispy",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 40,
          locationMax: 60
        }],
      image: '/img/teams/hearthstone.jpg'
    };

    var teams = [];
    teams.push(dotaTeam);
    teams.push(hearthstoneTeam);
    //const teams = [{name : "Dota", players : ["Marek","Jake","Milk"]},{name : "Hearthstone", players : ["Bob","Grafiti"]}];
    
    var teamDivs = teams.map((team) =>
      <container id={team.name}>
        <TeamImage team={team}/>
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
