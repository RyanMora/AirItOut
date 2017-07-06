import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchPlaces } from '../../actions/place_actions';
import Header from './header';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchPlaces: params => dispatch(fetchPlaces(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
