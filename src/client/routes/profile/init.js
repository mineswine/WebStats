import React from 'react';

const Profile = ({}) => {
  return (
    <div>
    <div className='wrapper'>
      <div id='upper-content-profile'>
        <div className='profile-header'>
          <div className='profile-player'>
            <div className='profile-wrap'>
              <div className='profile-image'>
                <img src='https://crafatar.com/renders/body/insanehero?overlay&scale=3'/>
              </div>
              <div className='profile-playername'>
                insanehero
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id='bottom-content-profile'>
      <div className='profile-content'>
          <div className='gamemode-box'>
            <div className='gamemode-name'>
              Survival Games with Guns
            </div>
            <div className='gamemode-stats'>
              <div className='gamemode-stat-box'>
                <i className="stat-icon fa fa-bullseye"></i>
                <div className='gamemode-stat'>Kills</div>
                <div className='stat-value'>420</div>
              </div>
              <div className='gamemode-stat-box'>
                <i className="stat-icon fa fa-heartbeat"></i>
                <div className='gamemode-stat'>Deaths</div>
                <div className='stat-value'>327</div>
              </div>
              <div className='gamemode-stat-box'>
                <i className="stat-icon fa fa-bolt"></i>
                <div className='gamemode-stat'>Headshots</div>
                <div className='stat-value'>24</div>
              </div>
              <div className='gamemode-stat-box'>
                <i className="stat-icon fa fa-star"></i>
                <div className='gamemode-stat'>Wins</div>
                <div className='stat-value'>18</div>
              </div>
            </div>
          </div>
          <div className='gamemode-box'>
            <div className='gamemode-name'>
              Survival Games with Guns
            </div>
            <div className='gamemode-stats'>
              <div className='gamemode-stat-box'>
                <i className="stat-icon fa fa-bullseye"></i>
                <div className='gamemode-stat'>Kills</div>
                <div className='stat-value'>420</div>
              </div>
              <div className='gamemode-stat-box'>
                <i className="stat-icon fa fa-heartbeat"></i>
                <div className='gamemode-stat'>Deaths</div>
                <div className='stat-value'>327</div>
              </div>
              <div className='gamemode-stat-box'>
                <i className="stat-icon fa fa-bolt"></i>
                <div className='gamemode-stat'>Headshots</div>
                <div className='stat-value'>24</div>
              </div>
              <div className='gamemode-stat-box'>
                <i className="stat-icon fa fa-star"></i>
                <div className='gamemode-stat'>Wins</div>
                <div className='stat-value'>18</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
