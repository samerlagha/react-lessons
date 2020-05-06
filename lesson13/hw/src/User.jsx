import React, { Component } from 'react';

class User extends Component {
    state = {
        userName: '',
        userLocation: '',
        userAvatar: '',
        counter: 0
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.url !== this.props.match.url) {
            this.fetchUserData(this.props.match.url);
        }
    }

    componentDidMount() {
        this.fetchUserData(this.props.match.url);
    }

    fetchUserData = (userPath) => {
        fetch(`https://api.github.com${userPath}`)
            .then(response => response.json())
            .then(user => this.setState({
                userName: user.name,
                userLocation: user.location,
                userAvatar: user.avatar_url
            }));
    }

    render() {
        const { userName, userLocation, userAvatar } = this.state;
        return (
            <div className="user">
                <img alt="User Avatar" src={userAvatar} className="user__avatar" />
                <div className="user__info">
                    <span className="user__name">{userName}</span>
                    <span className="user__location">{userLocation}</span>
                </div>
            </div>
        );
    }
};

export default User;

// import React, { Component } from "react";

// const url = `https://api.github.com/users`;


// class User extends Component {
  
//   state = {
//     user: null,
  
//   }
 
//   componentDidMount() {
//     this.fetchUser(this.props.match.params.userId);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.match.params.userId !== this.props.match.params.userId) {
//       this.fetchUser(this.props.match.params.userId);
//     }

//   }
 
//   fetchUser = (userId) => {
//     fetch(`${url}/${userId}`)
//       .then((response) => response.json())
//       .then((data) =>
//         this.setState({
//           user: data,
//         })
//       );
//   };

//   render() {
//     const user=this.state.user;
//     if (!user) return null;
    
//     return (
//       <div className="user">
//         <img
//           alt="User Avatar"
//           src={user.avatar_url}
//           className="user__avatar"
//         />
//         <div className="user__info">
//           <span className="user__name">{user.name}</span>
//           <span className="user__location">{user.location}</span>
//         </div>
//       </div>
//     );
//   }
// }

// export default User;