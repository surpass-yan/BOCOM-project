function bindData(result, eleId) {
	var eleIdName = document.getElementById(eleId);
	var myChart = echarts.init(eleIdName);
	// 数据  数组
	var data = result.data;

	// x轴显示日期数组
	var dateX = [];
	for (var i = 0; i < result.allDate.length; i++) {
		var cur = jsonDateFormat(result.allDate[i]);
		dateX.push(cur);
	}
	var seriesData = [];
	for (var i = 0; i < data.length; i++) {
		//series  name
		var seriesObj = {
			name: '',
			data: '',
			type: 'line',
			symbol: 'rectangle',
			//不显示标记点
			markPoint: {
				data: [
					{type: 'max', name: '最大值'},
					{type: 'min', name: '最小值'}
				]
			}
		};
		var defaultArr = [];
		var obj = data[i];
		var len = obj.dataNumber.length;
		seriesObj.name = obj.name;
		//series  data
		for (var j = 0; j < len; j++) {
			var deData = obj.dataNumber[j];
			defaultArr.push(deData.number);
		}
		seriesObj.data = defaultArr;
		seriesData.push(seriesObj)
	}
	//legend
	var legendData = [];
	for (var k = 0; k < data.length; k++) {
		var cur = data[k];//对象
		legendData.push(cur.name);
	}

	var option = {
		title: {
			text: '产品销量监测',
			textStyle: {
				fontSize: 14,
				fontWeight: 'normal',
				color: '#333'
			}
		},
		color: ['red', 'lightskyblue'],
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: legendData,
			itemWidth: 10,
			itemHeight: 30,
			textStyle: {
				color: '#333',
				backgroundColor: 'orange',
				boxShadow: '10px 5px rgb(0,0,0)'
			}
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: dateX
		},
		yAxis: {
			name: '数量（张）',
			type: 'value',
			//去掉水平网格线
			splitLine: {
				show: false
			},
			axisLabel: {
				formatter: '{value}'
			}
		},
		series: seriesData
	};
	myChart.setOption(option);
}

//将时间戳修改日期格式
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
