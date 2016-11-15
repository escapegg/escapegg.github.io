import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import TeamSlider from './TeamSlider/TeamSlider';
import Header from './Header';
import Events from './Events';
import TwitterFeed from './TwitterFeed';
import Swag from './Swag';
import Sponsors from './Sponsors/Sponsors';
import Footer from './Footer/Footer';

class Content extends Component {
  render() {

    return (
        <div>
            <Nav />
            <Header />
            <TeamSlider />
            <Events />
            <TwitterFeed />
            <Swag />
            <Sponsors />
            <Footer />
        </div>
    );

  }
}

export default Content;
