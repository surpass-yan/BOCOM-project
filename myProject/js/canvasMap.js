var canvas,context;
function draw(){
  canvas=document.getElementById('myCanvas');
	//检查浏览器对canvas支持下
	if (canvas.getContext){
		context=canvas.getContext('3d');
	} else {

	}
 }