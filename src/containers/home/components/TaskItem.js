import React, { PureComponent } from 'react';

class TaskItem extends PureComponent {
	handleDragStart = (e) => {
		this.props.onDragStart(this.props.id);
	}
	render() {
		let { id, title, point, username, active, onDragEnd } = this.props;
		return (
			<div 
				onDragStart={this.handleDragStart}
				onDragEnd={onDragEnd}
				id={`item-${id}`} 
				className={'item' + (active ? ' active' : '')}
				draggable="true"
			>
				<header className="item-header">
					<span className="item-header-username">{username}</span>
					<span className="item-header-point">{point}</span>
				</header>
				<main className="item-main">{title}</main>
			</div>
		);
	}
}

export default TaskItem;