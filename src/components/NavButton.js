import React from 'react';
import { Link } from 'react-router';

class NavButton extends React.Component {
  render() {
    return (
      <div className="NavButton">
        <li>
          <Link to={this.props.link}>
            {this.props.name}
          </Link>
        </li>
      </div>
    );
  }
}

export default NavButton;
