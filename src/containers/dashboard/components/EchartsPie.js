import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';

class EchartsPie extends Component {
	componentDidMount() {
		var myChart = echarts.init(this.el);
		let option = {
			title: {
				text: '当前周期完成情况',
				padding: [25, 15],
				textStyle: {
					color: '#505458',
					fontSize: 15
				}
			},
			tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}(成就点): {c} ({d}%)"
			},
			series: [{
					name: '个人完成情况',
					type: 'pie',
					selectedMode: 'single',
					radius: [0, '30%'],
					label: {
						position: 'inner',
						formatter: '个人{b}',
						textBorderWidth: 0
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					color: (obj) => {
						switch(obj.data && obj.data.name) {
							case '待完成':
								return '#f38181';
							case '进行中':
								return '#ff9a00';
							case '已完成':
								return '#aa96da';
							default:
								return '#d9d9d9';
						}
					},
					data: [{
							value: 335,
							name: '待完成'
						},
						{
							value: 679,
							name: '进行中'
						},
						{
							value: 1548,
							name: '已完成'
						}
					]
				},
				{
					name: '小组完成情况',
					type: 'pie',
					radius: ['40%', '55%'],
					label: {
						normal: {
							formatter: '小组{b}'
						}
					},
					data: [{
							value: 251,
							name: '待完成'
						},
						{
							value: 147,
							name: '进行中'
						},
						{
							value: 102,
							name: '已完成'
						}
					],
					color: (obj) => {
						switch(obj.data && obj.data.name) {
							case '待完成':
								return '#f38181';
							case '进行中':
								return '#ff9a00';
							case '已完成':
								return '#aa96da';
							default:
								return '#d9d9d9';
						}
					}
				}
			]
		};

		myChart.setOption(option);
	}

	render() {
		let { style } = this.props;
		return (
			<div 
				ref={ el => this.el = el } 
				style = {{ width:400, height:400, ...style }}
			>
			</div>
		);
	}
}

export default EchartsPie;
