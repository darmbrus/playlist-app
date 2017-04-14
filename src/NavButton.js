import React from 'react';

class NavButton extends React.Component {
  render() {
    return (
      <div className="NavButton">
        <li><a href={this.props.link}>{this.props.name}</a></li>
      </div>
    );
  }
}

export default NavButton;
