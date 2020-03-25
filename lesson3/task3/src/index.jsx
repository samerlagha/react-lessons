import React from "react";
import ReactDOM from 'react-dom';
import "./comment.scss";
import "./styles.css";
import Comment from "./Comment";


const rootElem = document.querySelector('#root');
const authorInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatar-url-generator.org'
};


ReactDOM.render(
    <Comment
        author={authorInfo}
        text="Hello there!"
        date={new Date("2020-03-25T16:38:20.566Z")}
    />, rootElem);