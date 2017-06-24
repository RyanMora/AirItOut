import React from 'react';

import HomeIndex from './home_index';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="homepage">

        <div id="upperHomepage">
          <div id="quote">
            <h1>
              You've all been ratted out on yelp.

              Here's your chance to get back at them!
            </h1>
          </div>

        </div>

        <div id="midHomepage">
          <h2 id="trending">Featured Shitty Customers</h2>
        </div>

        <div id="lowerHomepage">
          <label id="popular"> <HomeIndex {...this.props}/> </label>
        </div>
      </div>
    );
  }
}

export default Home;
