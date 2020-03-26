import React from 'react';
import './avatar.scss';

const Avatar = props => {
    return (
      <img
      className="avatar"
      avatarUrl={props.avatarUrl}
      name={props.name} />
    );
};

export default Avatar;