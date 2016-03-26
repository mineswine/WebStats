import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: {}};
  }
  componentDidMount() {
    this.props.route.socket.emit('load_profile', { playername: this.props.params.playername});
    this.props.route.socket.on('payload_profile', function(query) {
      this.setState((state) => {
        state.profile = query.profile;
        return state;
      });
    }.bind(this));
  }
  componentWillUnmount() {
    this.props.route.socket.removeAllListeners("payload_profile");
  }
  render() {
    return (
      <div className='wrapper'>
        <div id='upper-content-profile'>
          <div className='profile-header'>
            <div className='profile-player'>
              <div className='profile-wrap'>
                <div className='profile-image'>
                  <img src={'https://crafatar.com/renders/body/'+ this.props.params.playername + '?overlay&scale=3'}/>
                </div>
                <div className='profile-playername'>
                  {this.props.params.playername}
                </div>
              </div>
            </div>
          </div>
        </div>
      <div id='bottom-content-profile'>
        <div className='profile-content'>
          <GamemodeBox profile={this.state.profile}/>
        </div>
      </div>
    </div>
    )
  }
}


const GamemodeBox = ({profile}) => {
  return (
    <div className='gamemode-box'>
      <div className='gamemode-name'>
        Survival Games with Guns
      </div>
      <div className='gamemode-stats'>
        <div className='gamemode-stat-box'>
          <i className="stat-icon fa fa-bar-chart"></i>
          <div className='gamemode-stat'>ELO</div>
          <div className='stat-value'><span className='purple'>{profile.elo}</span></div>
        </div>
        <div className='gamemode-stat-box'>
          <i className="stat-icon fa fa-bullseye"></i>
          <div className='gamemode-stat'>Kills</div>
          <div className='stat-value'>{profile.kills}</div>
        </div>
        <div className='gamemode-stat-box'>
          <i className="stat-icon fa fa-heartbeat"></i>
          <div className='gamemode-stat'>Deaths</div>
          <div className='stat-value'>{profile.deaths}</div>
        </div>
        <div className='gamemode-stat-box'>
          <i className="stat-icon fa fa-compass"></i>
          <div className='gamemode-stat'>Steps Walked</div>
          <div className='stat-value'>{profile.stepswalked}</div>
        </div>
        <div className='gamemode-stat-box'>
          <i className="stat-icon fa fa-star"></i>
          <div className='gamemode-stat'>Wins</div>
          <div className='stat-value'>{profile.wins}</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
