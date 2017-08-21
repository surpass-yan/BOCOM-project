$.ajax({
	url: '../json/channel-cover.json',
	type: 'GET',
	dataType: 'json',
	success: function (result) {
		// console.log(result);
		result.status===200 ? bindData(result) : null;
	}
});
//数组去重方法
function singleArr(ary){
	var obj={};
	for (var i=0;i<ary.length;i++){
		var cur=ary[i];
		if(obj[cur]===cur){
			ary[i]=ary[ary.length-1];   //将最后一项补充到这
			ary.length--;
			i--;
		}else{
			obj[cur]=cur;
		}
	}
}
function bindData(result){
	var $areaArr=[];
	$.each(result.data,function (index,item){
			var $area=item.area;
			$areaArr.push($area);
	});
	singleArr($areaArr);
	console.log($areaArr);
	var contentNum=template('myTemplate',{matchNum:$numArr});
	console.log(contentNum);
  // var contentHtml=template('myTemplate',{matchList:result.data});
  $(".content .bottom").append(contentNum);
 }