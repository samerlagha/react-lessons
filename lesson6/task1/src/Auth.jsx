import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  };
  render(){

    let button;
    if(!this.state.isLoggedIn){

        button =<button onClick={this.handleLogin}>Login</button>
        
    }else{
        button =<button onClick={this.handleLogout}>Logout</button>;
    }
    return (
        
      
      <div className="panel">

        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
        {/* {this.state.isLoggedIn
          ? <Logout isLogin={this.handleLogout} />
          : <Login isLogin={this.handleLogin} />} */}
      </div>
    );
  }
}
export default Auth;