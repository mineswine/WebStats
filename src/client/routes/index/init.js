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
        <Sidebar />
        <div id='page-content-wrapper'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Index;
