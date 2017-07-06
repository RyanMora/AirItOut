import React from 'react';
import HeaderContainer from './header/header_container';

class Loading extends React.Component {
  render() {
    return(
      <div>
        <HeaderContainer />
        <div id="loading">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loading;
