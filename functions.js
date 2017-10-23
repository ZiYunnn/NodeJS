// 在Nodejs中经常使用函数表达式

// 正常函数
/*function sayHi(){
	console.log("Hello Jay!");
}

// 函数表达式
var sayHi = function(){
	console.log("Hello ziyunnn!");
}

sayHi(); //一个匿名函数赋给变量(函数表达式)比正常函数运行快*/

function sayHi1(){
	console.log("Hello Jay!");
}

var sayHi2 = function(){
	console.log("Hello ziyunnn!");
}

function callFunction(foo){
	foo();
}
callFunction(sayHi2);