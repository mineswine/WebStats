import React from 'react';
import ScrollAnchor from '../../tools/Anchor';

// Load Components
import StatsTable from '../../components/StatsTable';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardIndex: 0,
      boardData: [],
      sortStat: 'elo',
      sortDate: '',
      prevPage: false,
      nextPage: true,
      showCount: 50
    }
  }
  handleNextPage(e) {
    var id = e.target.id;
    this.setState((state) => {
      state.boardIndex += state.showCount;
      if (state.boardIndex >= 980) {
        state.nextPage = false;
      }
      if (state.boardIndex >= state.showCount) {
        state.prevPage = true;
      }
      return state;
    }, () => {
      this.retreiveStats();
      ScrollAnchor(id);
    })
  }
  handlePrevPage(e) {
    var id = e.target.id;
    this.setState((state) => {
      state.boardIndex -= state.showCount;
      if (state.boardIndex === 0) {
        state.prevPage = false;
      }
      if (state.boardIndex < 980) {
        state.nextPage = true;
      }
      return state;
    }, () => {
      this.retreiveStats();
      ScrollAnchor(id);
    })
  }
  retreiveStats() {
    this.props.route.socket.emit('load_leaderboard', { index: this.state.boardIndex, sort: this.state.sortStat, count: this.state.showCount });
  }
  requestPlayernames(queryData) {
    var self = this;
    let calls = queryData.map((row) => {
      return new Promise(function(resolve, reject) {
        $.ajax({
          type: 'GET',
          url: 'https://us.mc-api.net/v3/name/' + row.uuid.split('-').join(''),
          dataType:'json',
          crossDomain: true,
          success: function(data) {
            resolve(data)
          }
        });
      });
    });
    Promise.all(calls).then(function(values) {
      values.forEach(function(val,i) {
        Object.defineProperty(queryData[i], 'player', {
          enumerable: true,
          value: val
        });
      });
      self.setState((state) => {
        state.boardData = queryData;
        return state;
      })
    });
  }
  handleStatSort(e) {
    let value = e.target.value;
    this.setState((state) => {
      state.sortStat = value;
      state.boardIndex = 0;
      state.prevPage = false;
    }, () => {
      this.retreiveStats();
    });
  }
  componentDidMount() {
    var self = this;
    this.retreiveStats();
    this.props.route.socket.on('payload_leaderboard', function(query) {
      self.requestPlayernames(query.data);
    });
  }
  componentWillUnmount() {
    this.props.route.socket.removeAllListeners("payload_leaderboard");
  }
  render() {
    let nextPage = null, prevPage = null;
    if (this.state.nextPage) {
      nextPage = <button onClick={this.handleNextPage.bind(this)} id='nextpage' href='#leaderboard' className='pull-right btn btn-primary'>Next Page</button>
    }
    if (this.state.prevPage) {
        prevPage = <button onClick={this.handlePrevPage.bind(this)} id='prevpage' href='#leaderboard' className='pull-left btn btn-primary'>Previous Page</button>

    }
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
            <div className='row' id='leaderboard'>
              <div className='leaderboad-aggregation'>
                <div className='leaderboard-sort'>
                  <label>Sort by Date: (Coming Soon)</label>
                  <select className='form-control' disabled>
                    <option>Last Week</option>
                  </select>
                </div>
                <div className='leaderboard-sort'>
                  <label>Sort by Stat:</label>
                  <select onChange={this.handleStatSort.bind(this)} className='form-control'>
                    <option value='elo'>ELO</option>
                    <option value='kills'>Kills</option>
                    <option value='deaths'>Deaths</option>
                    <option value='stepswalked'>Stepswalked</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='leaderboard-stats'>
                <StatsTable data={this.state.boardData} boardIndex={this.state.boardIndex}/>
              </div>
              {prevPage}
              {nextPage}
            </div>
            <div className='row'>
              <div className='leaderboard-nav'>
                <div className='pull-middle leaderboard-total'>
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
