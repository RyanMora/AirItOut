import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import SearchContainer from './place/search_container';
import PlaceShowContainer from './place_show/place_show_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div id="main">

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route exact path="/places" component={SearchContainer} />
      <Route path="/places/:placeId" component={PlaceShowContainer} />
    </Switch>
  </div>
);

export default App;
