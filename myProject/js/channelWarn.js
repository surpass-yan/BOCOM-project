//修改日期格式
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
//修改时间格式
function add0(m){return m<10?'0'+m:m }
function format(shijianchuo) {
//shijianchuo是整数，否则要parseInt转换
	var time = new Date(parseInt(shijianchuo));
	var y = time.getFullYear();
	var m = time.getMonth()+1;
	var d = time.getDate();
	var h = time.getHours();
	var mm = time.getMinutes();
	var s = time.getSeconds();
	return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}
function bindData(result){
    $.each(result.data,function (index,item){
		//改日期
        var curDate=item.abnormalDate;
		//改时间
		var curTime=item.warningTime;
		curDate=jsonDateFormat(curDate);
		curTime=format(curTime);
		item.abnormalDate=curDate;
		item.warningTime=curTime;
     });
  var contentHtml=template('myTemplate',{matchList:result.data});
  $("#content").append(contentHtml);
 }






