//绑定数据
function bindData(result) {
	//删除不该显示的行，即空行
	var strAry = result.platformsY;
	var obj = {};
	var num = result.data.length;
	for (var i = 0; i < num; i++) { //循环遍历data的每一项
		var cur = result.data[i].platforms.join(); //将data每一项中的数组 platforms 中的内容转为字符串，方便使用indexOf方法
		for (var y = 0; y < strAry.length; y++) {
			if (cur.indexOf(strAry[y]) === -1) {
				//如果在platforms中没有发现这个平台，就记录下来
				var cur_str = strAry[y];
				obj[cur_str] = obj[cur_str] ? obj[cur_str] + 1 : 1;//如果对象中对应的平台没有被记录过，则赋默认值1，如果被记录过则在原来的基础上+1
			}
		}
	}
	var _result = [];//储存不需要显示的平台
	for (var key in obj) {
		if (obj[key] >= num) {//num代表data有多少项数据，如果对象中对应的平台记录数大于等于这个数据，就代表这个平台没有在任何一条数据中出现过，然后将其添加到指定的数组中，用来接下来的删除操作
			_result.push(key)
		}
	}

	if(_result.length){
		for (var i = 0; i < strAry.length; i++) {
			//根据平台数进行循环遍历
			for (var y = 0; y < _result.length; y++) {
				//根据不需要显示的平台数量循环遍历
				if (strAry[i] === _result[y]) {
					//如果在这个位置找到了其中一个不需要显示的平台，就删除
					strAry.splice(i, 1);
					//i--，避免数组塌陷
					i--;
					//跳出这个for循环，节省性能
					break;
				}
			}
		}
	}
	var str = '';
	// 外层循环 行，有多少个平台就有几行
	$.each(strAry, function (i, platform) {
		str += '<tr>';
		$.each(result.data, function (j, item) {
			if (j === 0) {
				//	每一行的第一列，拼接上平台的名称
				str += '<td>' + platform + '</td>';
			}
			// 如果每个景点的平台列表（数组）包含该行的平台，就给拼接一个i标签
			if (item.platforms.indexOf(platform) > -1) {
				str += '<td><i></i></td>';
			} else {
				str += '<td></td>';
			}
		});
		str += '</tr>';
	});
	// 最后再加的一行 作为整个列表的X轴，从第二个单元格里填入景点名称
	str += '<tr class="last">';
	// 最后一行的第一个单元格空着
	str += '<td></td>';
	$.each(result.data, function (j, item) {
		// 最后一行单元格里接上每个景点的名称
		str += '<td>' + item['sight'] + '</td>';
	});
	str += '</tr>';
	$('#tb').html(str);
}
