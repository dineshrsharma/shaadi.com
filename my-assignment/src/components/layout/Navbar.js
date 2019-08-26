import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.auth.authError === "Login failed" || auth.auth.authError === "new" ? <SignedOutLinks /> : <SignedInLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <Fragment>
        <div className="container">
          <Link to='/' className="brand-logo">Shaadi</Link>
          {links}
        </div>
      </Fragment>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state
  }
}

export default connect(mapStateToProps)(Navbar);