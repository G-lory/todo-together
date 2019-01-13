import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'


import './index.css'

class Menu extends React.Component {
	render() {
		let { width, height, routers, style, isCollapse } = this.props;
		if (!isCollapse) {
			return (
				<div className="menu-wrapper" style={{ width, height, ...style }}>
					{
						routers.map(r => 
							<NavLink 
								className="menu-link" 
								activeClassName="activated" 
								key={r.link} 
								to={r.link}> {r.name} </NavLink>
						)
					}
				</div>
			);
		} else {
			return (
				<div className="menu-wrapper-collapse">
				{
					routers.map(r => 
						<NavLink 
							className="menu-link-collapse" 
							activeClassName="activated" 
							key={r.link} 
							to={r.link}>
							<div className="menu-link-collapse-title">{r.name}</div>
							o
						</NavLink>
					)
				}
				</div>
			);
		}
	}
}
	
Menu.propTypes = {
	routers: PropTypes.array,
	height: PropTypes.string,
	width: PropTypes.string,
	// isCollapse: PropTypes.boolean
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
		name: '个人中心',
		link: '/other'
	}],
	width: '200px',
	isCollapse: false
};


export default Menu;