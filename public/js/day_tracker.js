$(document).ready(function(){
    var d = new Date();
    var day = d.getDay();
    var msg =["耶，星期日",
                "周一到了，周末还会远么",
                "总算熬到周二了！！",
                "周三，好好开会，好好瞌睡",
                "奋战到底，周末，我来了！！",
                "周五了，等待下班~~",
                "哈哈哈~~~~~~"]
    $('#'+day).attr('id','tbody');
    $('#message').text(msg[day]);
});