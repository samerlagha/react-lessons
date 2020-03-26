import React from 'react';
import './avatar.scss';

const UserAvatar = props => {
    return (
      <img
      className="avatar"
     avatarUrl={props.avatarUrl}
      name={props.name} />
    );
};

export default UserAvatar;