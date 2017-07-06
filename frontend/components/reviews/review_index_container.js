import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { deleteReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteReview: review => dispatch(deleteReview(review)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
