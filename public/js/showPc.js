/*
*获取属性，设置属性
*/
function showPic(whichpic){
	var source = whichpic.getAttribute("href");	//获取图片的href超链接
	var text = whichpic.getAttribute("title");	//获取图片的ttle属性
	var description = document.getElementById("description");	//获取要改变的对象，即description
	var placeholder = document.getElementById("placeholder");

	description.firstChild.nodeValue = text;	//使用nodeValue来改变某id对象的值
	placeholder.setAttribute("src",source);
}
//测试childNodes属性
function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
	console.log(body_element.childNodes.length);
}
