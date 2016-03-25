import React from 'react';

// Load Components
import StatsTable from '../../components/StatsTable';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardIndex: 0,
      boardData: []
    }
  }
  handleNextPage() {
    this.setState((state) => {
      state.boardIndex += 20;
      return state;
    }, () => {
      this.retreiveStats();
    })
  }
  handlePrevPage() {
    this.setState((state) => {
      state.boardIndex -= 20;
      return state;
    }, () => {
      this.retreiveStats();
    })
  }
  retreiveStats() {
    this.props.route.socket.emit('load_top_elo', { index: this.state.boardIndex });
  }
  componentDidMount() {
    var self = this;
    this.retreiveStats();
    this.props.route.socket.on('receive_top_elo', function(query) {
      console.log("did it go?", query.data);
      self.setState((state) => {
        state.boardData = query.data;
        return state;
      })
    });
  }
  render() {
    return (
      <div className='wrapper' id='fuckyou'>
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
                <StatsTable data={this.state.boardData} boardIndex={this.state.boardIndex}/>
              </div>
              <button onClick={this.handlePrevPage.bind(this)} className='pull-left btn btn-primary'>
                Previous Page
              </button>
              <button onClick={this.handleNextPage.bind(this)} className='pull-right btn btn-primary'>
                Next Page
              </button>
            </div>
            <div className='row'>
              <div className='leaderboard-nav'>
                <div className='pull-middle leaderboard-total'>
                  Total Players: 27001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Leaderboard;
