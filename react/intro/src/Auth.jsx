import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

//algo
// show login by default
// on Login click - show spinner during 2 sec
//after 2 sec show Logout but
// on Logout click - show login button

class Auth extends Component {
  state = {
    isLogIn: false,
    isSpinnerOn: false,
  };

  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}
export default Auth;