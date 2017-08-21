//柱状图，创建
function channelWarn(url, aviationDiv) {
	var myChart = echarts.init(aviationDiv);
	var option = {
		title: {
			text: '产品渠道异价预警（龙虎山）'
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			formatter: function (params) {
				var tar=[];
				for (var i = 1; i < params.length; i++) {
					tar.push(params[i].seriesName + ' : ' + params[i].value);
				}
				return tar;
			}
		},
		legend:{
			x:"70%"
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			splitLine: {
				show: false
			}
		},
		yAxis: {
			type: 'value'
		},
		series: []
	};

	myChart.setOption(option);
	channelwarnData(url, aviationDiv);
}

function jsonDateFormat(jsonDate) {
	try {
		var date = new Date(parseInt(jsonDate));
		var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
		var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
		return date.getFullYear() + "-" + month + "-" + day;
	} catch (ex) {
		return "";
	}
}
//动态渲染series数据
function channelwarnData(url, aviationDiv) {
	var myChart = echarts.init(aviationDiv);
	$.getJSON(url).done(function (data) {
		// var serie=[];
		var serie = [{
			name: "辅助",
			type: 'bar',
			stack: '总量',
			itemStyle: {
				normal: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				},
				emphasis: {
					barBorderColor: 'rgba(0,0,0,0)',
					color: 'rgba(0,0,0,0)'
				}
			},
			data: [100, 80, 120, 150, 40, 70, 200, 60]
		}];
		var legend = [];
		var xaxis = [];
		for (var i = 0; i < data.length; i++) {
			if (data[i].name == "驴妈妈") {
				var LMMdata = [];
				for (var j = 0; j < data[i].data.length; j++) {
					LMMdata.push(data[i].data[j].platformPrice);
					xaxis.push((jsonDateFormat(data[i].data[j].priceDate)).substring(5));
				}
				var item_LMM = {
					name: data[i].name,
					type: 'bar',
					// barWidth: 30,
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					data: LMMdata
				};

				serie.push(item_LMM);
			} else if (data[i].name == "同程") {
				var XCdata = [];
				for (var j = 0; j < data[i].data.length; j++) {
					XCdata.push((data[i].data[j].platformPrice));
				}
				var item_XC = {
					name: data[i].name,
					type: 'bar',
					// barWidth: 30,
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					data: XCdata
				};
				serie.push(item_XC);
			} else if (data[i].name == "蚂蜂窝") {
				var MFWdata = [];
				for (var j = 0; j < data[i].data.length; j++) {
					MFWdata.push((data[i].data[j].platformPrice));
				}
				var item_MFW = {
					name: data[i].name,
					type: 'bar',
					// barWidth: 30,
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'inside'
						}
					},
					data: MFWdata
				};
				serie.push(item_MFW);
			}
			legend.push(data[i].name);
		}

		myChart.setOption({
			legend: {
				data: legend
			},
			xAxis: {
				data: xaxis
			},
			series: serie
		});
	})
}