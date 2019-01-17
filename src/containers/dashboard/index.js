import React, { PureComponent } from 'react';
import { DashBoardWrapper, FirstRow, FirstRowCol, Card,
	SecondRow, SecondRowCol } from './style';
import EchartsLine from './components/EchartsLine';
import EchartsPie from './components/EchartsPie';

class DashBoard extends PureComponent {
	render() {
		return (
			<DashBoardWrapper>
				{/*第一排显示 本周 完成点数最多 完成度最高 本周已经过去多少天*/}
				<FirstRow>
					<FirstRowCol>
						<Card color="#f38181">
							<i className="iconfont">&#xe603;</i>
							<span className="title">成就点最高</span>
							<h2 className="content">80(小夏)</h2>
						</Card>
					</FirstRowCol>
					<FirstRowCol>
						<Card color="#ff9a00">
							<i className="iconfont">&#xe692;</i>
							<span className="title">完成度最高</span>
							<h2 className="content">80%(橘子<span role="img" aria-label="juzi">🍊</span>)</h2>
						</Card>
					</FirstRowCol>
					<FirstRowCol>
						<Card color="#aa96da">
							<i className="iconfont">&#xe6f9;</i>
							<span className="title">小组完成度</span>
							<h2 className="content">90%</h2>
						</Card>
					</FirstRowCol>
				</FirstRow>
				<SecondRow>
					<SecondRowCol>
						<EchartsPie style={{ width: '100%', background: '#fff', border: '1px solid rgba(0,0,0,.125)' }} />
					</SecondRowCol>
					<SecondRowCol>
						<EchartsLine style={{ width: '100%', background: '#fff', border: '1px solid rgba(0,0,0,.125)' }} />
					</SecondRowCol>
				</SecondRow>
			</DashBoardWrapper>
		)
	}
}

export default DashBoard;