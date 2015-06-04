(function($){
	$.fn.disableSelection = function(){
		return this
					.attr('unselectable','on')
					.css('user-select','none')
					.on('selectstart',false);
	}
})(jQuery);

$(document).ready(function(){

	$('.box_shadow').on('click', function () {
		var current = $(this).css('box-shadow');	//获取当前的box_shadow的值，由于在css中，box_shadow只设置了一个属性值
		console.log(current);						//输出为 rgb(0, 0, 0) 0px 0px 0px 0px 
		var a = current.split('px');	//通过px来分割字符串
		console.log(a);			//["rgb(0, 0, 0) 0", " 0", " 0", " 0", ""] 
		var blur = a[a.length-3];
		console.log("blur = " + blur);	
		var spread = a[a.length-2];
		console.log("spread="+ spread);
		var newBlur = parseInt(blur) + 1;	//将获取到的字符串转换成数字,并加上1
		var newSpread = parseInt(spread) + 3;

		$(this).css('box-shadow', 'rgba(-1, 1, 0, 0.35) 0px 0px ' + newBlur + 'px ' + newSpread + 'px');
	});

	$('.text_shadow').on('click', function (event) {

		var current = $(this).css('text-shadow');

		var a = current.split('px');
		var blur = a[a.length-2];
		var vert = a[a.length-3];

		var newBlur = parseInt(blur) + 1; 
		var newVert = parseInt(vert) + 1; 
			
		event.stopPropagation();
		$(this).css('text-shadow', 'rgb(-1, 1, 0) 1px ' + newVert + 'px ' + newBlur + 'px');

	});

	$('body').disableSelection();	//这里的文字是不能被选中的
});