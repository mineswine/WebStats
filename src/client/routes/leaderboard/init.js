import React from 'react';

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

const Leaderboard = ({}) => {
  return (
    <div>
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

export default Leaderboard;
