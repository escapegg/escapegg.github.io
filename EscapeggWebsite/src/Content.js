import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import TeamImage from './TeamImage';
import Header from './Header';

class Content extends Component {
  render() {

    return (
        <div>
            <Nav />
            <Header />
            <TeamImage />
        </div>
    );

  }
}

export default Content;
