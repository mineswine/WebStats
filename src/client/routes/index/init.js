import React from 'react';
import Griddle from 'griddle-react';


let fake = [
  {
    playername: 'insanehero',
    wins: 127,
    losses: 149,
    kills: 403,
    deaths: 338,
    headshots: 80
  },
  {
    playername: 'insanehero',
    wins: 127,
    losses: 149,
    kills: 403,
    deaths: 338,
    headshots: 80
  },  {
      playername: 'insanehero',
      wins: 127,
      losses: 149,
      kills: 403,
      deaths: 338,
      headshots: 80
    },  {
        playername: 'insanehero',
        wins: 127,
        losses: 149,
        kills: 403,
        deaths: 338,
        headshots: 80
      },  {
          playername: 'insanehero',
          wins: 127,
          losses: 149,
          kills: 403,
          deaths: 338,
          headshots: 80
        },  {
            playername: 'insanehero',
            wins: 127,
            losses: 149,
            kills: 403,
            deaths: 338,
            headshots: 80
          },  {
              playername: 'insanehero',
              wins: 127,
              losses: 149,
              kills: 403,
              deaths: 338,
              headshots: 80
            },  {
                playername: 'insanehero',
                wins: 127,
                losses: 149,
                kills: 403,
                deaths: 338,
                headshots: 80
              },
];
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.socket = this.props.route.socket;
    this.state = {};
  }
  componentDidMount() {
    this.socket.emit('tester', 'beep');
    this.socket.on('chat', function(data) {
      console.log(data);
    });
  }
  render() {
    return (
      <div id='wrapper'>
        <Sidebar />
        <PageBody />
      </div>
    )
  }
}

const Sidebar = ({}) => {
  return (
    <div id='sidebar-wrapper'>
      <div className='sidebar-logo'>
        <img src='/images/logo.png'/>
      </div>
      <div className='sidebar-divider'>
        <div className='divider-wrapper'>
          <div className='divider-header'>
            Player Search
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
            <li><button className='btn btn-primary gm-btn'>Survival Games with Guns</button></li>
            <li><button className='btn btn-primary gm-btn' disabled>Jedicraft</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const PageBody = ({}) => {
  return (
    <div id='page-content-wrapper'>
      <div id='content-overlay'>
        <Leaderboards />
      </div>
    </div>
  )
}

const Leaderboards = ({}) => {
  return (
    <div>
    </div>
  )
}

export default Index;
