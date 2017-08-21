function bindData(datas, id) {
	var eleName = document.getElementById(id);
	var myChart = echarts.init(eleName);
	var clusterNumber = 6;
	var data = datas.data;
//clusterNumber 是由用户设定的数据簇的个数，最后一个 boolean 类型的变量是用来指定，静态地false可视化聚类的结果，还是动态地true可视化聚类的过程。
	var step = ecStat.clustering.hierarchicalKMeans(data, clusterNumber, true);
	var result;
	var option = {
		timeline: {
			show:false,
			top: 'center',
			right: 35,
			height: 300,
			width: 10,
			inverse: true,
			playInterval: 2500,
			symbol: 'none',
			orient: 'vertical',
			axisType: 'category',
			autoPlay: false,
			label: {
				normal: {
					show: false
				}
			},
			data: []
		},
		baseOption: {
			legend:{
				show:true,
				left:'right',
				data:datas.area
			},
			xAxis: {
				//坐标轴 轴线的颜色
				axisLine:{
					lineStyle:{
						color:'#7d84a5'
					}
				},
				//坐标轴值的字体颜色
				axisLabel:{
					textStyle:{
						color:'#00d4f8'
					}
				},
				type: 'value',
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				}
			},
			yAxis: {
				axisLine:{
					lineStyle:{
						color:'#7d84a5'
					}
				},
				axisLabel:{
					textStyle:{
						color:'#00d4f8'
					}
				},
				type: 'value',
				splitLine: {
					lineStyle: {
						type: 'dashed'
					}
				}
			},
			series: [{
				type: 'scatter'
			}]
		},
		options: []
	};
	for (var i = 0; !(result = step.next()).isEnd; i++) {
		option.options.push(getOption(result, clusterNumber));
		option.timeline.data.push(i + '');
	}
	function getOption(result, k) {
		var clusterAssment = result.clusterAssment;
		var centroids = result.centroids;
		var ptsInCluster = result.pointsInCluster;
		var color = ['#00b3ff', '#fd505b', '#01fedb', '#fff305'];
		var series = [];
		for (i = 0; i < datas.area.length; i++) {
			series.push({
				name: datas.area[i],
				type: 'scatter',
				animation: false,
				data: ptsInCluster[i],
				markPoint: {
					symbolSize: 29,
					label: {
						normal: {
							show: false
						},
						emphasis: {
							show: true,
							position: 'top',
							formatter: function (params) {
								return Math.round(params.data.coord[0] * 100) / 100 + '  ' +
									Math.round(params.data.coord[1] * 100) / 100 + ' ';
							},
							textStyle: {
								color: '#000'
							}
						}
					},
					itemStyle: {
						normal: {
							opacity: 0.7
						}
					},
					data: [{
						coord: centroids[i]
					}]
				}
			});
		}
		return {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross'
				}
			},
			series: series,
			color: color

		};
	}
	myChart.setOption(option);
}

