import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Ford'
    }
  }
  handleOnChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      userData:{
        ...this.state.userData,
        [name]: value
      }
    });
  };
  render() {
    const userData = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart
            userName={userData.firstName}
          />
          <Profile
            userData={userData}
            onChange={this.handleOnChange}
          />
        </main>
      </div>
    );
  }
};
export default App;