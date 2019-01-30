import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './containers/layout';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LocaleProvider locale={zhCN}>
				<Route path='/' component={Layout} />
        </LocaleProvider>
			</BrowserRouter>
    );
  }
}

export default App;
