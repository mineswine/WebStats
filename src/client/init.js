// Load dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Load Routes
import Index from './routes/index/init';
import Leaderboard from './routes/leaderboard/init';
import Profile from './routes/profile/init';

// Load socket.io connector
import socket from './socket';

// Routing Setup
render((
  <Router history={browserHistory} >
    <Route path='/' socket={socket} component={Index}>
      <Route path='leaderboard/:gamemode' component={Leaderboard}/>
      <Route path='profile/:playername' component={Profile}/>
    </Route>
  </Router>
),
  document.getElementById('root')
);
