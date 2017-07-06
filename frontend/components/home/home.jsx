import React from 'react';

import HeaderContainer from '../header/header_container';
import HomeIndex from './home_index';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="homepage">
        <HeaderContainer {...this.props}/>

        <div id="upperHomepage">
          <div id="quote">
            <h1>
              Air it out!
            </h1>
          </div>

        </div>

        <div id="midHomepage">
          <h2 id="trending">Recent Businesses</h2>
        </div>

        <div id="lowerHomepage">
          <label id="popular"> <HomeIndex {...this.props}/> </label>
        </div>
      </div>
    );
  }
}

export default Home;
