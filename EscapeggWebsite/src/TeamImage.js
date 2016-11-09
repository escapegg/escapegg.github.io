import React, { Component } from 'react';
import './App.css';
import './Teams.css';
import Player from './Player';
import ResizeWraper from './ResizeWrapper';


class TeamImage extends Component {

  constructor(props) {
    super(props);
    this.onHoverOverPlayer = this.onHoverOverPlayer.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onRef = this.onRef.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentWillUpdate = this.componentWillUpdate.bind(this);
    this.state = {
      hover: false,
      location: 0,
      player: props.player,
      width: 0
    }
  }
  
  componentDidMount() {
  }

  componentDidUpdate() {
    console.log("Something");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentWillUnmount() {
     }

  handleResize(event) {
    console.log("MadeItHere");
    console.log(event);
    this.setState(prev => ({
      hover: prev.hover,
      location: prev.location,
      player: prev.player,
      width: event.srcElement.innerWidth
    }))
  }

  onMouseOut(event) {
    this.setState(prevState => ({
      hover: false,
      location: 0,
      player: prevState.player,
      widht: prevState.width
    }));
  }

  onMouseMove(event) {
    var x = event.clientX;
    this.setState(prevState => ({
      hover: true,
      location: x,
      player: prevState.player,
      width: prevState.width
    }));
  }

  onHoverOverPlayer(event) {
    var x = event.clientX;
    this.setState(prevState => ({
      hover: true,
      location: x,
      player: prevState.player,
      width: prevState.width
    }));
  }

  onRef(settings) {
    this.setState(prevState => ({
      hover: true,
      location: prevState.location,
      player: prevState.player,
      width: settings.clientWidth
    }));
  }

  render() {  
 
    var playerDivs = this.props.team.players.map((playerDef) =>
      {
        var xpercent = ((this.state.location/this.state.width)*100);
      if(
        xpercent < playerDef.locationMax && xpercent > playerDef.locationMin) {
        return (
          <div key={playerDef.name}>
            <Player player={playerDef} />
          </div>
        )
      } else {
        return null;
      }
      }
    )

    return (
      <div className="team" onMouseOver={this.onHoverOverPlayer} onMouseOut={this.onMouseOut} ref={this.onRef} onMouseMove={this.onMouseMove}>
        <ResizeWraper onWindowResize={this.handleResize}>
          <img src={this.props.team.image}/>
          {this.state.hover ? playerDivs : ''}
        </ResizeWraper>
      </div>
    );

  }
}

export default TeamImage;
