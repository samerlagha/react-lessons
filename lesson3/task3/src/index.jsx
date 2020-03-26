import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment';

const rootElement = document.querySelector('#root');

const authorInfo={
    name: 'Tom',
    avatarUrl:'https://i.imgur.com/3McFm3K.png'
};

ReactDOM.render(
    <Comment
  author={userInfo}
  text="Good job!"
  date={new Date('2020-03-26T06:43:54')}
  />
)