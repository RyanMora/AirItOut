import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: false,
      2: false,
      3: false,
      4: false
    };

    this.handlePrice = this.handlePrice.bind(this);
  }

  handlePrice(value) {
    return e => {
      this.setState({ [value]: e.target.checked },
      () => this.props.fetchPlaces({price: this.state}));
    };
  }

  render() {
    return (
      <div id="priceFilter">
        <label>
          $<input
            onChange={this.handlePrice(1)}
            value={1}
            type="checkbox"
            checked={this.state['1']}
          />
        </label>
        <label>
          $$<input
            onChange={this.handlePrice(2)}
            value={2}
            type="checkbox"
            checked={this.state[2]}
          />
        </label>
        <label>
          $$$<input
            onChange={this.handlePrice(3)}
            value={3}
            type="checkbox"
            checked={this.state[3]}
          />
        </label>
        <label>
          $$$$<input
            onChange={this.handlePrice(4)}
            value={4}
            type="checkbox"
            checked={this.state[4]}
          />
        </label>
      </div>
    );
  }
}

export default Filters;
