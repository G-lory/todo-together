import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './containers/layout';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <LocaleProvider locale={zhCN}>
          <Route path='/' component={Layout} />
          </LocaleProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
