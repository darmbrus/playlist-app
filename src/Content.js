import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <h1>Test Content</h1>
        <p>This is a test paragraph. data: {this.props.data}</p>
      </div>
    )
  }
}

export default Content;
