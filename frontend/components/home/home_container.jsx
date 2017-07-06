import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchPlaces } from '../../actions/place_actions';
import Home from './home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  places: state.places
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchPlaces: (params) => dispatch(fetchPlaces(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
