import React, { PureComponent } from 'react';
import { TaskListWrapper, TaskListTitle, TaskItem, AddTaskButton } from './style';

class TaskList extends PureComponent {
	render() {
		return (
			<TaskListWrapper>
				<TaskListTitle>
					任务列表
				</TaskListTitle>
				<div>
					<AddTaskButton>
						<i className="iconfont delete">&#xe683;</i>
						添加新任务
					</AddTaskButton>
				</div>
				<TaskItem>
					<span className="cr unchecked">
						<i className="iconfont">&#xe661;</i>
					</span>
					<span className="task-title">
						写英语作业
					</span>
					<i className="iconfont delete">&#xe605;</i>
				</TaskItem>
				<TaskItem>
					<span className="cr checked">
						<i className="iconfont">&#xe661;</i>
					</span>
					<span className="task-title checked">
						写语文作业
					</span>
					<i className="iconfont delete">&#xe605;</i>
				</TaskItem>
			</TaskListWrapper>
		)
	}
}

export default TaskList;