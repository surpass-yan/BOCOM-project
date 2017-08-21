function bindData(result) {
	var contentHtml = template('myTemplate', {matchList: result});
	$(".left").append(contentHtml);
	var tabletHtml = template('right', {matchList: result});
	$("#content").append(tabletHtml);
	changeBg(result);
}

//li隔行变色
function changeBg(result) {
	var $oPs = $('.op');
	var $wid = $('#main .len');
	$oPs.each(function (index, item) {
		$(item).addClass('bg' + (index % 2));
		//设置p的不同宽度
		var wid = $wid.eq(index).width();
		var val = parseFloat(result[index].satisfactionDegree)/100;
		$(item).width(wid * val);
	});
}

