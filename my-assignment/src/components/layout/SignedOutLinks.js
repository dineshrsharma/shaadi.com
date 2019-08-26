import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="signed-in right">
      <li><NavLink to="/">Login</NavLink></li>
      <li><NavLink to="/signup">Sign up</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;