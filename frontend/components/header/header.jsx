import React from 'react';

import SearchBar from './search_bar';
import { Redirect, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  redirectLogin() {
    return <Redirect to="/" />;
  }

  render() {
    if (!this.props.currentUser) {
      return this.redirectLogin();
    }
    return (
      <div id="header">
        <div id="headerLinks">
          <Link id="homeLink" to="/home">Zelp</Link>
          <a id="github" href="https://github.com/ryanmora/YelpClone">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/ryanmora/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
        <SearchBar {...this.props}/>
      <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default Header;
