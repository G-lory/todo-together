import styled from 'styled-components';

export const TaskListWrapper = styled.div`
	border-radius: 5px;
	box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.12);
	border: none;
	padding: 0 20px;
	background: #fff;
	min-height: 100%;
`;

export const TaskListTitle = styled.div`
	font-size: 14px;
	font-weight: 600;
	color: #4e4e4e;
	padding: 20px 0 10px;
`;

export const TaskItem = styled.div`
	height: 50px;
	line-height: 50px;
	overflow: hidden;
	color: #4a4a4a;
	font-size: 15px;
	border-bottom: 1px solid #d8d8d8;
	.cr {
		border: 2px solid #4ec394;
    padding: 0 2px;
    margin-right: 5px;
		.iconfont {
			color: #4ec394;
			transition: all 0.3s ease-in;
		}
	}
	.cr.checked {
		.iconfont {
			transform: scale(1) rotateZ(0deg);
			opacity: 1;
		}
	}
	.cr.unchecked {
		.iconfont {
			transform: scale(3) rotateZ(-20deg);
			opacity: 0;
		}
	}
	.task-title.checked {
		text-decoration: line-through;
    color: #b1b1b1;
	}
	.delete {
		float: right;
    font-size: 26px;
    color: #cacaca;
	}
`;
