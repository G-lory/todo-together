import styled from 'styled-components';
import userBg from '../../statics/images/user-bg.png';

export const UserWrapper = styled.div`
`;

export const UserHeader = styled.div`
	height: 150px;
	background: url(${userBg});
	background-position: -50px -20px;
	display: flex;
	.avatar {
		height: 100px;
    width: 100px;
    margin: 25px 50px;
    border-radius: 50%;
	}
	.text {
		color: #fff;
		.username {
			font-size: 26px;
			margin-top: 40px;
			line-height: 50px;
		}
		.user-intro {
			font-size: 16px;
		}	
	}
`;