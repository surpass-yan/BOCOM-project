/**
 * Created by Administrator on 2017/7/24.
 */
ajax({
	url: '../json/distribution.json',
	type: 'GET',
	dataType: 'json',
	success: function (result) {
		console.log(result);
		bindData(result, 'box');
	}
});

// $.ajax({
// 	url: '../json/distribution.json',
// 	type: 'GET',
// 	dataType: 'json',
// 	success: function (data) {
// 		console.log(data);
// 		console.log(111);
// 	}
// })

/**
 *
 * @param:
 *
 * @return:
 *
 *
 * */
function bindData(result, eleIdName) {
	var myChart = echarts.init(document.getElementById(eleIdName));
	var legendData = [];
	for (var i = 0; i < result[0].data.length; i++) {
	    legendData.push(result[0].data[i].name);
	}
	var option = {
		title: {
			text: '分销渠道占比',
			x: 'center'
		},
		color: [
			'blue', 'orange'
		],
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			x: 'left',
			data: legendData
		},

		calculable: true,
		series: [
			{
				name: result[0].name,
				type: 'pie',
				radius: '55%',
				center: ['50%', '50%'],
				itemStyle: {
					normal: {
						label: {
							position: 'inner'
						},
						labelLine: {
							show: false
						},
						borderColor: '#fff',
						borderWidth: 3,
					}
				},
				data: result[0].data
			}
		]
	};
	myChart.setOption(option);
}