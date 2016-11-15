import React, { Component } from 'react';


class Sponsors extends Component {
  render() {

    var sponsors = [
      {name: "Nvidia", icon: "./sponsors/nvidia.jpg", description:"For more than two decades, NVIDIA has pioneered visual computing, the art and science of computer graphics. With a singular focus on this field, we offer specialized platforms for the gaming, professional visualisation, data center and automotive markets."},
      {name: "GameLegends", icon:"./sponsors/gamelegends.jpg", description: "Game Legends provide high-quality branded merchandise which is produced and distributed through their global network. We work with Game Legends to create new and exciting merchandise concepts which our fans will love."},
      {name: "GameLeap", icon:"./sponsors/gameleap.jpg", description: "GameLeap offer premium learning courses for DotA2, with written and video guides created by expert players. Our partnership with them involves promotion of their plaform as well as media creation in collaboration with their marketing team."}]

    var sponsorDives

    return (
       <div id="sponsors">
            <h> Sponsors </h>
       </div>
    );

  }
}

export default Sponsors;

