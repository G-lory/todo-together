import styled from 'styled-components';

export const Header = styled.div`
	height: 60px;
	background: #7ed3b2;
`;

export const Logo = styled.div`
	width: 200px;
	min-width: 200px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	color: #ebf0c2;
	font-size: 20px;
	.iconfont {
		font-size: 20px;
	}
`;

export const Main = styled.div`
	min-height: calc(100vh - 60px);
	display: flex;
	background: #f6f7fb;
`;

export const Section = styled.div`
	flex-grow: 1;
	padding: 10px;
`;