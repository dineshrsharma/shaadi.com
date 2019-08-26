import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    user: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="container" >
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="user">User</label>
            <input type="text" id="user" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red lighten-2">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;