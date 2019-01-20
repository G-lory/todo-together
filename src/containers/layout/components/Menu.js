import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuWrapper } from '../style';

class Menu extends React.Component {
	render() {
		return (
			<MenuWrapper>
				{
					this.props.routers.map(r => 
						<NavLink 
							className="menu-link" 
							activeClassName="activated" 
							key={r.link} 
							to={r.link}> {r.name} </NavLink>
					)
				}
			</MenuWrapper>
		);
	}
}
	
Menu.propTypes = {
	routers: PropTypes.array
};

Menu.defaultProps = {
	routers: [{
		name: '首页',
		link: '/home'
	}, {
		name: '任务库',
		link: '/tasklist'
	}, {
		name: '数据统计',
		link: '/dashboard'
	}, {
		name: '留言板',
		link: '/forum'
	}, {
		name: '个人中心',
		link: '/user'
	}]
};


export default Menu;