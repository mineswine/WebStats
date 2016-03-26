import React from 'react';

// Load Components
import Sidebar from './resources/sidebar';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className='wrapper'>
        <Sidebar socket={this.props.route.socket}/>
        <div id='page-content-wrapper'>
          <div id='imfuck'>
            <img src='/images/background.jpg' />
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Index;
