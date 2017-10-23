// 引入模块，会返回一个对象
var http = require("http");

// 使用对象调用方法，回调函数不会立即执行，server.listen之后才执行
// 会传递两个参数
var server = http.createServer(function(request,response){
	console.log("客户端和服务器已经建立通信"+request.url);
	// 如果是字符串的话不需要响应头，如果返回的是html或json数据时就需要响应头
	// 响应头(HTTP头部)
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end("Hey NodeJS");
});

server.listen(3000,"127.0.0.1");

console.log("server is running...");
