import React from 'react';

class NavButton extends React.Component {
  handleClick(e) {
    var data = e.target
    this.props.onClick(data)
  }

  render() {
    return (
      <div className="NavButton">
        <li><a onClick={this.handleClick}>{this.props.name}</a></li>
      </div>
    );
  }
}

export default NavButton;
