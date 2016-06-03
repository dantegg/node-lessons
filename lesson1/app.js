var express = require('express');
//引入express模块，并将它赋予express这个变量等待使用

var app = express()  //调用express实例，是一个函数，不带参数调用时，会返回一个express实例，将这个变量赋予app变量

//app本身有很多方法，其中包括常见的get，post，put/patch，delete，我们调用其中的get方法，为我们的‘/’路径指定一个handler函数
// 这个handler函数会接收req和res两个对象，它们分别是请求的request和response。
// request中包含了浏览器传来的各种消息，比如query，body，headers之类的，都可以通过req对象访问到
// res对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如Headers信息，比如向浏览器输出的内容，这里我们调用它的
// #send方法，向浏览器输出一个字符串

app.get('/',function(req,res){
  res.send('Hello,Node js!!!Hello,world');
})

//定义好app的行为之后，让它监听本地的3000端口，这里的第二个函数是个回调函数，会在listen动作成功后执行，我们执行了一个命令输出操作，告诉我们监听动作已经完成
app.listen(3000,function(){
  console.log('app is listening at port 3000');
})
