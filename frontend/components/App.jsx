import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SearchContainer from './search/search_container';
import PlaceShowContainer from './place_show/place_show_container';
import PlaceFormContainer from './place_form/place_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Air it Out!</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/places/new" component={PlaceFormContainer} />
      <Route path="/places/:placeId" component={PlaceShowContainer} />
      <Route exact path="/" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;
