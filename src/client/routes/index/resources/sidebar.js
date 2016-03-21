import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  handleChangePage(e) {
    let id = e.target.id;
    this.context.router.push('/stats/' + id);
  }
  render() {
    return (
      <div id='sidebar-wrapper'>
        <div className='sidebar-logo'>
          <a href='http://mineswine.com'><img src='/images/logo.png'/></a>
        </div>
        <div className='sidebar-divider'>
          <div className='divider-wrapper'>
            <div className='divider-header'>
              Profile Search
            </div>
            <div className='sidebar-search'>
              <input id='player_search' type='text' className='form-control' placeholder='Playername'/>
              <span id='search_icon'className="glyphicon glyphicon-search" aria-hidden="true"></span>
            </div>
          </div>
        </div>
        <div className='sidebar-divider'>
          <div className='divider-wrapper'>
            <div className='divider-header'>
              Leaderboards
            </div>
            <ul className='sidebar-gamemodes'>
              <li><button id='sg-guns' onClick={this.handleChangePage.bind(this)} className='btn btn-primary gm-btn'>Survival Games with Guns</button></li>
              <li><button className='btn btn-primary gm-btn' disabled>Jedicraft</button></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Sidebar.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Sidebar;
