#ECharts引入方式

##一、ECharts模块包引入
模块化开发 引入一个模块加载器，如esl.js
地址[https://github.com/ecomfe/esl]
需要配置好packages路径指向src，你将享受到图表的按需加载等最大的灵活性

由于echarts依赖底层zrender，你需要同时下zrender到本地
地址[https://github.com/ecomfe/zrender]

```angular2html
option={
	  title : {
		  text: '整体销售渠道占比',
		  x:'center'//标题居中显示
	  },
	   legend: {
      		  orient : 'vertical',
      		  x : 'left',//图例的显示位置
      		  data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      	  },
      	  
      	  toolbox是工具项
      	  
      	  饼状图中间是白色空隙
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
          					},
          					
          			周围有阴影加强效果		
          					emphasis: {
          						areaColor: null,
          						shadowOffsetX: 0,
          						shadowOffsetY: 0,
          						shadowBlur: 20,
          						borderWidth: 3,
          						shadowColor: 'rgba(0, 0, 0, 0.5)'
          					}
          					
          					
          					
           title: {
          		  text: '产品销量监测',
          		  link:'https://www.baidu.com',
          		  //指定标题连接，设置link后，鼠标移至标题处，变为小手，并且点击后跳转到link指定的连接，以新窗口的方式打开
          		  
          		  
          		  subtext:'(数量)张',
          		   //副标题文本超链接    
                  sublink: 'http://www.stepday.com/myblog/?Echarts', 
                  //水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）    
                  
                  //设置标题位置：
                   x: 'left',    
                   //垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）    
                   y: 'top'  

//设置标题样式：
          		  textStyle:{
          			  fontSize: 14,
          			  fontWeight: 'normal',
          			  color: '#333'
          		  },
          		  
//设置副标题样式：
          		  subtextStyle:{
          		  	color:'#333',
          			  textAlign:'center'
          		  }
          	  },
```