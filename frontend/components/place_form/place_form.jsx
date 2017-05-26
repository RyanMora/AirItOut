import React from 'react';
import { withRouter } from 'react-router';

class PlaceForm extends React.Component{
  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      description: '',
      picture_url: '',
      type_of_business
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToSearch() {
    this.props.history.push('/');
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(error)
        console.log(error);
      else
        this.setState({ picture_url: results[0].secure_url });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const place = Object.assign({}, this.state, this.coords);
    this.props.createPlace({place});
    this.navigateToSearch();
  }

  render() {
    const { description, picture_url, type_of_business } = this.state;
    const { lat, lng } = this.coords;

    return (
      <div>
        <div>
          <h3>Create A Place!</h3>

          <form onSubmit={this.handleSubmit}>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update('description')}
            />

            <label>Latitude</label>
            <input
              type="text"
              disabled
              value={lat}
            />

            <label>Longitude</label>
            <input
              type="text"
              disabled
              value={lng}
            />

            <div className="button-holder">
              <button onClick={this.handleCloudinary}>
                Add image
              </button>
            </div>

            <hr />

            <div>
              <input
                type="submit"
                value="Create Place"
              />
            </div>
          </form>

          <div>
            <button onClick={this.navigateToSearch}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaceForm);
