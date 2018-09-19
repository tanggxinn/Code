// 使用 require()将一些有用的node 库导入到文件中，
// 其中包括我们先前使用 NPM 为应用程序下载的
//  express，morgan，cookie-parser 和path 库等等，
//  它是解析文件和目录路径的核心 node 库。

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// require()来自我们的路由目录的模块。
// 这些模块/文件包含用于处理特定的相关“路由”集合（URL路径）的代码。
// 当我们扩展骨架应用程序，
// 将添加一个新文件来处理与书籍相关的路由。

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 使用导入的 express 模块​​，
// 创建应用程序 app 对象

var app = express();

// 使用app来设置视图（模板）引擎。
// 引擎的设置有两个部分。
// 首先设置 'views' 值，
// 来指定模板将被存储的文件夹
// （在这种情况下是子文件夹 /views）。
// 然后设置 'view engine' 的值，
// 来指定模板库（在本例中为 “ejs” ）。

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 调用app.use(),
// 将中间件的库添加到请求处理链中。
// 除了之前导入的第三方库之外，
// 还使用express.static中间件，
// 使express提供项目根目录下的/public目录中所有静态文件。

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 将先前导入的路由处理代码添加到请求处理链中。
// 导入的代码将为网站的不同部分定义特定路由。

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 文件中的最后一个中间件，
// 为错误和 HTTP 404 响应添加了处理程序方法。

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Express 应用程序对象（app）现已完全完成配置。
// 最后一步是将其添加到模块导出（这允许它通过 /bin/www 导入）。

module.exports = app;