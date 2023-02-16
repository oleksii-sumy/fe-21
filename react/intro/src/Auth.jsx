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

  handleLogin = () => {
    this.setState({
      isSpinnerOn: true,
    });

    setTimeout(() => {
      this.setState({
        isLogIn: true,
        isSpinnerOn: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLogIn: false,
    });
  };

  render() {
    let button;
    if (this.state.isLogIn) {
      button = <Logout onLogout={this.handleLogout} />;
    } else {
      button = this.state.isSpinnerOn ? (
        <Spinner size={'50px'} />
      ) : (
        <Login onLogin={this.handleLogin} />
      );
    }
    return <>{button}</>;
  }
}
export default Auth;
