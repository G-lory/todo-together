import styled from 'styled-components';

export const DashBoardWrapper = styled.div`
	flex-grow: 1;
	background: #f6f7fb;
	padding: 10px;
`;

export const FirstRow = styled.div`
	display: flex;
	margin-top: 30px;
`;

export const FirstRowCol = styled.div`
	flex-basis: 33.3%;
	padding: 0 20px;
`;

export const Card = styled.div`
	display: flex;
	padding: 20px;
	position: relative;
	flex-direction: column;
	word-wrap: break-word;
	background-color: #fff;
	border: 1px solid rgba(0,0,0,.125);
	border-radius: .25rem;
	text-align: right;
	.title {
		color: ${props => props.color};
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 14px;
	}
	.content {
		height: 40px;
    line-height: 40px;
    margin-top: 15px;
    font-size: 24px;
	}
	.iconfont {
		width: 60px;
    height: 60px;
		font-size: 35px;
		border-radius: 8px;
		background: ${props => props.color};
		color: #fff;
    position: absolute;
    top: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
	}
	&:hover {
		.iconfont {
			top: -25px;	
		}
	}
`;

export const SecondRow = styled.div`
	margin: 30px 0 20px;
	display: flex;
`;

export const SecondRowCol = styled.div`
	flex-basis: 50%;
	padding: 0 20px;
`;