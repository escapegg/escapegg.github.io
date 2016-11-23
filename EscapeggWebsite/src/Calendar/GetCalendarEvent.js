import React, { Component } from 'react';


class Calendar {


 constructor(props) {
    super(props);
    this.getUrl = this.getUrl.bind(this);
    this.state = {CLIENT_ID: '7fqj12r1j3katn3ir3nfark9f8@group.calendar.google.com',
                URL: this.getUrl('7fqj12r1j3katn3ir3nfark9f8@group.calendar.google.com'),
                text: "Marek"};
  }

 getUrl(clientId) {
    return `https://www.googleapis.com/calendar/v3/calendars/${clientId}/events?singleEvents=true&key=AIzaSyA-xW0xIfYvro-zD0JCLRfJwqs6s2MmKmU`;
 }

}

export default Calendar;

