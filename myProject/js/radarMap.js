//绑定数据到页面
function bindData(result, eleId) {
	var eleName = document.getElementById(eleId);
	var myChart = echarts.init(eleName);
	var myData = [];
	var lenData = [];
	for (var i = 0; i < result.indicator.length; i++) {
		var cur = result.indicator[i];
		var defaultOption = {name: '', value: ''};
		
		var objAry = result.indicator[i].dataNum;
		var dataNum = [];

		//indicator 数据 [{name:'',max:''}]
		var indiArr=[];
		
		defaultOption.name = cur.dataName;
		lenData[i] = cur.dataName;

		$.each(objAry, function (index, item) {
			var indiObj={name:'',max:''};
			indiObj.name=item.contrastName;
			indiObj.max=item.reputationMax;
			dataNum.push(item.reputation);
			indiArr.push(indiObj);
		});
		defaultOption.value = dataNum;
		myData.push(defaultOption);
		defaultOption = null;
	}
	var option = {
		title: {
			text: '武当山与龙虎山景区美誉度对比雷达图',
			x: 'center',
			textStyle: {
				fontSize: '14px',
				fontWeight: 'normal'
			}
		},
		color: ['grey', 'blue'],
		legend: {
			orient: 'vertical',
			x: 'left',
			y: '20',
			data: lenData
		},
		radar: {
			name: {
				textStyle: {
					//设置坐标值颜色
					color: 'black'
				}
			},
			indicator: indiArr
		},
		series: [{
			name: '武当山美誉度 vs 龙虎山美誉度',
			type: 'radar',
			//显示对应数据
			label: {
				normal: {
					show: true,
					formatter: function (params) {
						return params.value;
					}
				}
			},
			data: myData
		}]
	};
	myChart.setOption(option);
}
