import React, { Component } from 'react';


class Calendar extends Component {


 constructor(props) {
    super(props);
    this.getUrl = this.getUrl.bind(this);
    this.requestData = this.requestData.bind(this);
    this.state = {CLIENT_ID: '7fqj12r1j3katn3ir3nfark9f8@group.calendar.google.com',
                URL: this.getUrl('7fqj12r1j3katn3ir3nfark9f8@group.calendar.google.com'),
                text: "Marek",
                items: []};
    this.requestData();
  }

 getUrl(clientId) {
    return `https://www.googleapis.com/calendar/v3/calendars/${clientId}/events?singleEvents=true&key=AIzaSyA-xW0xIfYvro-zD0JCLRfJwqs6s2MmKmU`;
 }

  render() {
      console.log(this.state.items);
      
    return (
       <div id="Calendar">
         {this.state.items.items ?
           this.state.items.items.map(item=><li key={item.id}>{item.description}</li>)
           : <li> Marek </li>} 
       </div>
    );

  }


  requestData() {
    fetch(this.getUrl(this.state.CLIENT_ID), {mode: "cors"}).then(result=>result.json()).then(items=>this.setState({items}));/* response => (
    console.log(response)
      this.setState( prevState => (
        {CLIENT_ID: prevState.CLIENT_ID,
        URL: prevState.URL,
        text: response.blob(),
        events: []}))
    ))
  }
*/
  }
  //handleSuccess(response) {
  //response.json().then((calendar) => {
    //dispatch({
    //    type: "UPCOMING_EVENTS_ADD"
    //  , events: calendar.items
    //  });
    //})
  //}
  //handleFailure(error) {
  //  console.log("ERROR!!!");
  //  console.trace();
  //}

}
export default Calendar;

