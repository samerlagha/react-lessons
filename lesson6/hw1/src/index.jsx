import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Satus from './Satus';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Satus isOnline={true}/>, rootElement);