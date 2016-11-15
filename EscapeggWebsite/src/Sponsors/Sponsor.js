import React, { Component } from 'react';
import './App.css';


class Sponsor extends Component {
 constructor(props) {
    super(props);
  }


  render() {
    return (
       <div id={this.props.sponsor.name}>
            <h> {this.props.sponsor.name} </h>
       </div>
    );

  }
}

export default Sponsors;
