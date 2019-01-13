import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

class EchartsLine extends Component {
	componentDidMount() {
		var myChart = echarts.init(this.el);

		let option = {
			title: {
				text: '一周完成进度',
				padding: [25, 15],
				textStyle: {
					color: '#505458',
					fontSize: 15
				}
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['个人成就点', '小组成就点'],
				padding: 25
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				axisLine: {
					lineStyle: {
						type: 'dashed',
						color: '#b7b7b7'
					}
				},
				axisTick: {
					show: false
				}
			},
			yAxis: {
				type: 'value',
				splitLine: {
					lineStyle: {
						color: '#e5e5e5',
						type: 'dashed'
					}
        },
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				}
			},
			series: [{
					name: '个人成就点',
					type: 'line',
					stack: '总量',
					data: [120, 132, 101, 134, 90, 230, 210],
					smooth: true,
					symbol: 'circle',
          symbolSize: 8,
					lineStyle: {
						color: '#ff9999'
					},
					itemStyle: {
						color: '#ff9999'
					}
				},
				{
					name: '小组成就点',
					type: 'line',
					stack: '总量',
					data: [320, 332, 301, 334, 390, 330, 320],
					smooth: true,
					symbol: 'circle',
          symbolSize: 8,
					lineStyle: {
						color: '#3ec1d3'
					},
					itemStyle: {
						color: '#3ec1d3'
					}
				}
			]
		};

		// 绘制图表
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

export default EchartsLine;
