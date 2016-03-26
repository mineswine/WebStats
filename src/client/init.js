// Load dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Load Routes
import Index from './routes/index/init';
import Leaderboard from './routes/leaderboard/init';
import Profile from './routes/profile/init';
import Matches from './routes/matches/init';

// Load socket.io connector
import socket from './socket';

// Routing Setup
render((
  <Router history={browserHistory} >
    <Route path='/' component={Index} socket={socket}>
      <Route path='leaderboard/:gamemode' socket={socket} component={Leaderboard}/>
      <Route path='profile/:playername' socket={socket} component={Profile}/>
      <Route path='matches/:uuid' socket={socket} componet={Matches}/>
    </Route>
  </Router>
),
  document.getElementById('root')
);
