import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    isLogin: true,
    Spinner: false
  };
  onLogin = () => {
    this.changeSpinner();
    this.setState({ isLogin: true });
  };
  onLogout = () => {
    this.changeSpinner();
    this.setState({ isLogin: false });
  };
  changeSpinner = () => {
    setTimeout(() => {
      this.setState({
        Spinner: false
      });
    }, 2000);
    this.setState({
      Spinner: true
    });
  };
  render() {
    if (this.state.Spinner) {
      return <Spinner size={40} />;
    }
    return this.state.isLogin
      ? <Login onLogin={this.onLogout} />
      : <Logout onLogout={this.onLogin} />
  };
};

export default Auth;


