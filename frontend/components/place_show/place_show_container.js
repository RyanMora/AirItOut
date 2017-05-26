import { connect } from 'react-redux';

import { fetchPlace } from '../../actions/place_actions';
import { selectPlace } from '../../reducers/selectors';
import PlaceShow from './place_show';

const mapStateToProps = (state, {match}) => {
  const placeId = parseInt(match.params.placeId);
  const place = selectPlace(state, match.params.placeId);
  return {
    placeId,
    place
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlace: id => dispatch(fetchPlace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceShow);
