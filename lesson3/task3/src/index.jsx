import React from "react";
import ReactDOM from 'react-dom';
import "./comment.scss";
import "./styles.css";
import Comment from "./Comment";


const rootElement = document.querySelector('#root');

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://someCoolAvarat.org'
};

ReactDOM.render(
    <Comment
  user={userInfo}
  text="Good job!"
  date={new Date('2020-03-26T06:43:54')}
  />,rootElement);