/* eslint-disable */
import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


//import containers:
import landingContainer from './containers/landing.js';
import postsFeed from './containers/feed';
import Nav from './components/Nav.js';
import Nav1 from './components/Navlogin.js';
import profileContainer from './containers/profile.js'

//import components:


var AppRouter = React.createClass({

  render: function(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={landingContainer} />
          <Route path="/feed" component={postsFeed} />
          <Route path="/profile" component={profileContainer} />
        </Router>
    </div>
    )
  }
})

export default AppRouter;
