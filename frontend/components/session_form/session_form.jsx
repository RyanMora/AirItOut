import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import ErrorsContainer from '../errors/errors_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
  }

  componentWillUpdate() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.formType === "login") {
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>{"Signup"}</Link>;
    } else {
      return <Link to='/login'>{"Signin"}</Link>;
    }
  }

  guestLogIn(e) {
    e.preventDefault();
    let user = { username:"guest", password:"password" };
    this.props.login(user);
  }

  render() {
    let header;
    let submit;

    if (this.props.formType === 'login'){
      header = "Log In";
      submit = "Log In";
    } else {
      // header = "";
      submit = "Sign Up";
    }

    return(
      <div id="login">
        <div id="welcomeHeader">
          <h1 id="headerLogin">Air it Out!</h1>
          <h2 id="description"> - It's your turn to tell your side of the story!</h2>
        </div>

        <div id="session-form">
          <h1 id="form">{header}</h1>

          <div id="errors">{<ErrorsContainer />}</div>
          <form onSubmit={this.handleSubmit}>
            <div id="login-form">
              <label>Username</label>

              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />

              <label>Password</label>

              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />

              <div id="buttons">
                <button type="submit">{submit}</button>
                {this.navLink()}
                <button onClick={this.guestLogIn}>Guest Log In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
