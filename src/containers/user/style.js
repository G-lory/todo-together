import styled from 'styled-components';
import userBg from '../../statics/images/user-bg.png';

export const UserWrapper = styled.div`
`;

export const UserHeader = styled.div`
	height: 150px;
// 	background: url(${userBg});
// 	background-position: -50px -20px;
	background: #fff;
	display: flex;
	box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.12);
	border-radius: 5px;
	margin: 10px 0;
	.avatar {
		height: 100px;
    width: 100px;
    margin: 25px 50px;
    border-radius: 50%;
		transition: all .3s;
		box-shadow: 0 0 1px 0 #000;
		&:hover {
			transform: scale(1.5);
		}
	}
	.text {
		color: #555;
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

export const UserContent = styled.div`
	box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.12);
	margin-top: 20px;
	padding: 20px;
	background: #fff;
	.content-title {
		height: 50px;
    font-size: 16px;
    line-height: 50px;
    padding-left: 20px;
    font-weight: 500;
	}
	.user-table {
		width: 100%;
		th, td {
			padding: 15px;
			border-top: 1px solid #e9ecef;	
		}
		th {
			font-weight: 900;
			width: 200px;
		}
	}
`;