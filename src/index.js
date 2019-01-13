import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './statics/iconfont/iconfont.css';
import { GlobalStyle } from './style'

ReactDOM.render(
	<React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
	, document.getElementById('root'));
