var http = require("http");
var fs = require("fs");
/*var myReadStream = fs.createReadStream(__dirname + "/readMe.txt" , "utf8");

var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');*/

/*
// console.log(myReadStream);
myReadStream.on("data",function(chunk){
	// console.log("=================接收chunk================="); //查看是否分段传输数据
	// console.log(chunk);

	myWriteStream.write(chunk);
});
*/

// 管道
// myReadStream.pipe(myWriteStream);

// 创建服务器
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	var myReadStream = fs.createReadStream(__dirname + "/readMe.txt" , "utf8");
	myReadStream.pipe(res);
});
server.listen(3000,"127.0.0.1");
console.log("server is running...");