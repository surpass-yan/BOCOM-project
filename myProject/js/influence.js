function bindData(result, id) {
	var eleName = document.getElementById(id);
	var myChart = echarts.init(eleName);
	var contentHtml = template('myTemplate', {matchList: result.indicator});
	var data=result.indicator;
	var series=[];
	var option = {
		radar: {
			indicator: [
				{name: '知名度', max: 300,axisLabel: {show: true}},
				{name: '竞争力', max: 250},
				{name: '美誉度', max: 300},
				{name: '认知度', max: 5}
			],
			splitNumber: 3,
			name: {
				textStyle: {
					color: '#00dcff',
					fontSize: '16px'
				}
			},
			//设置轴线不显示
			axisLine: {
				show: false
			},
			//区域填充颜色
			splitArea: {
				show: true,
				areaStyle: {
					color: [{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#fff' // 0% 处的颜色
						},
							{
								offset: 1, color: 'blue' // 100% 处的颜色
							}],
						globalCoord: false // 缺省为 false
					},
						{
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'transparent' // 0% 处的颜色
							},
								{
									offset: 1, color: 'transparent' // 100% 处的颜色
								}],
							globalCoord: false // 缺省为 false
						},
						{
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: '#fff' // 0% 处的颜色
							},
								{
									offset: 1, color: 'blue' // 100% 处的颜色
								}],
							globalCoord: false // 缺省为 false
						}
					]
				}
			}
		},
		tooltip : {}
	};
	var lineStyle1={normal:{
			color: {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0, color: '#b8f4ff' // 0% 处的颜色
				}, {
					offset: 1, color: '#056fff' // 100% 处的颜色
				}],
				globalCoord: false // 缺省为 false
			}
		}},
		itemStyle1={
			normal: {
				color: '#F9713C'
			}
		};
	var lineStyle2={
				normal:{
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#fe0b11' // 0% 处的颜色
						}, {
							offset: 1, color: '#01f1d6' // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					}
				}
			},
		itemStyle2={
					normal: {
						color: '#B3E4A1'
					}
				};
	var lineStyle3={
				normal:{
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#fff' // 0% 处的颜色
						}, {
							offset: 1, color: '#fff' // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					}
				}
			},
		itemStyle3={
				normal: {
					color: 'rgb(238, 197, 102)'
				}
			};
	for (var i = 0; i < data.length;i++){
		var obj={};
		obj.type='radar';
		obj.symbol= 'none';
		obj.areaStyle= {
					normal: {
						opacity: 0.05
					}
				};
		obj.label={
			normal: {
				show: true,
					formatter: function (params) {
					return params.value;
				}
			}
		};
		if(data[i].id===1){
			obj.name=data[i].dataName;
			obj.lineStyle=lineStyle1;
			obj.data= data[i].dataNum;
			obj.itemStyle=itemStyle1;
		}else if(data[i].id===2){
			obj.name=data[i].dataName;
			obj.lineStyle=lineStyle2;
			obj.data= data[i].dataNum;
			obj.itemStyle=itemStyle2;
		}else if(data[i].id===3){
			obj.name=data[i].dataName;
			obj.lineStyle=lineStyle3;
			obj.data= data[i].dataNum;
			obj.itemStyle=itemStyle3;
		}
		series.push(obj);
	}
	$(".influence .right").append(contentHtml);
	changeLen(result);
	option.series=series;
	myChart.setOption(option);
}
//计算不同长度
function changeLen(result){
  var len=$('.right .len').width();
  var $list=$('.list .len');
	$list.each(function (index,item){
		console.log(item);
		var val=parseFloat(result.indicator[index].len)/100;
		$(item).width(val*len);
	 })
 }