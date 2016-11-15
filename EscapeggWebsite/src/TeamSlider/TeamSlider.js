import React, { Component } from 'react';
import '../App.css';
import Slider from 'react-slick';
import '../Teams.css';
import TeamImage from './TeamImage'


class TeamSlider extends Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      lazyLoad: false,
      pauseOnHover: true,
    };
    
    var dotaTeam = {
      name : "Dota", 
      players : [
        {
          firstname: "Marek",
          lastname: "Counts",
          handle: "KlavenX",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "https://www.twitch.tv/klavenx", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 0,
          locationMax: 18
        },
        {
          firstname: "Jake",
          lastname: "Ramsy",
          handle: "JakeX",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "https://www.twitch.tv/klavenx", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 18,
          locationMax: 37
        },
        {
          firstname: "Scott",
          lastname: "poopooface",
          handle: "Dark",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "https://www.twitch.tv/klavenx", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 37,
          locationMax: 55
        },
        {
          firstname: "Alex",
          lastname: "Frydell",
          handle: "Victain264",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "https://www.twitch.tv/klavenx", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 57,
          locationMax: 73
        },
        {
          firstname: "Derek",
          lastname: "Shoemaker",
          handle: "PooWillyPeeBum",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "https://www.twitch.tv/klavenx", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 73,
          locationMax: 92
        }],
      image: '/img/teams/dota.jpg'
    };
    var hearthstoneTeam = {
      name : "Hearthstone", 
      players : [,
        {
          firstname: "Chris",
          lastname: "Raydell",
          handle: "Chrispy",
          country: "", //Will be a path to a flag image.
          twitterUrl: "", //twitter page url
          twitchUrl: "https://www.twitch.tv/klavenx", //twitch page url,
          facebookUrl: "", //facebook page url
          locationMin: 40,
          locationMax: 60
        }],
      image: '/img/teams/hearthstone.jpg'
    };

    var teams = [];
    teams.push(dotaTeam);
    teams.push(hearthstoneTeam);
    
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
