var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	/*
		text/plain: 返回的是纯文本
		text/html: 返回的是html
		application/json: 返回的是json
	*/
	if(req.url !== "/favicon.ico"){
		// console.log(req.url);
		// 以下文本内容在浏览器中显示是乱码
		// if(req.url == "/" || req.url == "/home"){
		// 	res.writeHead(200,{"Content-type":"text/plain"});
		// 	res.end("这是Home主页");
		// }else if(req.url == "/about"){
		// 	res.writeHead(200,{"Content-type":"text/plain"});
		// 	res.end("这是About主页");
		// }else if(req.url == "/contact"){
		// 	res.writeHead(200,{"Content-type":"text/plain"});
		// 	res.end("这是联系我们主页");
		// }else{
		// 	res.writeHead(200,{"Content-type":"text/plain"});
		// 	res.end("404: 找不到您要的页面");
		// }
		

		if (req.url == "/" || req.url == "/home"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/home.html");
			myReadStream.pipe(res);
		}else if(req.url == "/about"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/about.html");
			myReadStream.pipe(res);
		}else if(req.url == "/contact"){
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/contact.html");
			myReadStream.pipe(res);
		}else{
			res.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname+"/error.html");
			myReadStream.pipe(res);
		}
	}
	
	// res.writeHead(200,{"Content-type":"application/json"});
	// var myReadStream = fs.createReadStream(__dirname+"/users.json","utf8");
	// myReadStream.pipe(res);
});
server.listen(3000,"127.0.0.1");
console.log("server is running...");