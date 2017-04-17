import React from 'react';

class NavButton extends React.Component {
  render() {
    return (
      <div className="NavButton">
        <li><a onClick={this.props.onClick}>{this.props.name}</a></li>
      </div>
    );
  }
}

export default NavButton;
