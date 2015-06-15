/*
*获取属性，设置属性
*/
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");	//获取图片的href超链接
	var placeholder = document.getElementById("placeholder");

	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text = whichpic.getAttribute("title");	//获取图片的ttle属性
		var description = document.getElementById("description");	//获取要改变的对象，即description
		if(description.firstChild.nodeType==3){
			description.firstChild.nodeValue = text;	//使用nodeValue来改变某id对象的值	
					
		}	
	}
	return true;
}

function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	alert("helo,in the prepareGallery");
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");

	for(var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			return showPic(this) ? false:true;
		}
		//links[i].onkeypress = links[i].onclick;
	}
}

//该函数能够产生一个函数队列，将你希望在页面加载完成之后需要运行的函数加入到
//队列中，通过这个函数可以很方便的实现扩展
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery);