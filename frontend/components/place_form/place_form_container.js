import { connect } from 'react-redux';

import { createPlace } from '../../actions/place_actions';
import PlaceForm from './place_form';

const mapStateToProps = (state, {location}) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
  createPlace: place => dispatch(createPlace(place))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceForm);
