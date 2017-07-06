import { connect } from 'react-redux';

import { fetchPlaces } from '../../actions/place_actions';
import PlaceIndex from './place_index';

const mapStateToProps = (state) => ({
  places: state.places
});

const mapDispatchToProps = dispatch => ({
  fetchPlaces: (params) => dispatch(fetchPlaces(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceIndex);
