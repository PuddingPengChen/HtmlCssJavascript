$(document).ready(function(){
   function randomColor(){
        return "#" + Math.random().toString(16).slice(2,8);
   }; 

   $(".box").on("mouseenter",function(){
    $(this).css("background-color",randomColor());
    $(this).css('box-shadow', "0 0 8px white"); //鼠标扫过的方盒子会有白色的shadows
    $(this).css('z-index', "100000");   //z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
   });

   $(".box").on("mouseleave",function(){
        $(this).css("box-shadow","none");
        $(this).css("z-index","1");
   });
});