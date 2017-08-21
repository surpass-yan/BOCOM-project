/**
 * Created by Administrator on 2017/7/24.
 */
function distribution(url, eleIdName) {
	var ele = document.getElementById(eleIdName);
	var proChart = echarts.init(ele);
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
			x: 'left'
		},

		calculable: true,
		series: []
	};

	// 使用刚指定的配置项和数据显示图表。
	proChart.setOption(option);
	getAllDatas(url, ele);
}

//动态渲染series数据
function getAllDatas(url, ele) {
	var proChart = echarts.init(ele);
	$.get(url).done(function (data) {
		var Pro = [];
		var legend = [];
		for (var i = 0; i < data.length; i++) {
			var pro_team = {
				name: data[i].name,
				type: 'pie',
				radius: '55%',
				center: ['50%', '50%'],
				itemStyle: {
					normal: {
						label: {
							position: 'inner',
							formatter: '{b} : \n {d}%'
						},
						labelLine: {
							show: false
						},
						borderColor: '#fff',
						borderWidth: 3
					}
				},
				data: data[i].data
			};
			Pro.push(pro_team);
			for (var i = 0; i < data.length; i++) {
				for (var j = 0; j < data[i].data.length; j++) {
					legend.push(data[i].data[j].name);
				}
			}
		}
		proChart.setOption({
			legend: {
				data: legend
			},
			series: Pro
		});
	})
}
