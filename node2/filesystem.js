var fs = require("fs");

// 同步 读取&写入

// 读取文件
var readMe = fs.readFileSync('readMe.txt',"utf8");
// console.log(readMe);

var writeMe = readMe + '比心心o帅帅';
// 写入文件
fs.writeFileSync('writeMe.txt',writeMe);



// 异步 读取&写入
fs.readFile("readMe.txt","utf8",function(err,data){
	if(err){
		throw err;
	}else{
		console.log(data);
	}
});

console.log(123);  // 因为是异步，所以先打印123

fs.writeFile("writeMe.txt","hello world!",function(err,data){
	if(err) throw err;
	console.log(data);
});

// 异步读取文件readMe.txt,并将读取的内容写入到writeMe.txt中
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err) throw err;
// 	fs.writeFile("writeMe.txt",data);
// });

// 删除文件
// fs.unlink("writeMe.txt");

// 创建文件夹
// fs.mkdir("stuff");

// 删除文件夹
fs.rmdir("stuff");