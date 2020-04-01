import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component{

    state ={
        onlinesatus:true,
        markSpiner:false
    };

    handleLogin=()=>{
        this.changeMarkSpinner();
        this.setState({onlinesatus:true});
    };

    handleLogout=()=>{
        this.changeMarkSpinner();
        this.setState({onlinesatus:false});
    };

    changeMarkSpinner=()=>{
        setTimeout(()=>{
            this.setState({
                markSpiner:false
            });
        },2000);
        this.setState({
            markSpiner:true
        });
    };

    render() {
        if (this.state.markForSpinner) {
          return <Spinner size={40} />;
        }
        return this.state.onlineSatus
          ? <Login onLogin={this.handleLogout} />
          : <Logout onLogout={this.handleLogin} />
      };
    };
    
    export default Auth;