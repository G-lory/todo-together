import styled from 'styled-components';

export const LayoutWrapper = styled.div`
	position: relative;
`;

export const Header = styled.div`
	position: fixed;
	z-index: 9;
	display: flex;
	height: 80px;
	line-height: 80px;
	width: 100%;
	color: #4fd498;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding: 0 40px;
	background: rgba(255, 255, 255, 0.80);
`;

export const Logo = styled.div`
	font-size: 20px;
	.iconfont {
		font-size: 20px;
	}
`;

export const Main = styled.div`
	min-height: 100vh;
  padding: 100px 20px 20px;
	background: #f6f7fb;
`;


// components/Menu.js
export const MenuWrapper = styled.div`
	flex: 1 1;
	font-size: 16px;
	.menu-link {
		padding-left: 50px;
		text-decoration: none;
		color: #6b6b6b;
		outline: none;
	}
	.menu-link:hover {
		color: #4fd498;
	}
	
	.menu-link.activated {
		color: #4fd498;
		text-decoration: none;
	}
`;