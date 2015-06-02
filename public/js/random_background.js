$(document).ready(function(){	//当DOM页面加载完成后，开始运行这里指定的函数

	function randomColor(){
		return '#' + Math.random().toString(16).slice(2,8);		// # + 任意的六位数字
	};
	$("#button").on("click",function(){
		$('body').css('background',randomColor);	//jQuery的css方法，可以返回css属性，也可以设置相应的css属性
	})
});