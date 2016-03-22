import React from 'react';

// Load Components
import Sidebar from './resources/sidebar';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.socket = this.props.route.socket;
    this.state = {};
  }
  componentDidMount() {
    this.socket.emit('tes', 'beep');
    this.socket.on('chat', function(data) {
      console.log(data);
    });
  }
  render() {
    return (
      <div className='wrapper'>
        <Sidebar />
        <div id='page-content-wrapper'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Index;
