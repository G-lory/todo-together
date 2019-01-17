import React, { PureComponent } from 'react';
import { UserWrapper, UserHeader, UserContent } from './style';

class User extends PureComponent {
	render() {
		return (
			<UserWrapper>
				<UserHeader>
					<img className="avatar" alt="" src="https://avatars0.githubusercontent.com/u/17681072?s=400&u=070e5f32871cfb6996633faadae7b2236b98a3e4&v=4" />
					<div className="text">
						<p className="username">小夏不姓夏</p>
						<p className="user-intro">如果人生会有很长，愿有你的荣耀永不散场。</p>
					</div>
				</UserHeader>
				<UserContent>
					<div className="content-title">
						用户信息
					</div>
					<table className="user-table">
						<tbody>
							<tr>
								<th>姓名</th>
								<td>夏柯一</td>
							</tr>
							<tr>
								<th>性别</th>
								<td>女</td>
							</tr>
							<tr>
								<th>邮箱</th>
								<td>xiaoxiabuxingxia@163.com</td>
							</tr>
							<tr>
								<th>地点</th>
								<td>北京</td>
							</tr>
							<tr>
								<th>生日</th>
								<td>1990/11/11</td>
							</tr>
							<tr>
								<th>简介</th>
								<td>一只废喵~</td>
							</tr>
						</tbody>
					</table>
				</UserContent>
			</UserWrapper>
		)
	}
}

export default User;