import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  enterListener(e) {
    let SearchInput = document.getElementById('player_search').value;
    let SearchMsg = document.getElementById('search-msg');

    if (SearchInput.length < 1) {
      return;
    }

    if (e.keyCode == 13) {
      this.props.socket.emit('player_search', { search: SearchInput});
    }
  }
  handleClickSearch(e) {
    let SearchInput = document.getElementById('player_search').value;
    if (SearchInput.length < 1) {
      return;
    }
    this.props.socket.emit('player_search', { search: SearchInput});
  }
  componentDidMount() {
    let self = this;
    let SearchInput = document.getElementById('player_search');
    SearchInput.addEventListener('focusin', function(e) {
      window.addEventListener('keypress', self.enterListener.bind(self));
    });
    SearchInput.addEventListener('focusout', function(e) {
      window.removeEventListener('keypress', self.enterListener.bind(self));
    });

    this.props.socket.on('payload_search', function(query) {
      if (!query.exists) {
        $('#search-msg').fadeIn(100).text('Error: Player not found.');
        setTimeout(function() {
          $('#search-msg').fadeOut(100);
        }, 2000);
      } else {
        browserHistory.push(`/profile/${query.player}`);
      }
    });
  }
  componentWillUnmount() {
    this.props.socket.removeAllListeners("payload_search");
  }
  handleChangePage(e) {
    let id = e.target.id;
    this.context.router.push('/leaderboard/' + id);
  }
  render() {
    return (
      <div id='sidebar-wrapper'>
        <div id='sidebar-content-wrapper'>
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
                <span onClick={this.handleClickSearch.bind(this)} id='search_icon'className="glyphicon glyphicon-search" aria-hidden="true"></span>
                <div id='search-msg'></div>
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
      </div>
    )
  }
}

Sidebar.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Sidebar;
