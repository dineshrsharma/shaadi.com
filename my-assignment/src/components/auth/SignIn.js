import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';
import Project from '../project/Project';

class SignIn extends Component {
  state = {
    user: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.auth.authError === 'Login Success') return <Redirect to='/project' />

    return (
      <div className="container" >
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="user">User</label>
            <input type="text" id="user" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red lighten-2">Login</button>
            <div className="red-text center">
              {authError === "Login failed" ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
        <Project />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);