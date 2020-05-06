import React, { Component } from "react";

const url = `https://api.github.com/users`;


class User extends Component {
  
  state = {
    user: null,
  
  }
 
  componentDidMount() {
    this.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== this.props.match.params.userId) {
      this.fetchUser(this.props.match.params.userId);
    }

  }
 
  fetchUser = (userId) => {
    fetch(`${url}/${userId}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          user: data,
        })
      );
  };

  render() {
    const user=this.state.user;
    if (!user) return null;
    
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={user.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{user.name}</span>
          <span className="user__location">{user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;