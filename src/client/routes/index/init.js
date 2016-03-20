import React from 'react';
import Griddle from 'griddle-react';

// Load Components
import StatsTable from '../../components/StatsTable';


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
              }
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
      <div className='wrapper'>
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
      <Profile />
    </div>
  )
}

const Profile = ({}) => {
  return (
    <div className='wrapper'>
      <div id='upper-content'>
        <div className='content-wrap'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='leaderboard-name'>
                    Survival Games with Guns
                  </div>
                  <div className='leaderboard-image'>
                    <img src='/images/sgrl.png'/>
                    <div className='after'></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div id='bottom-content'>
        <div className='content-wrap'>
          <div className='row'>
            <div className='leaderboad-aggregation'>
              <div className='leaderboard-sort'>
                <label>Sort by Date:</label>
                <select className='form-control'>
                  <option>Last Week</option>
                </select>
              </div>
              <div className='leaderboard-sort'>
                <label>Sort by Stat:</label>
                <select className='form-control'>
                  <option>Kills</option>
                </select>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='leaderboard-stats'>
              <StatsTable data={fake}/>
            </div>
          </div>
          <div className='row'>
            <div className='leaderboard-nav'>
              <div className='pull-middle leaderboard-total'>
                Total Players: 27001
              </div>
              <div className='pull-left btn btn-primary'>
                Previous Page
              </div>
              <div className='pull-right btn btn-primary'>
                Next Page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Leaderboards = ({}) => {
  return (
    <div className='wrapper'>
      <div id='upper-content'>
        <div className='content-wrap'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='leaderboard-name'>
                    Survival Games with Guns
                  </div>
                  <div className='leaderboard-image'>
                    <img src='/images/sgrl.png'/>
                    <div className='after'></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div id='bottom-content'>
        <div className='content-wrap'>
          <div className='row'>
            <div className='leaderboad-aggregation'>
              <div className='leaderboard-sort'>
                <label>Sort by Date:</label>
                <select className='form-control'>
                  <option>Last Week</option>
                </select>
              </div>
              <div className='leaderboard-sort'>
                <label>Sort by Stat:</label>
                <select className='form-control'>
                  <option>Kills</option>
                </select>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='leaderboard-stats'>
              <StatsTable data={fake}/>
            </div>
          </div>
          <div className='row'>
            <div className='leaderboard-nav'>
              <div className='pull-middle leaderboard-total'>
                Total Players: 27001
              </div>
              <div className='pull-left btn btn-primary'>
                Previous Page
              </div>
              <div className='pull-right btn btn-primary'>
                Next Page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
