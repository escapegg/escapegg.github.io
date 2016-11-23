import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './Calendar/Calendar'


class Events extends Component {
  render() {

    return (
        <div id="Events">
            <Cal/>
        </div>
    );

  }
}

export default Events;
