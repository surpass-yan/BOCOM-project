function bindData(result, id) {
	var eleName = document.getElementById(id);
	var myChart = echarts.init(eleName);
	var series = [];
	var color = ['#00b3ff', '#fd505b', '#01fedb', '#fff305'];
	var option = {
		tooltip: {
			trigger: 'axis',
			showDelay: 0,
			axisPointer: {
				show: true,
				type: 'cross',
				lineStyle: {
					type: 'dashed',
					width: 1
				}
			}
		},
		color: ['#00b3ff', '#fd505b', '#01fedb', '#fff305'],
		xAxis: [
			{
				type: 'value',
				splitNumber: 4,
				scale: true,
				//坐标轴 轴线的颜色
				axisLine: {
					lineStyle: {
						color: '#7d84a5'
					}
				},
				//坐标轴值的字体颜色
				axisLabel: {
					textStyle: {
						color: '#00d4f8'
					}
				},
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				splitNumber: 4,
				scale: true,
				axisLine: {
					lineStyle: {
						color: '#7d84a5'
					}
				},
				axisLabel: {
					textStyle: {
						color: '#00d4f8'
					}
				},
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				}
			}
		],
		series: series
	};
	for(var i=0;i<result.category.length;i++){
		var obj={symbolSize:[20,20],type:'scatter',itemStyle:{
			normal:{
				backgroundColor:color[i]
			}
		}};
		obj.data=result.data[i].record;
		series.push(obj);
	}
	myChart.setOption(option);
}



