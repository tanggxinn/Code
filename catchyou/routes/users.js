
// 首先加载 express 模块

var express = require('express');

// 使用 express 模块获取 express.Router对象

var router = express.Router();

// 然后 express 模块在该对象上指定一个路由
// 该路由定义了一个回调，
// 只要检测到具有正确模式的HTTP GET 请求就会调用该回调。
// 匹配模式是模块导入时指定的路由（'/users'），
// 加上（'/'）文件中定义的任何内容。
// 换句话说，当收到/users/的 URL 时，
// 将使用此路由。

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 最后从模块中导出路由器
// （这就是允许将文件导入到 app.js 中的路由）。

module.exports = router;
