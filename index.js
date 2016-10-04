

// jquery 获取标签下所有的html

//$(document).ready(function(){
//	$("#btn1").click(function(){
//		alert($("#text").html())
//	});
//});

//  jquery 获取标签下所有的文本内容

//$(document).ready(function(){
//	$("#btn1").click(function(){
//		alert($("#text").text())
//	});
//});

// jquery 获取input标签下value的值

//$(document).ready(function(){
//	$("#btn1").click(function(){
//		alert($("#btn2").val())
//	});
//});

// jquery 获取标签对应的属性值

$(document).ready(function(){
	$("#btn1").click(function(){
		alert($("a").attr('href'))
	});
});