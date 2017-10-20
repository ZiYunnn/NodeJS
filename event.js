// js事件
// element.on("click",function(){
// 	// 具体执行的代码
// })


// 引入events模块
var event = require("events");
// 创建EventEmitter对象
var myEmitter = new event.EventEmitter();

// 注册事件
myEmitter.on("sbqEvent",function(){
	console.log("sbqEvent事件被触发！");
});

// 激活事件
myEmitter.emit("sbqEvent");