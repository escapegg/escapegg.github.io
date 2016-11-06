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
      autoplay: true,
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
          location: 10
        },
        {
          name: "Jake",
          handle: "JakeX",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          location: 25
        },
        {
          name: "Scott",
          handle: "Dark",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          location: 50
        },
        {
          name: "Alex",
          handle: "Victain264",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          location: 70
        },
        {
          name: "Derek",
          handle: "PooWillyPeeBum",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "", //twitch page url,
          facebookUrl: "", //facebook page url
          location: 90
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
          location: 50
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
