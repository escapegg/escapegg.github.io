import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick';

class SliderTest extends Component {
  render() {
     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src="./img/teams/dota.jpg"></img></div>
        <div><img src="./img/teams/csgo.jpg"></img></div>
        <div><img src="./img/teams/hearthstone.png"/></div>
      </Slider>
    );

  }
}

export default SliderTest;
