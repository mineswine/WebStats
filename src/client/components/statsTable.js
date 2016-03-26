import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class StatsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headers: ['player', 'elo', 'kills', 'deaths', 'stepswalked']};
  }
  getChildContext() {
    return { headers: this.state.headers }
  }
  render() {
    let head = null, body = null;
    if (this.props.data.length > 0) {

      head = <TableHeader headers={this.state.headers} />
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

StatsTable.childContextTypes = {
  headers: PropTypes.array
}

const TableHeader = ({headers}) => {
  let theaders = headers.map((header) => {
    return (
      <th key={header}>
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
        <TableRow rowData={row} index={((i + 1) + index)} key={i}/>
    )
  });
  return (
    <tbody>
      {rows}
    </tbody>
  )
}

const TableRow = ({rowData, index}, context) => {
  let row = context.headers.map((key, i) => {
    if (key.toLowerCase() === 'player') {
      return (
        <td key={i}>
          <Link to={'/profile/' + rowData[key].name}>
            <img className='playerhead-table' src={'https://crafatar.com/avatars/' + rowData[key].uuid + '?size=20&overlay'}/>
            <span id={'player-' + rowData[key].uuid} className='playername-table'>{rowData[key].name}</span>
          </Link>
        </td>
      )
    }
    return (
      <td key={i}>
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

TableRow.contextTypes = {
  headers: PropTypes.array
}

export default StatsTable;
