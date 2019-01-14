import React, { PureComponent } from 'react';
import { UserWrapper, UserHeader } from './style';

class User extends PureComponent {
	render() {
		return (
			<UserWrapper>
				<UserHeader>
					<img className="avatar" src="https://avatars0.githubusercontent.com/u/17681072?s=400&u=070e5f32871cfb6996633faadae7b2236b98a3e4&v=4" />
					<div className="text">
						<p className="username">小夏不姓夏</p>
						<p className="user-intro">如果人生会有很长，愿有你的荣耀永不散场。</p>
					</div>
					
				</UserHeader>
			</UserWrapper>
		)
	}
}

export default User;