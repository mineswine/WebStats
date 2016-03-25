import React from 'react';
import { Link } from 'react-router';

class StatsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(props) {
    let calls = props.data.map((row) => {
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
      values.forEach(function(val) {
        let player = document.getElementById('player-' + val.full_uuid);
        player.innerHTML = val.name;
      });
    });
  }
  render() {
    let head = null, body = null;
    if (this.props.data.length > 0) {
      head = <TableHeader headers={Object.keys(this.props.data[0])} />
      body = <TableBody bodyData={this.props.data} index={this.props.boardIndex}/>
    }
    return (
      <table className='table table-striped'>
        {head}
        {body}
      </table>
    )
  }
}

const TableHeader = ({headers}) => {
  let theaders = headers.map((header) => {
    return (
      <th>
        {header}
      </th>
    )
  });
  return (
    <thead>
      <tr>
        <th>Rank</th>
        {theaders}
      </tr>
    </thead>
  )
}

const TableBody = ({bodyData, index}) => {

  let rows = bodyData.map((row, i) => {
    return (
        <TableRow rowData={row} index={((i + 1) + index)}/>
    )
  });
  return (
    <tbody>
      {rows}
    </tbody>
  )
}

const TableRow = ({rowData, index}) => {
  let headers = Object.keys(rowData);
  let row = headers.map((key, i) => {
    if (key.toLowerCase() === 'uuid') {
      return (
        <td>
          <Link to={'/profile/' + rowData[key]}>
            <img className='playerhead-table' src={'https://crafatar.com/avatars/' + rowData[key] + '?size=20&overlay'}/>
            <span id={'player-' + rowData[key]} className='playername-table'>{rowData[key]}</span>
          </Link>
        </td>
      )
    }
    return (
      <td>
        {rowData[key]}
      </td>
    )
  })
  return (
    <tr>
      <td>{index}</td>
      {row}
    </tr>
  )
}

export default StatsTable;
