import React, { Component } from 'react';


class Nav extends Component {
  render() {

    return (
        <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" className="navbar-toggle"><span className="sr-only">Escape Gaming</span><i className="fa fa-bars">Menu</i></button><a href="#page-top" className="navbar-brand page-scroll">Escape Gaming</a>
                </div>
                <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden"><a href="#page-top"></a></li>
                        <li><a href="#teams" className="page-scroll">The Teams</a></li>
                        <li><a href="#TwitterFeed" className="page-scroll">News</a></li>
                        <li><a href="#Events" className="page-scroll">Calander</a></li>
                        <li><a href="#Swag" className="page-scroll">Swag</a></li>
                        <li><a href="#sponsors" className="page-scroll">Sponsors</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );

  }
}

export default Nav;
