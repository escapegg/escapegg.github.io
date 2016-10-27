import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import TeamSlider from './TeamSlider';
import Header from './Header';
import Events from './Events';
import TwitterFeed from './TwitterFeed';
import Swag from './Swag';
import Sponsors from './Sponsors';
import Footer from './Footer';

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
