//	渲染模板
function bindData(result) {
	var contentHtml=template('myTemplate',{matchList:result.data});
	$('.outer .bottom').append(contentHtml);
}

//	数字一直增加的
var value1 =$('.first span').text();
var value2 =$('.second span').text();
var value3 =$('.third span').text();
//		三位 个十百
var newVal=parseInt(value1+value2+value3);
var timer=setInterval(function (){
	newVal++;
	var len=newVal.toString().length;
//		     结果为一位数的时候
	if(len==1){
		$('.first span').text(0);
		$('.second span').text(0);
		$('.third span').text(newVal);
	}
//			 两位数
	if(newVal>9){
		$('.first span').text(0);
		$('.second span').text(parseInt(newVal/10));
		$('.third span').text(newVal%10);
	}
//			三位数
	if(len==3){
//				分别得到百位 十位 个位
		var hundreds=parseInt(newVal/100);
		var decade=parseInt(newVal%100/10);
		var unit=parseInt(newVal%10);
		$('.first span').text(hundreds);
		$('.second span').text(decade);
		$('.third span').text(unit);
	}
	var val1=$('.first span').text();
	var val2=$('.second span').text();
	var val3=$('.third span').text();
	if(val1==9 && val2==9 && val3==9){
		clearInterval(timer);
	}
},60000);