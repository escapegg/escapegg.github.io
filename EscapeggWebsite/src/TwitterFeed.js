import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tumblr from './Tumblr/Tumblr.js';

class TwitterFeed extends Component {
  render() {

    return (
    <div id="TwitterFeed">
      <Tumblr/>
    </div>
    );

  }
}

export default TwitterFeed;
