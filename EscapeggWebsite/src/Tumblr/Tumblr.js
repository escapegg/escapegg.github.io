import React, { Component } from 'react';


class Tumblr extends Component {


 constructor(props) {
    super(props);
    this.getUrl = this.getUrl.bind(this);
    this.requestData = this.requestData.bind(this);
    this.state = {CLIENT_ID: 'RjiB9Bwiio4UCzl4DgtdMqStQMUVS1XYQCWBRZRRiNXdvKdBGg',
                URL: this.getUrl('RjiB9Bwiio4UCzl4DgtdMqStQMUVS1XYQCWBRZRRiNXdvKdBGg'),
                text: "Marek",
                posts: []};
    this.requestData();
  }

 getUrl(clientId) {
   return 'https://api.tumblr.com/v2/blog/klavenx.tumblr.com/posts/text?api_key=HibVNtJsuG99q2jTxf44gk0h1fEPUgo2mKDLHPfK07d41tywEe';
 }

  render() {
      console.log(this.state.posts);
      
    return (
       <div id="Tumblr">
         {this.state.posts.items ?
           this.state.posts.items.map(item=><li key={item.id}>{item.description}</li>)
           : <li> Marek </li>} 
       </div>
    );

  }


  requestData() {
    fetch(this.getUrl(this.state.CLIENT_ID), {mode: "cors"}).then(result=>result.json()).then(posts=>console.log(posts));//this.setState({posts : posts}));
    /* response => (
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
export default Tumblr;

