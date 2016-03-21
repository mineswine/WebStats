import React from 'react';
import { Link } from 'react-router';

class StatsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <table className='table table-striped'>
        <TableHeader headers={Object.keys(this.props.data[0])} />
        <TableBody bodyData={this.props.data} />
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
        {theaders}
      </tr>
    </thead>
  )
}

const TableBody = ({bodyData}) => {
  let rows = bodyData.map((row) => {
    return (
        <TableRow rowData={row}/>
    )
  });
  return (
    <tbody>
      {rows}
    </tbody>
  )
}

const TableRow = ({rowData}) => {
  let headers = Object.keys(rowData);
  let row = headers.map((key) => {
    if (key.toLowerCase() === 'playername') {
      return (
        <td>
          <Link to={'/profile/' + rowData[key]}>
            <img className='playerhead-table' src={'https://mcapi.ca/avatar/2d/' + rowData[key] + '/20'}/>
            <span className='playername-table'>{rowData[key]}</span>
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
      {row}
    </tr>
  )
}

export default StatsTable;
