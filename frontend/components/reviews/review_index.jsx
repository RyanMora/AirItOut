import React from 'react';

import ReviewIndexItem from './review_index_item';
import ReviewForm from './review_form';
import Modal from 'react-modal';
import ModalStyle from '../modal_style';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state= {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: false});
  }

  render() {
    if (this.props.reviews.length === 0) {
      return <div>loading</div>;
    } else {
      let {reviews} = this.props;
      return(
        <div id="reviewIndex">
          <h2 id="reviewIndexTitle">Reviews</h2>
          <button id="modal" onClick={this.openModal}>Post Review</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={ModalStyle}
            contentLabel="example Modal"
          >
            <ReviewForm {...this.props}
              closeModal={this.closeModal}/>
          </Modal>
          {reviews.map(review => (
            <ReviewIndexItem
              key={review.id}
              review={review}
              {...this.props}
            />
          ))}
        </div>
      );
    }
  }
}

export default ReviewIndex;
