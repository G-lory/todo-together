import React from 'react';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import Home from '../home';
import TaskList from '../taskList';
import User from '../user';
import Forum from '../forum';
import { LayoutWrapper, Header, Logo, Main } from './style';
import asyncComponent from '@components/AsyncComponent';

// 尝试引入异步组件 react.lazy 返回一个 function Route 不识别...
// const Dashboard = lazy(() => import('../dashboard'));
const AsyncDashboard = asyncComponent(() => import('../dashboard'));

class Layout extends React.PureComponent {
	render() {
		return (
			<LayoutWrapper>
				<Header>
					<Logo>
						<i className="iconfont">&#xe638;</i>todo together
					</Logo>
					<Menu></Menu>
				</Header>
				<Main>
					<Route path='/home' exact component={Home}></Route>
					<Route path='/tasklist' exact component={TaskList}></Route>
					<Route path='/dashboard' exact component={AsyncDashboard}></Route>
					<Route path='/user' exact component={User}></Route>
					<Route path='/forum' exact component={Forum}></Route>
				</Main>
			</LayoutWrapper>
		);
	}
}


export default Layout;
