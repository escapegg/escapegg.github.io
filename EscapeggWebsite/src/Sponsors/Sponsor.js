import React, { Component } from 'react';


class Sponsor extends Component {
 constructor(props) {
    super(props);
    
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.state = {hover: false};
  }

  onMouseOut(event) {
    this.setState(prevState => ({
      hover: false,
    }));
  }

  onMouseOver(event) {
    this.setState(prevState => ({
      hover: true,
    }));
  }

  render() {

    let popup = null;
    if (this.state.hover) {
      popup = <h5> {this.props.sponsor.description} </h5>
    }

    return (
       <div className="Sponsor" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
          <img src={this.props.sponsor.icon}/>
          {popup}
       </div>
    );

  }
}

export default Sponsor;
