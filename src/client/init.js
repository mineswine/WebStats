// Load dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Load Routes
import Index from './routes/index/init';

// Load socket.io connector
import socket from './socket';

// Routing Setup
render((
  <Router history={browserHistory} >
    <Route path='/'>
      <IndexRoute socket={socket} component={Index}/>
    </Route>
  </Router>
),
  document.getElementById('root')
);
