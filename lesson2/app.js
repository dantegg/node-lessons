//引入依赖

var express = require('express');
var utility = require('utility');
//建立express实例
var app = express();

app.get('/',function(req,res){
  // 从req.query中取出我们的q参数
  // 如果是post传来的body数据，则在req.body里面，不过express默认不处理body中的信息
  // 需要引入body-parser这个中间件来处理

  var q = req.query.q;
  var md5Value = utility.md5(q);
  res.send(md5Value);

})

app.listen(3000,function(req,res){
  console.log('app is listening at port 3000');
})
