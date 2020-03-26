import React from 'react';
import moment from "moment";
import './comment.scss';

import UserAvatar from './Avatar';


const formatDate = date => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
    <div className="user-info">
   <UserAvatar
    avatarUrl={props.author.avatarUrl} 
    name ={props.author.name}
   
   />
    <div className="user-info__name">{props.author.name}</div>
  </div>
  );
}

export default Comment;