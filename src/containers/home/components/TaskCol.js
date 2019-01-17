import React, { PureComponent } from 'react';

import { STATUS_CODE } from '../../../constants/task';


class TaskCol extends PureComponent {
	state = {
		in: false
	}
	handleDragEnter = (e) => {
		e.preventDefault();
		if (this.props.canDragIn) {
			this.setState({
				in: true
			})
		}
	}
	handleDragLeave = (e) => {
		e.preventDefault();
		if (this.props.canDragIn) {
			this.setState({
				in: false
			})
		}
	}
	handleDrop = (e) => {
		e.preventDefault();
		this.props.dragTo(this.props.status);
		this.setState({
			in: false
		})
	}
	render() {
		let { status, children } = this.props;
		return (
			<div 
				id={`col-${status}`} 
				className={'col'}
				onDragEnter={this.handleDragEnter}
				onDragLeave={this.handleDragLeave}
				onDragOver={this.handleDragEnter}
				onDrop={this.handleDrop}
				draggable="true"
			>
				<header className="col-header">
					{STATUS_CODE[status]}
				</header>
				<main className={'col-main' + (this.state.in ? ' active' : '')}>
					{children}
				</main>
			</div>
		);
	}
}

export default TaskCol;