import React from 'react';
import Avatar from './Avatar';
import './author.scss';

const UserInfo = props => {
    return (
        <div className="user-info">
           
            <Avatar avatarUrl={props.author.avatarUrl} />
            <div className="user-info__name">{props.author.name}</div>
        </div>
    );
};

export default UserInfo;